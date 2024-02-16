import { useState } from "react";
import { AiFillAlert } from "react-icons/ai";


function Like() {
  let [Alertcolor, setAlertcolor]=useState(false)
  if(Alertcolor){
	return (
		<AiFillAlert color="red" size={145} onClick={() => setAlertcolor(false)}></AiFillAlert>
	  )
  }
  else{
	return (
		<AiFillAlert color="green" size={145} onClick={() => setAlertcolor(true)}></AiFillAlert>
	  )
  }
  
}

export default Like;