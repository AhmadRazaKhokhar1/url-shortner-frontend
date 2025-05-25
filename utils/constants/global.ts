import { loadDevMessages, loadErrorMessages } from "@apollo/client/dev";

export const API_ENDPOINT = {
  LOCAL: {
    GRAPHQL_URL: "http://localhost:8080/graphql",
    WS_GRAPHQL_URL: "ws:/localhost:8080/graphql",
    SERVER_URL: "http://localhost:8080/graphql",
    BASE_URL: "http://localhost:8080",
  },
  PROD: {
    GRAPHQL_URL: "https://production_url/graphql",
    WS_GRAPHQL_URL: "wss://production_url/graphql",
    SERVER_URL: "https://production_url/",
    BASE_URL: "https://production_url:8080",
  },
};

export const PROTECTED_ROUTE: Record<string, string> = {
  "(profile)": "/(tabs)/(profile)/profile-main",
};

if (process.env.NODE_ENV === "development") {
  loadDevMessages();
  loadErrorMessages();
}
