import axios from "axios"
import { BVXPRIVATE_PASSWORD, BVXPRIVATE_USERNAME } from "react-native-dotenv"
const bvxprivate = axios.create({
  baseURL: "https://vnvnvm.api.com",
  auth: { username: BVXPRIVATE_PASSWORD, password: BVXPRIVATE_USERNAME },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function bvxprivate_get_search_test_read(payload) {
  return bvxprivate.get(`/search/test`)
}
export const apiService = { bvxprivate_get_search_test_read }
