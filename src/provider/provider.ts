import axios from "axios"

export const api = axios.create({
  baseURL: "https://crudcrud.com/api/f4ac4d9e39754d27aec8fdfe432d52b0",
  timeout: 1000,
})
