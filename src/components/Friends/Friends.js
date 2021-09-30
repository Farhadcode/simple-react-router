import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';
import './Friends.css'

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
            <div className="gred-card-style">
                {
                    friend.map(fd => <Friend
                        key={fd.id}
                        friend={fd}
                    ></Friend>)
                }
            </div>
        </div>
    );
};

export default Friends;