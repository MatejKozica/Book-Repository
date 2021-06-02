import React, { Fragment, useState, useContext } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input } from 'reactstrap';
import useInput from '../hooks/useInput';
import { BooksContext } from '../context/booksContext';
import { addBook } from '../actions/booksActions';

function BookForm(){
  const [ state, dispatch ] = useContext(BooksContext);
  
  const title = useInput('');
  const author = useInput('');
  const genre = useInput('');
  const series = useInput('');
  const lengthWords = useInput(0);
  const lengthPages = useInput(0);
  const description = useInput('');

  const book = [title, author, genre, series, lengthWords, lengthPages, description];
  
  const [ modal, setModal ] = useState(false);

  const onSubmit = e => {
    e.preventDefault();
    toggle();

    const newBook = {
      title: title.value,
      author: author.value,
      genre: genre.value,
      series: series.value,
      lengthWords: lengthWords.value,
      lengthPages: lengthPages.value,
      description: description.value,
      dateAdded: Date.now()
    }

    addBook(newBook, dispatch);
  }

  const toggle = () => {
    setModal(!modal);
  }
  
  return(
    <Fragment>
      <Button
        color="dark"
        style={{marginBottom: '2rem'}}
        onClick={toggle}
      >Add book</Button>
      <Modal
        isOpen={modal}
        toggle={toggle}
      >
        <ModalHeader toggle={toggle}>Add new book</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Input 
                type="text"
                placeholder="Title"
                style={{marginBottom: "1rem"}}
                autoComplete="off"
                {...title}
              ></Input>
              <Input 
                type="text"
                placeholder="Author"
                style={{marginBottom: "1rem"}}
                autoComplete="off"
                {...author}
              ></Input>
              <Input 
                type="text"
                placeholder="Genre"
                style={{marginBottom: "1rem"}}
                autoComplete="off"
                {...genre}
              ></Input>
              <Input 
                type="text"
                placeholder="Series"
                style={{marginBottom: "1rem"}}
                autoComplete="off"
                {...series}
              ></Input>
              <Input 
                type="text"
                placeholder="Number of words"
                style={{marginBottom: "1rem"}}
                autoComplete="off"
                {...lengthWords}
              ></Input>
              <Input 
                type="text"
                placeholder="Number of pages"
                style={{marginBottom: "1rem"}}
                autoComplete="off"
                {...lengthPages}
              ></Input>
              <Input 
                type="textarea"
                placeholder="Description"
                style={{marginBottom: "1rem"}}
                autoComplete="off"
                {...description}
              ></Input>
              <Button
                color="dark"
                style={{marginTop: "2rem"}}
                block
              >Add book</Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </Fragment>
  )
}

export default BookForm;