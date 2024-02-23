import React, { useEffect, useState } from 'react'
import axios, { CanceledError } from 'axios';

interface User{
  id: number;
  name: string;
  username: string;
}

const App = () => {

  const [users, setUsers]=useState<User[]>([])

  const [errorMessage, setErrorMessage] = useState("")

  

  function connect(){
		console.log("Connecting")
	}

	function Disconnect(){
		console.log("Disconnecting")
	}

  useEffect(() => {

    connect();
    // AbortController should always be called in useEffect()
    const controller = new AbortController();

    axios
    .get<User[]>('https://jsonplaceholder.typicode.com/users', {signal: controller.signal})
    .then(response => {
      setUsers(response.data); 
      console.log(response);
    })// then function informs what to do after fetching
    .catch(er_obj => {

      // below if function is written only because of strict mode, it won't be needed in development mode.
      if(er_obj instanceof CanceledError)
      {
        return;
      }

      setErrorMessage(er_obj.message)
    })// catch function is to tell what to do if some eroor occurs while fetching

    console.log("fetched")


    return () => {
      Disconnect();
      controller.abort();
    };
  }, [])

  return (
    <>
    {errorMessage && <p className="text-danger">{errorMessage} !!!</p>}

    <p>List is Below:</p>

    <ul>
      {users.map(info_u => <li key={info_u.id}>Id: {info_u.id} Name: {info_u.name} Username: {info_u.username}</li>)}
    </ul>   
    </>
  )
}

export default App