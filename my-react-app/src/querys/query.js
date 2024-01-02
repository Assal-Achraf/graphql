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
    idcc
    name
  }
}
`;

export const addBookMutation = gql`
mutation($name:String!,$genre: String!,$authorId: ID!){
    addBook(name: $name, genre: $genre, authorId: $authorId){
        name
        id
    }
}
`;