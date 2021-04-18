import * as api from "../api";

//Action creators
export const getBuzzes = () => async (dispatch) => {
  try {
    const { data } = await api.fetchBuzzes();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createBuzz = (buzz) => async (dispatch) => {
  try {
    const { data } = await api.createBuzz(buzz);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateBuzz = (id, buzz) => async (dispatch) => {
  try {
    const { data } = await api.updateBuzz(id, buzz);
    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteBuzz = (id) => async (dispatch) => {
  try {
    await api.deleteBuzz(id);
    dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

export const likeBuzz = (id) => async (dispatch) => {
  try {
    const { data } = await api.likeBuzz(id);
    dispatch({ type: "LIKE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
