import React from 'react';
import { connect } from 'react-redux';

const PostList = ({posts, postList}) => {
    return(
        <>
            {posts.map(post => (
            <div key={post.id}>
                <p>{post.id}</p>
                <p>제목: {post.title}</p>
                <p>내용<br />{post.body}</p>
            </div>
            ))}
        </>
    )
}

const mapStateToProps = (state) => ({
    posts: state.posts
})


export default connect(mapStateToProps)(PostList);