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