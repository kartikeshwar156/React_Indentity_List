import React, { useEffect, useState } from 'react'
import axios from 'axios';

interface User{
  id: number;
  name: string;
  username: string;
}

const App = () => {

  const [users, setUsers]=useState<User[]>([])

  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {
    axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
    .then(response => setUsers(response.data))// then function informs what to do after fetching
    .catch(er_obj => setErrorMessage(er_obj.message))// catch function is to tell what to do if some eroor occurs while fetching
  }, [])

  return (
    <>
    {errorMessage && <p className="text-danger">{errorMessage}</p>}
    <ul>
      {users.map(info_u => <li key={info_u.id}>Id: {info_u.id} Name: {info_u.name} Username: {info_u.username}</li>)}
    </ul>   
    </>
  )
}

export default App