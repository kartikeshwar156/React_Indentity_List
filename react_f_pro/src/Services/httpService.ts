import api_client from "./api_client";

// export interface User{
// 	id: number;
// 	name: string;
// 	username: string;
//  }

interface entity{
	id: number;
}

class httpService
{
  endpoint: string;

  constructor(endpoint: string)
  {
	 this.endpoint=endpoint
  }


  getAll<T>() { // Here T is called generic type parameter, a placeholder for (any) type,which in previous case was'User[]' So whatever we pass while getting a getall method will be used below, where we wrote T[]
	const controller = new AbortController();
   const request= api_client.get<T[]>(this.endpoint, {signal: controller.signal})

	return {request, cancel: () => controller.abort()}
  }

  Delete(id: number) {
	 return api_client.delete(this.endpoint + '/' +id)
  }

  Add<T>(entity: T) {
	return api_client.post( this.endpoint, entity)
  }

  Update<T extends entity>(entity: T) {
	return api_client.patch(this.endpoint + '/' + entity.id, entity)
  }
}

// export default new UserService;
// we will create a function for returning instance of this class.
const create = (endpoint: string) => new HttpService(endpoint);