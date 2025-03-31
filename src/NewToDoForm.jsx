import { useState } from "react";
import { Link } from "react-router-dom";
import './App.css';
import './style.css';

function NewToDoForm({ onSubmit }) {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [body, setBody] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit({
            title,
            date,
            body,
            completed: false
        });
        setTitle('');
        setDate('');
        setBody('');
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className='new-item-form'>
                <div className='form-row'>
                    <label htmlFor="title">Title</label>
                    <input
                        type='text'
                        id='title'
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        required
                    />
                </div>

                <div className='form-row'>
                    <label htmlFor="date">Due Date</label>
                    <input
                        type='date'
                        id='date'
                        value={date}
                        onChange={e => setDate(e.target.value)}
                    />
                </div>

                <div className='form-row'>
                    <label htmlFor="body">Description</label>
                    <textarea
                        id='body'
                        value={body}
                        onChange={e => setBody(e.target.value)}
                    />
                </div>

                <div className="button-group">
                    <button type="submit" className='btn'>Add Todo</button>
                    <Link to="/" className='btn btn-danger'>Return</Link>
                </div>
            </form>
        </div>
    );
}

export default NewToDoForm;