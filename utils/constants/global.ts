import { loadDevMessages, loadErrorMessages } from "@apollo/client/dev";

export const API_ENDPOINT = {
  LOCAL: {
    GRAPHQL_URL: "http://localhost:8080/graphql",
    WS_GRAPHQL_URL: "ws:/localhost:8080/graphql",
    SERVER_URL: "http://1localhost:8080/graphql",
  },
  PROD: {
    GRAPHQL_URL: "https://production_url/graphql",
    WS_GRAPHQL_URL: "wss://production_url/graphql",
    SERVER_URL: "https://production_url/",
  },
};

export const PROTECTED_ROUTE: Record<string, string> = {
  "(profile)": "/(tabs)/(profile)/profile-main",
};

if (process.env.NODE_ENV === "development") {
  loadDevMessages();
  loadErrorMessages();
}
