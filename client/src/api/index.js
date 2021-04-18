import axios from "axios";

const url = "http://localhost:5000/buzzes";

export const fetchBuzzes = () => axios.get(url);
export const createBuzz = (newBuzz) => axios.post(url, newBuzz);
export const updateBuzz = (id, updatedBuzz) =>
  axios.patch(`${url}/${id}`, updatedBuzz);
export const deleteBuzz = (id) => axios.delete(`${url}/${id}`);
export const likeBuzz = (id) => axios.patch(`${url}/${id}/likeBuzz`);
