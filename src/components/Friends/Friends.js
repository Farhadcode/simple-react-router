import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {
    const [friend, setFriend] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFriend(data))
    }, [])



    return (
        <div>
            <h2>I have Friends : {friend.length}</h2>
            {
                friend.map(fd => <Friend
                    key={fd.id}
                    friend={fd}
                ></Friend>)
            }
        </div>
    );
};

export default Friends;