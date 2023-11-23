import axios from 'axios';

export const getUsers = async () => {
  const response = await axios.get('/api/users');
  return response.data;
}

interface IUser {
  name: string,
  email: string
}
export const addUser = async (data: IUser) => {
  const response = await axios.post('/api/users', data);
  return response.data;
}

export const searchUser = async (id: string) => {
  const response = await axios.get(`/api/users/${id}`);
  return response.data;
}