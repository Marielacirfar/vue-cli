import axios from 'axios'
const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/Code-Pop/Real-World_Vue-3',
    whithCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})
export default {
    getEvents() {
        return apiClient.get('/events')//agrega a la URL de base para que podamos tomar esos eventos de la base de datos
    }
}
