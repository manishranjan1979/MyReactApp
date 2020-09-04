import {createReducer} from "reduxsauce";
import {DepartmentTypes} from './departmentActions';

export interface IDepartmentState {
    departments : any[];
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

export const handlers = {
    [DepartmentTypes.LOAD_DEPARTMENTS_START] : loadDepartmentsStart,
    [DepartmentTypes.LOAD_DEPARTMENTS_SUCCESS] : loadDepartments
}

export default createReducer(departmentInitialState, handlers);