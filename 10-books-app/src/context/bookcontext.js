import { createContext, useReducer } from "react";



export const BookContext = createContext(

    {
        books: [],
        sortDesc: (books) => { },
        deleteBook: (id) => { },
        addBook: ({ bookName, author, description }) => { },
        //   deleteBook: (id) => { },
        //   updateBook: ({ bookName, author, description}) => {},
    });
function bookReducer(state, action) {
    switch (action.type) {
        case "SORTD":
            const inverted = action.payload.reverse();
            return inverted;
        case 'DELETE':
            return state.filter((b) => b.id !== action.payload);
        case 'ADD':
            return [action.payload, ...state];
        case 'UPDATE':
            const index = state.findIndex(
                (book) => book.id === action.payload.id
            );
            const updatableBook = state[index];
            const updatedItem = { ...updatableBook, ...action.payload.data };
            const updatedBooks = [...state];
            updatedBooks[index] = updatedItem;
            return updatedBooks;
        default:
            return state
    }
}
function BookProvider({ children }) {
    const [booksState, dispatch] = useReducer(bookReducer, [])
    function sortDesc(books) {
        dispatch({ type: 'SORTD', payload: books });

    }
    function deleteBook(id) {
        dispatch({ type: 'DELETE', payload: id });
    }
    function addBook(bookData) {

        dispatch({ type: 'ADD', payload: bookData });
    }
    function updateBook(id, bookData) {
        dispatch({ type: 'UPDATE', payload: { id: id, data: bookData } });
    }
    const value = {
        books: booksState,
        sortDesc: sortDesc,
        addBook: addBook,
        deleteBook: deleteBook,
        updateBook: updateBook,
    };
    return (
        <BookContext.Provider value={value}>
            {children}
        </BookContext.Provider>
    );
}
export default BookProvider

