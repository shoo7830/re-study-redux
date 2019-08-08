import React from 'react';
import { addPost } from '../actions';
import { connect } from 'react-redux';

const AddPost = ({dispatch}) => {
    const titleInput = React.createRef();
    const bodyInput = React.createRef();
    const clear = () => [
        titleInput.current.value='',
        bodyInput.current.value=''
    ]

    const handleSubmit = (e) => {
        e.preventDefault();
        const title = titleInput.current.value;
        const body = bodyInput.current.value;

        dispatch(addPost({title, body}))
        clear();
    }
    return (
        <form onSubmit={handleSubmit}>
            <p><input ref={titleInput} type="text" name="title" placeholder="제목을 입력하세요" /></p>
            <textarea ref={bodyInput} name="body" placeholder="글을 입력하세요"></textarea>
            <button>입력</button>
        </form>
    )
}

export default connect() (AddPost)