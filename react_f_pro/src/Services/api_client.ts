import axios, { CanceledError } from "axios";

export default axios.create({
	baseURL:'https://jsonplaceholder.typicode.com',
	// headers:{
	// 	'api-key': '...'
	// }
	// 
	// some servers demand api key with every http request, at that time you can pass the key like above.
})

export {CanceledError};