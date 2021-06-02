import { ADD_BOOK, DELETE_BOOK, GET_BOOKS } from "../actions/types";

export const booksReducer = (state, action) => {
    switch(action.type){
        case GET_BOOKS:
            return { 
                books: action.payload
            }
        case ADD_BOOK:
            return {
                books: [action.payload, ...state.books]
            };
        case DELETE_BOOK:
            return {
                books: state.books.filter(book => book._id !== action.payload)
            };
        default:
            throw new Error(`Action not recognised: ${action.type}`);
    }
};
