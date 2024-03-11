import { customFetch } from "../../utils/CustomFetch";
import { x_api_key, token } from "../../data";
const header = (thunkAPI) => {
  return {
    "x-api-key": x_api_key,
  };
};

export const getAllProductsThunk = async (name, limit, thunkAPI) => {
  try {
    const resp = await customFetch.get(
      `/products?name=${name}`, //&name=Oil Separator&brand=Volvo&limit=${limit}
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
/*
brand
: 
"Volvo"
category
: 
"Engine"

name
: 
"Oil Separator"*/

export const searchByCategoryThunk = async ({ category, name }, thunkAPI) => {
  try {
    const resp = await customFetch.get(
      `/products/search?category=${category}&name=${name}`,
      {
        headers: header(),
      }
    );
    /*   console.log(
      resp.data.Items.map((i) => {
        return i.price;
      })); */
    // console.log(thunkAPI.getState().allProducts);
    console.log(resp.data);
    return resp.data;
  } catch (error) {
    console.log(thunkAPI.getState());
    return thunkAPI.rejectWithValue(error.response.data);
  }
};
