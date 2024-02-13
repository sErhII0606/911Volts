import axios from "axios";
import { url } from "../data";
const customFetch = axios.create({
  baseURL: url,
});

export { customFetch };
