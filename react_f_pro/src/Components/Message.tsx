let count = 0;
function Message() {
	// let count = 0;

	function printcount() {
		count++;
		console.log(count)
	}

	return (
		<>
			<div>{count}</div>
			<button className="btn btn-primary" onClick={printcount}>{count}</button>
		</>
	)
}

export default Message;
