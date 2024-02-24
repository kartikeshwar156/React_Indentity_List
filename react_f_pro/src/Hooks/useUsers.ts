import { useEffect, useState } from "react"
import UserService, { User } from "../Services/UserSErvice"
import { CanceledError } from "../Services/api_client"

const useUsers = () => {
  
	const [users, setUsers]=useState<User[]>([])

	const [errorMessage, setErrorMessage] = useState("")
 
	const[Loading, setLoading]=useState(false)
 
	
	useEffect(() => {
 
	  // AbortController should always be called in useEffect()
	  // const controller = new AbortController();
 
	  setLoading(true)
 
	  const {request, cancel}=UserService.getAllUsers()
	  request.then(response => {
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
		 cancel();
	  };
	}, [])
 
  return({users, errorMessage, Loading, setUsers, setErrorMessage})
}

export default useUsers