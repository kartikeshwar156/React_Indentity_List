import React, { useEffect, useState } from 'react'
// import api_client, { CanceledError } from 'api_client'; this import is not needed because of the below statement.
import {CanceledError} from './Services/api_client'; // this will automatically import api_client too.

import UserService, {User} from './Services/UserSErvice';
import useUsers from './Hooks/useUsers';
// in above import, class should be imported before the interface "User"


const App = () => {

  const {users, errorMessage, Loading, setUsers, setErrorMessage}=useUsers();

  const addUser = () => {
    const OriginalUser=[...users];
    const newUser = { id: 0, name: 'Mosh', username: "Mosh1Now"};
    setUsers([... users, newUser]);
    
    UserService.AddMyUser(newUser)
    .then(res => setUsers( [... users, res.data]))
    .catch(err_obj => {
      setErrorMessage(err_obj.message);
      setUsers(OriginalUser);
    })

  }

  function updateUser(info_u: User)
  {
    const originalUsers=[...users]
    const updatedUser={...info_u, name: info_u.name + " Hingole"}
    setUsers(users.map(cur_user => info_u.id===cur_user.id ? updatedUser : cur_user))
     
    
    UserService.UpdateMyUser(info_u.id, updatedUser)
    .catch(err => {
      setErrorMessage(err.message);
      setUsers(originalUsers)
    })

  }

  function deleteUser(info_u: User)
  {
    const OriginalUser=[...users];

    setUsers(users.filter(cur_user => cur_user.id !== info_u.id));
    // console.log('https://jsonplaceholder.typicode.com/users/'+info_u.id)

    UserService.DeleteMyUser(info_u.id)
    .catch(er_obj => {
      setErrorMessage(er_obj.message);
      setUsers(OriginalUser);
    });

    console.log(info_u.id)
  }

  return (
    <>
    {Loading && <div className="spinner-border"></div>}
    {errorMessage && <p className="text-danger">{errorMessage} !!!</p>}
    <button className="btn btn-primary mb-3" onClick={addUser}>Add</button>

    <ul className='list-group'>
      {users.map(info_u => <li key={info_u.id} className='list-group-item d-flex justify-content-between'>Id: {info_u.id} Name: {info_u.name} Username: {info_u.username} 
      <div>
        <button className="btn btn-outline-secondary mx-1" onClick={() => updateUser(info_u)}>Update</button>
        <button className="btn btn-outline-danger" onClick={()=>deleteUser(info_u)}>Delete</button>
      </div>
      </li>)}
    </ul>   
    </>
  )
}

// d-flex justify-content-between -> this is responsble for shifting delete buttons to right.

export default App