import axios, { AxiosHeaders } from "axios";

const baseURL = 'http://localhost:3001/books';

const getAllBooks = ()=>{
    const config = {
        headers: {Authorization: `bearer ${localStorage.getItem('token')}`} 
    }
    return axios.get(baseURL, config)
}

export default { getAllBooks };