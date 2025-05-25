// Utils
import { API_ENDPOINT } from "@/utils";

// Apollo
import {
    ApolloClient,
    ApolloProvider,
    createHttpLink,
    from,
    InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";

// Core
import { ReactNode } from "react";
import toast from "react-hot-toast";

export default function ApolloClientProvider({
  children,
}: {
  children: ReactNode;
}) {
  // Error Link
  const errorLink = onError(({ graphQLErrors, networkError }) => {
    // Handle GraphQL errors
    if (graphQLErrors) {
      graphQLErrors.forEach(({ message, locations, path }) => {
        console.error(
          `GraphQL error: Message: ${message}, Location: ${locations}, Path: ${path}`,
        );
        toast.error(message);
      });
    }

    // Handle network errors
    if (networkError) {
      console.error(`Network error: ${networkError}`);

      // Check for 401 status
      if (
        networkError.message ===
        "Response not successful: Received status code 401"
      ) {
        localStorage.clear();
        toast.error("Your session has expired, please login again to continue");
        window.location.href = "/login";
        return;
      }

      // Handle other network errors
      const errorMessage = networkError.message || "Network error occurred";
      toast.error(errorMessage);
    }
  });

  const authLink = setContext((_, { headers }) => {
    // Getting Tokens (Using this method for non production application as cookies are only used in production)
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");

    return {
      headers: {
        ...headers,
        accessToken: accessToken ? `Bearer ${accessToken}` : "",
        refreshToken: refreshToken ? `Bearer ${refreshToken}` : "",
      },
    };
  });

  // Http Link
  const httpLink = createHttpLink({
    uri: API_ENDPOINT.LOCAL.GRAPHQL_URL,
    fetchOptions: {
      credentials: "include",
    },
  });

  // Client
  const client = new ApolloClient({
    link: from([errorLink, authLink, httpLink]),
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        errorPolicy: "all",
      },
      query: {
        errorPolicy: "all",
      },
    },
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
