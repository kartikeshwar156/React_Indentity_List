import React, { useEffect, useState } from 'react'
// import api_client, { CanceledError } from 'api_client'; this import is not needed because of the below statement.
import api_client, {CanceledError} from './Services/api_client'; // this will automatically import api_client too.

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

    api_client
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
    
    api_client.post('/users', newUser)
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
     
    
    api_client
    .patch('/users/'+ info_u.id, updatedUser)
    .catch(err => {
      setErrorMessage(err.message);
      setUsers(originalUsers)
    })

  }

  function deleteUser(info_u: User)
  {
    const OriginalUser=[...users];

    setUsers(users.filter(cur_user => cur_user.id !== info_u.id));
    console.log('https://jsonplaceholder.typicode.com/users/'+info_u.id)

    api_client.delete('/users/'+info_u.id)
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