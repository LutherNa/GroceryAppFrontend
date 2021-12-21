import axios from "axios"

const apiBaseUrl = 'http://localhost:8081/api'
const baseHeaders = {"Content-Type": "application/json"}

let APIQuery
export default APIQuery = axios.create({
    baseURL: apiBaseUrl,
    headers: baseHeaders
})