import axios from "axios";

const url = "https://hive-km2021.herokuapp.com/buzzes";

export const fetchBuzzes = () => axios.get(url);
export const createBuzz = (newBuzz) => axios.post(url, newBuzz);
export const updateBuzz = (id, updatedBuzz) =>
  axios.patch(`${url}/${id}`, updatedBuzz);
export const deleteBuzz = (id) => axios.delete(`${url}/${id}`);
export const likeBuzz = (id) => axios.patch(`${url}/${id}/likeBuzz`);
