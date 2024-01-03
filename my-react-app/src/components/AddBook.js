import { useQuery,useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { GET_Author,GET_Books , addBookMutation } from '../querys/query';


const AddBook = () => {

    const { loading: authorLoading, error: authorError, data: authorData } = useQuery(GET_Author);  

    const [addBook,{ loading: bookLoading, error: bookError, data: bookData}] = useMutation(addBookMutation, {
        refetchQueries: [{query:GET_Books}]
      });

    const [state, setState] = useState({
        name: '',
        genre: '',
        authorId: ''
    });

    const DisplayAuthor = () => {
        
        if (authorLoading) return <option>Loading...</option>;
        if (authorError) return <p>Error : {authorError.message}</p>;

        return authorData.authors.map(author => {
            return (<option key={author.id} value={author.id}>{author.name}</option>);
        });
    };
    


    const submitForm = async (e) => {
        e.preventDefault()
        await addBook({ variables: { name: state.name,genre:state.genre,authorId:state.authorId }});
        if (bookLoading) {
            console.log("loding");
        }
        if (bookError) {
            console.log(bookError.message);
        }
    };

    return (
        <form id="add-book" onSubmit={submitForm} >
            <div className="field">
                <label>Book name:</label>
                <input type="text" onChange={(e) => setState({ ...state, name: e.target.value })} />
            </div>
            <div className="field">
                <label>Genre:</label>
                <input type="text" onChange={(e) => setState({ ...state,genre: e.target.value })} />
            </div>
            <div className="field">
                <label>Author:</label>
                <select onChange={(e) => setState({ ...state,authorId: e.target.value })}>
                    <option>Select author</option>
                    {DisplayAuthor()}
                </select>
            </div>
            <button>+</button>
        </form>
    )
}


export default AddBook