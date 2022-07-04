import axios from 'axios'
import { API_IP } from '@env'

const api = axios.create({
  baseURL: API_IP,
})

export default api
