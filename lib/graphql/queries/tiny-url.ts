import { gql } from "@apollo/client";

export const GET_ALL_TINY_URLS = gql`
  query GetAllTinyUrls {
    getAllUrls {
      originalUrl
      shortUrl
      clicksCount
    }
  }
`;
