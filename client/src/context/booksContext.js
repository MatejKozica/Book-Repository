import { useReducer, createContext } from "react";
import { booksReducer } from '../reducers/booksReducer';

export const BooksContext = createContext();

const initialState = {
    books: [],
}

export function BooksContextProvider(props){
    const [state, dispatch] = useReducer(booksReducer, initialState);

    return (
        <BooksContext.Provider value={[state, dispatch]}>
            {props.children}
        </BooksContext.Provider>
    )
}