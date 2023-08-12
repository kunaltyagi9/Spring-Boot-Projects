import axios from 'axios';

const API_URL = 'http://localhost:8080';

export const getAllEmployees = async () => {
    try {
        const response = await axios.get(`${API_URL}/employees`);
        return response.data;
    } catch (error) {
        console.error('Error while calling the api ', error.message);
    }
}

export const uploadFile = async (data) => {
    try {
        const response = await axios.post(`${API_URL}/file/upload`, data);
        return response.data;
    } catch (error) {
        console.error('Error while calling the api ', error.message);
    }
}