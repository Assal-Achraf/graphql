import { useQuery, gql } from '@apollo/client';
const GET_Author = gql`
  query Authors {
    authors {
      id
      name
    }
  }
`;


function DisplayAuthor() {
  const { loading, error, data } = useQuery(GET_Author);

  if (loading) return <option>Loading...</option>;
  if (error) return <p>Error : {error.message}</p>;

  return data.authors.map(author => {
    return( <option key={ author.id } value={author.id}>{ author.name }</option> );
});
}

const AddBook = ()=>{
    return(
        <form id="add-book">
                <div className="field">
                    <label>Book name:</label>
                    <input type="text" />
                </div>
                <div className="field">
                    <label>Genre:</label>
                    <input type="text" />
                </div>
                <div className="field">
                    <label>Author:</label>
                    <select>
                        <option>Select author</option>
                        { DisplayAuthor() }
                    </select>
                </div>
                <button>+</button>

            </form>
    )
}

export default AddBook