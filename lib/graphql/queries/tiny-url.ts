import { gql } from "@apollo/client";

export const GET_ALL_TINY_URLS = gql`
  query GetAllUrls($userId: String!) {
    getAllUrls(userId: $userId) {
      originalUrl
      shortUrl
      clicksCount
      userId
    }
  }
`;
