import { gql } from '@apollo/client';

export const CREATE_LINK = gql`
  mutation CreateLink($description: String!, $url: String!) {
    createLink(description: $description, url: $url) {
      id
      createdAt
      url
      description
    }
  }
`;
