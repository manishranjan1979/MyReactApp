import {all, call, put, takeLatest} from 'redux-saga/effects';
import {DepartmentTypes, DepartmentActionCreators} from './departmentActions';
import {getDepartments, postDepartment} from './../api/departmentServiceApi';
import DepartmentModel from '../../models/DepartmentModel';

export function* loadDepartments() {
    try {
        yield put(DepartmentActionCreators.loadDepartmentsStart());
        const departments = yield call(getDepartments);
        yield put(DepartmentActionCreators.loadDepartmentsSuccess(departments));
    } catch(e) {
        yield put(DepartmentActionCreators.loadDepartmentsError(e.message));
    }
}

export function* saveDepartment(action) {
    try {
        const savedDepartment = yield call(postDepartment, action.department);
        yield put(DepartmentActionCreators.saveDepartmentSuccess(savedDepartment));
    } catch(e) {
        yield put(DepartmentActionCreators.saveDepartmentError(e.message));
    }

}

export function* departmentSaga() {
    yield takeLatest(DepartmentTypes.LOAD_DEPARTMENTS, loadDepartments);
    yield takeLatest(DepartmentTypes.SAVE_DEPARTMENT, saveDepartment)
}