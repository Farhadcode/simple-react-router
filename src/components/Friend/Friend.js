import React from 'react';

const Friend = (props) => {

    //console.log(props);

    const { name, email, address } = props.friend
    return (
        <div>
            <h4> Name :{name} </h4>
            <p>Email : {email}</p>
            <p> address : {address.city}
                <br />
                ZipCode : {address.zipcode}
            </p>

        </div>
    );
};

export default Friend;