// Constants
import { API_ENDPOINT } from '@/utils/constants';

// Apollo
import { ApolloClient, ApolloLink, concat, createHttpLink, InMemoryCache, Observable, Operation, split } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';

// GQL
import { DefinitionNode, FragmentDefinitionNode } from 'graphql';
import { Subscription } from 'zen-observable-ts';

export const setupApollo = () => {
  const { GRAPHQL_URL, WS_GRAPHQL_URL } = API_ENDPOINT.LOCAL;

  // Hooks
  const userId=localStorage.getItem("userId")

  // Redux State
  const token = "sometoken"

  const cache = new InMemoryCache();

  const httpLink = createHttpLink({
    uri: GRAPHQL_URL,
  });

  const wsLink = new WebSocketLink({
    uri: WS_GRAPHQL_URL,
    options: {
      reconnect: true,
      timeout: 30000,
    },
  });

  const request = async (operation: Operation) => {

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : '',
        isAuth:!!token,
        userId
      },
    });
  };

  const requestLink = new ApolloLink(
    (operation, forward) =>
      new Observable((observer) => {
        let handle: Subscription;
        Promise.resolve(operation)
          .then((oper) => request(oper))
          .then(() => {
            handle = forward(operation).subscribe({
              next: observer.next.bind(observer),
              error: observer.error.bind(observer),
              complete: observer.complete.bind(observer),
            });
          })
          .catch(observer.error.bind(observer));

        return () => {
          if (handle) handle.unsubscribe();
        };
      })
  );

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(({ message, locations, path }) => {
        if (message.toLowerCase().includes('unauthenticate') || message.toLowerCase().includes('unauthorize')) {
        //   dispatch(logout())
        }

        console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
      });
    }
    if (networkError) {
      console.log(`[Network error]: ${networkError}`);
    }
  });

  // const terminatingLink = split(({ query }) => {
  //   const {
  //     kind,
  //     operation,
  //   }: OperationDefinitionNode | FragmentDefinitionNode =
  //     getMainDefinition(query);
  //   return kind === "OperationDefinition" && operation === "subscription";
  // }, wsLink);

  // Terminating Link
  const terminatingLink = split(({ query }) => {
    const definition = getMainDefinition(query) as
      | DefinitionNode
      | (FragmentDefinitionNode & {
          kind: string;
          operation?: string;
        });
    return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
  }, wsLink);

  const client = new ApolloClient({
    link: concat(ApolloLink.from([terminatingLink, requestLink, errorLink]), httpLink),
    cache,
    resolvers: {},
  });

  return client;
};
