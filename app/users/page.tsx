import React from 'react'

//const UsersPage = () => {
    // get backend data from an external API jsonplaceholder.typicode.com

interface User{
    id: number;
    name: String;
}

const UsersPage = async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");

    // extract users information
   // const users = await res.json(); // use data in return statement
    // users is any kind of data. so make an interface to destructure needed data
    const users: User[] = await res.json();
  
    return (
    <>
        <div>UsersPage</div>
        <ul>
            { users.map(user =>  
                <li key = {user.id} >{user.name}</li>
                ) }
        </ul>

    
    </>
    

  )
}

export default UsersPage