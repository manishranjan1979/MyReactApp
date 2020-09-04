import {all, call, put, takeLatest} from 'redux-saga/effects';
import {DepartmentTypes, DepartmentActionCreators} from './departmentActions';
import {getDepartments} from './../api/departmentServiceApi';


export function* loadDepartments() {
    try {
        yield put(DepartmentActionCreators.loadDepartmentsStart());
        const departments = yield call(getDepartments);
        yield put(DepartmentActionCreators.loadDepartmentsSuccess(departments));
    } catch(e) {
        yield put(DepartmentActionCreators.loadDepartmentsError(e.message));
    }
}

export function* departmentSaga() {
    yield takeLatest(DepartmentTypes.LOAD_DEPARTMENTS, loadDepartments);
}