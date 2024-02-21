import React from "react";
import { categories } from "../App";

const ExpenseForm = () => {
  return (
    <>
      <form>
			<div className="mb-3">
			  <label htmlFor="description" className="form-label">
				 Description
			  </label>
			  <input id="description" type="text" className="form-control" />
			</div>
			<div className="mb-3">
			  <label htmlFor="amount" className="form-label">
				 Amount
			  </label>
			  <input id="amount" type="number" className="form-control" />
			</div>
			<div className="mb-3">
			  <label htmlFor="category" className="form-label">
				 Category
			  </label>
			  <select id="category" className="form-select">
						 <option selected>Open this select menu</option>
				 {/*
				 <option value="1">One</option>
				 <option value="2">Two</option>
				 <option value="3">Three</option> */}
						 {categories.map(item => <option key={item} value={item}> {item} </option>)}
			  </select>
			</div>
					<button className="btn btn-primary" type="submit">Submit</button>
		</form>
    </>
  );
};

export default ExpenseForm;
