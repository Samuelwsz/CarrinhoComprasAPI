import axios from "axios"

export const api = axios.create({
  baseURL: "https://crudcrud.com/api/ea62ae1d25e04bc795c43f7f3e49f067",
  timeout: 1000,
})
