import {useState, useContext} from 'react';
import BooksContext from './context/books';

export default function BookCreate() {
    const [title, setTitle] = useState('');
    const {createBook} = useContext(BooksContext)

    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        createBook(title);
        setTitle('');
    }

    return (
        <div className='book-create'>
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmit}>
                <label>Book Title:</label>
                <input className='input' type="text" value={title} onChange={handleChange} />
                <button className='button'>Create</button>
            </form>
        </div>
  )
}
