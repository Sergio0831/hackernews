import { gql } from '@apollo/client';

export const FEED_QUERY = gql`
  query LinksQuery {
    feed {
      links {
        id
        url
        description
      }
    }
  }
`;
