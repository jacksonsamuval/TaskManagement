import axios from "axios";

const BASE_URL = "http://localhost:8080/task/";

export const getAllTasks = async () => {
  return await axios.get(BASE_URL + "allTasks"); // Using + for string concatenation
};


export const getTaskById = async (id) => {
  return await axios.get(`${BASE_URL}getTaskById/${id}`); // Corrected template literal usage
};


export const createTask = async (task) => {
  return await axios.post(`${BASE_URL}add`, task); // Corrected string concatenation
};


export const updateTask = async (id, task) => {
  return await axios.put(`${BASE_URL}update/${id}`, task); // Corrected template literal usage
};

export const deleteTask = async (id) => {
  return await axios.delete(`${BASE_URL}deleteTask/${id}`); // Corrected template literal usage
};
