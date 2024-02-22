import FormComponent from "./Components/FormComponent";
import Form from "./Components/Form";
import ExpenseForm from "./Components/ExpenseForm";
import ExpenseFilter from "./Components/ExpenseFilter";
import { useState } from "react";
import Expenselist from "./Expense_tracker/Components/Expenselist";

export const categories=["Groceries", "Entairtainment", "Education", "Travelling", "Fast Food", "Stocks"] as const

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Groceries"},
    { id: 2, description: "bbb", amount: 10, category: "Groceries"},
    { id: 3, description: "ccc", amount: 10, category: "Groceries"},
    { id: 4, description: "ddd", amount: 10, category: "Groceries"},
    { id: 5, description: "ddd", amount: 10, category: "Trips"}
  ]);

  // let shown_list=expenses;
  // const [shown_list, set_shown_list]=useState(expenses)

  // function on_selection(category_given: string){

  //   console.log(category_given)
  //   // shown_list=expenses.filter(e => e.category===category_given? e : null)
  //   set_shown_list(category_given ? expenses.filter(e => e.category===category_given) : expenses)

  // }

  function handleonDelete(id_delete: number)
  {
    setExpenses(expenses.filter(e => e.id!==id_delete))

  }

  function onSubmit(data: { description: string; amount: number; category: "Groceries" | "Entairtainment" | "Education" | "Travelling" | "Fast Food" | "Stocks"; })
  {
    setExpenses([...expenses, {...data, id: expenses.length+1}])
    // set_shown_list(expenses)
    console.log(data)
  }

  return (
    <>
      <ExpenseForm onSubmit={(data) => onSubmit(data)} />
      <ExpenseFilter onSelectCategory={(category_given)=>category_given ? expenses.filter(e => e.category===category_given) : expenses}></ExpenseFilter>
      <Expenselist expenses={expenses} onDelete={(id)=>handleonDelete(id)} />
    </>
  );
}

export default App;
