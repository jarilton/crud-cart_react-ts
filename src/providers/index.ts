import axios from "axios";

export const Api = axios.create({
    baseURL: process.env.API_URL
})