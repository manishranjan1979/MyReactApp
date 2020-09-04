import {combineReducers} from 'redux';
import department from './modules/department/redux/departmentReducers';

const rootReducer = combineReducers({
        department
        });

export default rootReducer;