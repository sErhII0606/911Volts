import { customFetch } from "../../utils/CustomFetch";
import { x_api_key, token } from "../../data";
const header = () => {
  return {
    "x-api-key": x_api_key,
  };
};

export const createOrderThunk = async (order, thunkAPI) => {
  try {
    const resp = await customFetch.post(`orders`, order, {
      headers: {
        ...header(),
      },
    });

    console.log(thunkAPI.getState());
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
};
