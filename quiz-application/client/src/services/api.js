import axios from 'axios';
import { API_URL } from '../constants/route';

export const fetchUserData = async (data) => {
    const headers = { phone: data.phone }

    try {
        const response = await axios.get(`${API_URL}/fetch-user-detail`, { headers: headers });
        return response?.data;
    } catch (error) {
        console.log('Error while fetching user data', error.message);
        return error?.response?.data;
    }
}

export const saveUserData = async (payload) => {
    const headers = { phone: payload.phone }

    // payload = JSON.stringify(payload);

    try {
        const response = await axios.post(`${API_URL}/save-user-detail`, payload, { headers: headers });
        return response?.data;
    } catch (error) {
        console.log('Error while fetching user data', error.message);
        return error.response.data;
    }
}