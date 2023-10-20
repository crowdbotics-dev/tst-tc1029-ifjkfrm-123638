import axios from "axios"
import { BVXPRIVATE_PASSWORD, BVXPRIVATE_USERNAME } from "react-native-dotenv"
const newFe = axios.create({
  baseURL: "https://vnvnvm.com",
  auth: { username: BVXPRIVATE_PASSWORD, password: BVXPRIVATE_USERNAME },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
