let postId = 1;

export const addPost = ({title, body}) => ({
    type: 'ADD_POST',
    id: postId++,
    title, 
    body
});
