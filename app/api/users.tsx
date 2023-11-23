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
  console.log('data', data)
  // return 'hah'
  const response = await axios.post('/api/users', data);
  return response.data;
}