import axios from "axios"

export const api = axios.create({
  baseURL: "https://crudcrud.com/api/031e83580b17400aa174cba8d8caa90c",
  timeout: 1000,
})
