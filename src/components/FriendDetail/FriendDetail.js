import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {

    const { friendId } = useParams();
    const [friensDelails, setFriensDelails] = useState({});

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
            .then(res => res.json())
            .then(data => setFriensDelails(data))
    }, [])

    return (
        <div>
            <h1>Friend Detais is Comening Soon By ID No :{friendId}</h1>
            <p>Name : {friensDelails.name}</p>
            <p>Phone : {friensDelails.phone}</p>
            <p>Websit : {friensDelails.website}</p>
            <p>Work at : {friensDelails.company?.name}</p>
        </div>
    );
};

export default FriendDetail;