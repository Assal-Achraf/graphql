import React, { Component } from 'react';
import { useQuery, gql } from '@apollo/client';
const GET_Books = gql`
  query Books {
    books {
      id
      name
    }
  }
`;


function DisplayLocations() {
    const { loading, error, data } = useQuery(GET_Books);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
  
    return data.books.map(({ id, name }) => (
      <div key={id}>
        <h3>{name}</h3>
        <b>About this book:</b>
        <br />
      </div>
    ));
  }

export default DisplayLocations;