import axios from "axios";

const clienteAxios = axios.create({
    // TODO Añadir a variables de entorno
    baseURL: `https://spotech-api-production.up.railway.app/api/v1`
})

export default clienteAxios