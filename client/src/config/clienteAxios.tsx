import axios from "axios";

const clienteAxios = axios.create({
    // TODO Añadir a variables de entorno
    baseURL: `http://localhost:4000/api/v1`
})

export default clienteAxios