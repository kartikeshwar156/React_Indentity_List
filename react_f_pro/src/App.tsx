import React, { useEffect, useState } from 'react'
import axios from 'axios';

interface User{
  id: number;
  name: string;
  username: string;
}

const App = () => {

  const [users, setUsers]=useState<User[]>([])

  useEffect(() => {
    axios.get<User[]>('https://jsonplaceholder.typicode.com/users').then(response => setUsers(response.data))
  }, [])

  return (
    <>
    <ul>
      {users.map(info_u => <li key={info_u.id}>Id: {info_u.id} Name: {info_u.name} Username: {info_u.username}</li>)}
    </ul>   
    </>
  )
}

export default App