import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from '../actions/postActions.jsx';

export const Posts = () => {
    const dispatch = useDispatch();
    const { newPost, posts  } = useSelector(state => ({
        newPost: state.posts.newPost,
        posts: state.posts.items,
      }));
      
    useEffect(() => {
        dispatch(fetchPosts());
    }
    , [dispatch, newPost])

    const postItems = posts.map(post => (
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    ))
    if (posts.length === 0) {
        return <p>Loading posts...</p>
    } else {
    return (
        <div>
            <p><strong>Posts</strong></p>
            {postItems}
        </div>
    )
    }
}

export default Posts;
