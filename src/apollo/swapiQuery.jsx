import { gql } from "@apollo/client";

export const SWAPI_TEST = gql`
  query {
    locations {
      description
    }
  }
`;
