import React from 'react'

import { FormEvent, useState } from 'react';

const Form = () => {

  const [person, setPerson]=useState({
	name: '',
	age: 0,
  })

  const handleSubmit = (event: FormEvent) =>{
	event.preventDefault();
	console.log(person)
  }

  function handle_namein(event: React.ChangeEvent<HTMLInputElement>){
	setPerson({...person,name: event.target.value})
	console.log(event)
  }

  function handle_agein(event: React.ChangeEvent<HTMLInputElement>){
	setPerson({...person,age: parseInt(event.target.value)})
  }

  return (
	<>
	 <form onSubmit={handleSubmit}>
		<div className="mb-3">
			<label htmlFor="name" className="form-label">Name</label>
			<input onChange={(event) => handle_namein(event)} value={person.name} id="name" type="text" className="form-control" />
		</div>
		<div className="mb-3">
			<label htmlFor="age" className="form-label">Age</label>
			<input onChange={(event) => handle_agein(event)} value={person.age} id="age" type="number" className="form-control" />
		</div>
		<button className="btn btn-primary" type="submit">Submit</button>
	 </form>
	</>
  );
}

export default Form