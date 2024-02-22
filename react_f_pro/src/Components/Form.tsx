import React from 'react'
import z from 'zod'
import { FormEvent, useState } from 'react';
import { useForm } from 'react-hook-form';


const Form = () => {

	const {register, handleSubmit, formState: {errors}}=useForm()


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
			{...register('name', {required: true, minLength: 3})}
			id="name" 
			type="text" 
			className="form-control" />
			{errors.name?.type=='required' && <p>we require a name</p>}
			{errors.name?.type=='minLength' && <p>we require a name of atleast 3 characters</p>}

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