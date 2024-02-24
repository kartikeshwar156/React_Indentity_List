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

  const[Loading, setLoading]=useState(false)

  

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

    setLoading(true)

    axios
    .get<User[]>('https://jsonplaceholder.typicode.com/users', {signal: controller.signal})
    .then(response => {
      setUsers(response.data); 
      console.log(response);
      setLoading(false);
    })// then function informs what to do after fetching
    .catch(er_obj => {

      // below if function is written only because of strict mode, it won't be needed in development mode.
      if(er_obj instanceof CanceledError)
      {
        return;
      }

      setErrorMessage(er_obj.message);
      setLoading(false);
    })// catch function is to tell what to do if some eroor occurs while fetching

    //(--|--) setLoading(false); writing this code line here is wrong., explanation on co-pilot.


    return () => {
      Disconnect();
      controller.abort();
    };
  }, [])

  const addUser = () => {
    const OriginalUser=[...users];
    const newUser = { id: 0, name: 'Mosh', username: "Mosh1Now"};
    setUsers([... users, newUser]);
    
    axios.post('https://jsonplaceholder.typicode.com/users', newUser)
    .then(res => setUsers( [... users, res.data]))
    .catch(err_obj => {
      setErrorMessage(err_obj.message);
      setUsers(OriginalUser);
    })

  }

  function deleteUser(info_u: User)
  {
    const OriginalUser=[...users];

    setUsers(users.filter(cur_user => cur_user.id !== info_u.id));
    console.log('https://jsonplaceholder.typicode.com/users/'+info_u.id)

    axios.delete('https://jsonplaceholder.typicode.com/users/'+info_u.id)
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
      {users.map(info_u => <li key={info_u.id} className='list-group-item d-flex justify-content-between'>Id: {info_u.id} Name: {info_u.name} Username: {info_u.username}  <button className="btn btn-outline-danger" onClick={()=>deleteUser(info_u)}>Delete</button></li>)}
    </ul>   
    </>
  )
}

// d-flex justify-content-between -> this is responsble for shifting delete buttons to right.

export default App