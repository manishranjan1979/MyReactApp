import react from 'react';
import axios from 'axios';

export const baseUrl = "/myservice/department"

export async function getDepartments() {
    const res = await axios.get(`${baseUrl}/all`);
    return res.data;
}