import {createActions} from 'reduxsauce';

export const {Types: DepartmentTypes, Creators: DepartmentActionCreators} = createActions({
    loadDepartmentsStart: null,
    loadDepartments:null,
    loadDepartmentsSuccess:['payload'],
    loadDepartmentsError:['message'],
    saveDepartment:['department'],
    saveDepartmentSuccess: ['payload'],
    saveDepartmentError: ['message']
});