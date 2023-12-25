import { useQuery} from '@apollo/client';

import { GET_Books } from '../../querys/query';

function DisplayBooks() {
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

export default DisplayBooks