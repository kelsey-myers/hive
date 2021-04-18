import axios from "axios";

const url = "http://localhost:5000/buzzes";

export const fetchBuzzes = () => axios.get(url);
export const createBuzz = (newBuzz) => axios.post(url, newBuzz);
