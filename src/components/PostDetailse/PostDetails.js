import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const PostDetails = () => {
    const [postDetails, setPostDetails] = useState({});
    const { postId } = useParams();
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(res => res.json())
            .then(data => setPostDetails(data))
    }, []);



    return (
        <div>
            <h2>Post Details By Id:{postId}</h2>
            <h4>Post Title: {postDetails.title}</h4>
            <p>{postDetails.body}</p>

        </div>
    );
};

export default PostDetails;