import {all, spawn} from 'redux-saga/effects';
import {departmentSaga} from './modules/department/redux/departmentSagas';

//single entry point to start all sagas at once
export default function* rootSaga() {
    yield all([
        spawn(departmentSaga)
        //, spawn(employeeSaga)
    ]);
}