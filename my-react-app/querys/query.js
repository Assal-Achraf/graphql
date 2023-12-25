import { gql } from '@apollo/client';



export const GET_Author = gql`
query Authors {
  authors {
    id
    name
  }
}
`;

export const GET_Books = gql`
query Books {
  books {
    id
    name
  }
}
`;