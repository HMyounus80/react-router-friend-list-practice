import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const {name, email, id} = props.friend;
    const history = useHistory();
    const handleClick = (friendId) => {
        const url = `/friend/${friendId}`;
        history.push(url);
    }
    const friendStyle = {
        border: '1px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px'
    }
    return (
        <div style={friendStyle}>
            <h3>Name: {name}</h3>
            <h4>Email: {email}</h4>
        <Link to={`/friend/${id}`}>show detail of{id}</Link>
        <button onClick={() => handleClick(id)}>Click me</button>
        </div>
    );
};

export default Friend;