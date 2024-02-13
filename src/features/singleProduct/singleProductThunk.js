import { customFetch } from "../../utils/CustomFetch";
import { x_api_key, token } from "../../data";
const header = () => {
  return {
    "x-api-key": x_api_key,
  };
};
export const postReviewThunk = async ({ productId, reviews }, thunkAPI) => {
  try {
    const resp = await customFetch.put(
      `/products/${productId}/review`,
      { reviews },
      {
        headers: header(),
      }
    );
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
};
export const postStarViewThunk = async ({ productId, starView }, thunkAPI) => {
  try {
    const resp = await customFetch.put(
      `/products/${productId}/starView`,
      { starView },
      {
        headers: {
          ...header(),
          Authorization: thunkAPI.getState().user.user.IdToken,
        },
      }
    );
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
};
export const getProductThunk = async (productId, thunkAPI) => {
  try {
    const resp = await customFetch.get(
      `/products/${productId}`, //&name=Oil Separator&brand=Volvo
      {
        headers: header(),
      }
    );
    /*   console.log(
      resp.data.Items.map((i) => {
        return i.price;
      })); */
    // console.log(thunkAPI.getState().allProducts);
    return resp.data;
  } catch (error) {
    console.log(error.message);
    return thunkAPI.rejectWithValue(error.response.data);
  }
};
export const updateAmountThunk = async ({ productId, amount }, thunkAPI) => {
  try {
    const resp = await customFetch.put(
      `/products/${productId}/amount`,
      { amount },
      {
        headers: header(),
      }
    );
    /*   console.log(
      resp.data.Items.map((i) => {
        return i.price;
      })); */
    // console.log(thunkAPI.getState().allProducts);
    return resp.data;
  } catch (error) {
    console.log(error.message);
    return thunkAPI.rejectWithValue(error.response.data);
  }
};
