import EmployeeModel from './EmployeeModel';

export default interface DepartmentModel {
    dPhone: string
    dName: string
    address: string
    employeeDtoList?: EmployeeModel[]
}