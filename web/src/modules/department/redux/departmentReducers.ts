import {createReducer} from "reduxsauce";
import {DepartmentTypes} from './departmentActions';
import DepartmentModel from '../../models/DepartmentModel';

export interface IDepartmentState {
    departments : DepartmentModel[];
    loading : boolean;
}

const departmentInitialState : IDepartmentState = {
    departments : [],
    loading : false
}

export const loadDepartmentsStart = (state) => {
    return {...state, loading : true}
}

export const loadDepartments = (state, action) => {
    const departments = action.payload;
    return {...state, departments}
}

export const saveDepartment = (state, action) => {
    const department =action.payload;
    return {...state, departments : [...state.departments, department]}
}

export const handlers = {
    [DepartmentTypes.LOAD_DEPARTMENTS_START] : loadDepartmentsStart,
    [DepartmentTypes.LOAD_DEPARTMENTS_SUCCESS] : loadDepartments,
    [DepartmentTypes.SAVE_DEPARTMENT_SUCCESS] : saveDepartment
}

export default createReducer(departmentInitialState, handlers);