import { useState } from "react";


function Message() {
	// let count = 0;
	let count = 0;
	let [my_count, update_mycount]=useState(0)

	function printcount() {
		update_mycount(my_count+1)
		console.log(my_count)
	}

	count++
	console.log(count)

	

	return (
		<>
			<div>{count}</div>
			<button className="btn btn-primary" onClick={printcount}>{my_count}</button>
		</>
	)
}

export default Message;
