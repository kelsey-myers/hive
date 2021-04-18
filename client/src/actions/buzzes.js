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
    console.log.apply(error.message);
  }
};
