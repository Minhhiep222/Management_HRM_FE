import axios from 'axios';
import { useState } from 'react';

const API_BASE_URL = "http://127.0.0.1:8000/api";
// Hàm giả sử để parse cookie và lấy token

const parseTokenFromCookie = (cookie: any) => {
    const token = cookie.split('=')[1]; // Lấy token từ cookie
    const id = token.split('|')[0]
    return id;
};

function services() {
    const [employee, setEmployee] = useState<any>([])
    const handleGetUserById = async () => {
        const id = parseTokenFromCookie(document.cookie)
        try {
            const response = await axios.get(`${API_BASE_URL}/employees/${id}`);
            setEmployee(response.data.employee);
        } catch (error) {
            console.error("Error fetching user by ID:", error);
            throw error;
        }
    };

    return {
        employee, handleGetUserById
    }
}

export default services;