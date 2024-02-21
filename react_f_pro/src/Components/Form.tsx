import React from 'react'

import { FormEvent, useState } from 'react';
import { useForm } from 'react-hook-form';

const Form = () => {

	const {register, handleSubmit}=useForm()

// Use of below functions and useState for name, age is now
// not needed as we are using useForms.

//   const [person, setPerson]=useState({
// 	name: '',
// 	age: 0,
//   })

//   const handleSubmit = (event: FormEvent) =>{
// 	event.preventDefault();
// 	console.log(person)
//   }

//   function handle_namein(event: React.ChangeEvent<HTMLInputElement>){
// 	setPerson({...person,name: event.target.value})
// 	console.log(event)
//   }

//   function handle_agein(event: React.ChangeEvent<HTMLInputElement>){
// 	setPerson({...person,age: parseInt(event.target.value)})
//   }

  return (
	<>
	 <form onSubmit={handleSubmit(data => console.log(data))}>
		<div className="mb-3">
			<label htmlFor="name" className="form-label">Name</label>
			<input 
			{...register('name')}
			id="name" 
			type="text" 
			className="form-control" />
		</div>
		<div className="mb-3">
			<label htmlFor="age" className="form-label">Age</label>
			<input 
			{...register('age')} 
			id="age" 
			type="number" 
			className="form-control" />
		</div>
		<button className="btn btn-primary" type="submit">Submit</button>
	 </form>
	</>
  );
}

export default Form