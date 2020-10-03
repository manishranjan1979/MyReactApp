import react from 'react';
import axios, {AxiosPromise} from 'axios';
import DepartmentModel from '../../models/DepartmentModel'

export const baseUrl = "/myservice/department"

export async function getDepartments() : Promise<DepartmentModel[]> {
    const res = await axios.get(`${baseUrl}/all`);
    return res.data;
}

export async function postDepartment(department : DepartmentModel) {
    const res = await axios.post(baseUrl, department);
    return res.data;
}