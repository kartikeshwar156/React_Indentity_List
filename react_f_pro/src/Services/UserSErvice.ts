import api_client from "./api_client";

export interface User{
	id: number;
	name: string;
	username: string;
 }

class UserService
{
  getAllUsers() {
	const controller = new AbortController();
   const request= api_client.get<User[]>('/users', {signal: controller.signal})

	return {request, cancel: () => controller.abort()}
  }

  DeleteMyUser(id: number) {
	 return api_client.delete('/users/'+id)
  }

  AddMyUser(newUser: User) {
	return api_client.post('/users', newUser)
  }

  UpdateMyUser(id: number, updatedUser: User) {
	return api_client.patch('/users/'+ id, updatedUser)
  }
}

export default new UserService;