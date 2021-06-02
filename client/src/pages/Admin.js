import { useContext, useEffect } from 'react';
import BookForm from '../components/BookForm';
import BooksTable from '../components/BooksTable';
import { BooksContext } from '../context/booksContext';
import { Container } from 'reactstrap';
import {deleteBook, getBooks} from '../actions/booksActions';

function Admin(){
  const [state, dispatch] = useContext(BooksContext);

  useEffect(() => {
    getBooks(dispatch);
  }, []);

  const removeBook = id => {
    deleteBook(id, dispatch);
  }

  return(
    <Container>
      <BookForm />
      <BooksTable books={state.books} onDelete={removeBook}/>
    </Container>
  )
}

export default Admin;