import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export const fetchUsersAPI = () => axios.get(API_URL);
export const addUserAPI = (user) => axios.post(API_URL, user);
export const deleteUserAPI = (id) => axios.delete(`${API_URL}/${id}`);
export const updateUserAPI = (user) => axios.put(`${API_URL}/${user.id}`, user);