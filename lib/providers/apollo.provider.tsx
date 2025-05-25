// Utils
import { API_ENDPOINT } from "@/utils";

// Apollo
import {
    ApolloClient,
    ApolloProvider,
    createHttpLink,
    InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

// Core
import { ReactNode } from "react";

export default function ApolloClientProvider({
  children,
}: {
  children: ReactNode;
}) {
  const authLink = setContext((_, { headers }) => {
    // Getting Tokens (Using this method for non production application as cookies are only used in production)
    const accessToken = localStorage.getItem("accessToken");
    console.log("🚀 ~ authLink ~ accessToken:", accessToken)
    const refreshToken = localStorage.getItem("refreshToken");
    console.log("🚀 ~ authLink ~ refreshToken:", refreshToken)

    return {
      headers: {
        ...headers,
        accessToken: accessToken ? `Bearer ${accessToken}` : "",
        refreshToken:refreshToken ? `Bearer ${refreshToken}` : "",
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
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
