import axios from 'axios';

const API_URL = 'http://localhost:5000/api/todos'; // adjust if needed

export const fetchTodos = () => axios.get(API_URL);
export const addTodo = (text) => axios.post(API_URL, { text });
export const toggleTodo = (id, completed) => axios.put(`${API_URL}/${id}`, { completed });
export const deleteTodo = (id) => axios.delete(`${API_URL}/${id}`);
export const updateTodo = (id, data) => axios.put(`${API_URL}/${id}`, data); // ✅ NEW
