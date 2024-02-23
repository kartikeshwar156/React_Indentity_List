import React, { useEffect, useState } from 'react'
import ProductList from './Components/ProductList';

const App = () => {

  const [category, setCategory]=useState('')

  return (
    <>
    <select className="form-select" onChange={(event) => setCategory(event.target.value)}>
      <option value="">Select The Categories</option>
      <option value="Clothing">Clothing</option>
      <option value="Household">Household</option>
      <option value="Groceries">Groceries</option>
    </select>
    <ProductList category={category}></ProductList>
    </>
  )
}

export default App