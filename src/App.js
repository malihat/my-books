import {useEffect, useContext} from 'react';
import BookCreate from './BookCreate';
import BookList from './BookList';
import BooksContext from './context/books';

export default function App() {
    const {fetchBooks} = useContext(BooksContext)

    useEffect(() => {
        fetchBooks();
    }, []);

    return (
        <div className='app'>
            <h1>Reading List</h1>
            <BookList  />
            <BookCreate />
        </div>
    )
}
