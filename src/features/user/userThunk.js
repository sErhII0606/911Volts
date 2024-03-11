import { customFetch } from "../../utils/CustomFetch";
import { x_api_key, token } from "../../data";
const header = () => {
  return {
    "x-api-key": x_api_key,
  };
};
export const loginUserThunk = async (user, thunkAPI) => {
  console.log(user);
  try {
    const resp = await customFetch.post(`/user/login`, user, {
      headers: header(),
    });
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
};
export const registerUserThunk = async (user, thunkAPI) => {
  console.log(user);
  try {
    const resp = await customFetch.post(`/user/register`, user, {
      headers: header(),
    });
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
};
export const createOrderThunk = async (order, thunkAPI) => {
  try {
    const resp = await customFetch.post(`orders`, order, {
      headers: {
        ...header(),
        Authorization: thunkAPI.getState().user.user.IdToken,
      },
    });
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
};
export const getUserOrderHistoryThunk = async (userId, thunkAPI) => {
  try {
    const resp = await customFetch.get(`/user/order_history?userId=${userId}`, {
      headers: {
        ...header(),
        Authorization: thunkAPI.getState().user.user.IdToken,
      },
    });
    return resp.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.message);
  }
};
export const getUserOrderThunk = async (orderId, thunkAPI) => {
  try {
    const resp = await customFetch.get(`/user/order_history/${orderId}`, {
      headers: {
        ...header(),
        Authorization: thunkAPI.getState().user.user.IdToken,
      },
    });
    console.log(resp.data);
    return resp.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.message);
  }
};
