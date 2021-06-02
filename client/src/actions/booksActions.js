import axios from 'axios';
import {ADD_BOOK} from './types';

export const getBooks = async (dispatch) => {
    try{
        const res = await axios.get('/api/books');
        dispatch({
          type: "GET_BOOKS",
          payload: res.data,
        });
      }
    catch(err){
        console.log(err);
    }
};

export const addBook = async (book, dispatch) => {
    try{
        const res = axios.post('/api/books', book);
        dispatch({
            type: ADD_BOOK,
            payload: book,
        })
    }
    catch(err){
        console.log(err);
    }
};

export const deleteBook = async (id, dispatch) => {
    try{
        const res = await axios.delete(`/api/books/${id}`);
        dispatch({
            type: "DELETE_BOOK",
            payload: id
        })
    }
    catch(err){
        console.log(err);
    }
}