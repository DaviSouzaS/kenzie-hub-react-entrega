import axios from "axios";

export const request = axios.create({
    baseURL: "https://kenziehub.herokuapp.com",
    timeout: 5000
})