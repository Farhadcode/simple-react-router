import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Friend.css'
const Friend = (props) => {

    //console.log(props);
    const { id, name, email, address, } = props.friend;
    const history = useHistory();
    const url = `/friend/${id}`;


    const handleFriendClick = () => {
        history.push(`/friend/${id}`)
    }
    return (

        <div className="card-style">
            <h4> Name :{name} </h4>
            <p>Email : {email}</p>
            <p> address : {address.city}</p>
            <p> ZipCode : {address.zipcode}</p>
            <Link to={url}> See More ..
            </Link>
            <br />
            <Link to={url}>
                <button>More ...</button>
            </Link>
            <br />

            <button onClick={handleFriendClick}> More ..2</button>

        </div>





    );
};

export default Friend;