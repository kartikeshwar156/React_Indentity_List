import React from "react";
import categories from "../Expense_tracker/Categories";
import {useForm} from 'react-hook-form'; 
import { zodResolver } from "@hookform/resolvers/zod";
import {z} from 'zod';
import Message from "./Message";

interface props{
	onSubmit: (data: ExpenseFormData) => void;
}

const schema = z.object({

	description: z.string().min(3, {message: "description must be atleast of 3 characters"}).max(50),
	amount: z.number({invalid_type_error: "Amount is Required"}).min(0.01).max(1000000),
	category: z.enum(categories, {
		errorMap: () => ({message: "Category is Required"})
	}) // here categories input should be read only, so we added "as const" to original categories array

})

type ExpenseFormData = z.infer<typeof schema>

const ExpenseForm = ({onSubmit}:props) => {

	const {register, handleSubmit, formState: {errors}, reset}=useForm<ExpenseFormData>({resolver: zodResolver(schema)})
  return (
    <>
      <form onSubmit={handleSubmit((data)=>{
				onSubmit(data);
				reset();
			})}>
			<div className="mb-3">
			  <label htmlFor="description" className="form-label">
				 Description
			  </label>
			  <input {...register('description')} id="description" type="text" className="form-control" />
			  {errors.description && <p className="text-danger">{errors.description.message}</p>}
			</div>
			<div className="mb-3">
			  <label htmlFor="amount" className="form-label">
				 Amount
			  </label>
			  <input {...register('amount', {valueAsNumber: true})} id="amount" type="number" className="form-control" />
			  {errors.amount && <p className="text-danger" >{errors.amount.message}</p>}
			</div>
			<div className="mb-3">
			  <label htmlFor="category" className="form-label">
				 Category
			  </label>
			  <select {...register('category')} id="category" className="form-select">
						 <option value=''>Open this select menu</option>
				 {/*
				 <option value="1">One</option>
				 <option value="2">Two</option>
				 <option value="3">Three</option> */}
						 {categories.map(item => <option key={item} value={item}> {item} </option>)}
			  </select>
			  {errors.category && <p className="text-danger" >{errors.category.message}</p>}
			</div>
					<button className="btn btn-primary" type="submit">Submit</button>
		</form>
    </>
  );
};

export default ExpenseForm;
