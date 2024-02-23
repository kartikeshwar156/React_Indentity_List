import React, { useEffect, useState } from 'react'

const ProductList = ({category}: {category: string}) => {
	const [Products, setProducts]=useState([])

	function connect(){
		console.log("Connecting")
	}

	function Disconnect(){
		console.log("Disconnecting")
	}

   useEffect(()=>{
		connect();

		return () => Disconnect();
	},)

  return (
	 <div>ProductList</div>
  )
}

export default ProductList