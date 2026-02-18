import { environment } from "../../environment/environment.prod";

const BASE_URL = environment.apiBaseUrl;

export const API_ENDPOINTS = {

  slot: {
    getAll: `${BASE_URL}/slot/getAll`,
    // getProduct: `${BASE_URL}/product/getProduct?name=`

  }

}
