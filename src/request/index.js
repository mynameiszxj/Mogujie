import axios from 'axios'
export default function request(config) {
   const instance = axios.create({
      baseURL: 'http://123.207.32.32:8000',
      timeout: 1000,
      // headers: { 'token': 'foobar' }
   })
   return instance(config)
}