import React from "react";
import categories from "../Expense_tracker/Categories";

interface props {
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: props) => {
  return (
    <>
      <div className="mb-3 mt-3">
        <select
          name=""
          id=""
          className="form-select"
          onChange={(event) => onSelectCategory(event.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Groceries">Groceries</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Trips">Trips</option>
        </select>
      </div>
    </>
  );
};

export default ExpenseFilter;
