import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const FriendDetail = () => {
    const {friendId} = useParams();
    const [friend, setFriend] = useState({});
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data));
    },[])
    return (
        <div>
            <h1>This is a friend detail: {friendId}</h1>
            <h3>Name: {friend.name}</h3>
            <p>Email: {friend.email}</p>
            <p>Website: {friend.website}</p>
        </div>
    );
};

export default FriendDetail;