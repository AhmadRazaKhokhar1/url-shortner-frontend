import { gql } from "@apollo/client";

export const MAKE_TINY_URL = gql`
  mutation MakeTinyUrl($input: TinyUrlInput!) {
    makeTinyUrl(input: $input) {
      originalUrl
      shortUrl
      clicksCount
      userId
    }
  }
`;
