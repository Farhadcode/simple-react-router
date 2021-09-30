import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css'
const Friend = (props) => {

    //console.log(props);

    const { id, name, email, address, } = props.friend;
    const url = `/friend/${id}`
    return (

        <div className="card-style">
            <h4> Name :{name} </h4>
            <p>Email : {email}</p>
            <p> address : {address.city}</p>
            <p> ZipCode : {address.zipcode}</p>
            <Link to={url}> See More ..
            </Link>
        </div>





    );
};

export default Friend;