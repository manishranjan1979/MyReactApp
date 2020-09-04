import React from 'react'
import DepartmentModal from './../components/DepartmentModal';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import {DepartmentActionCreators} from '../redux/departmentActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getLoading, getDepartments} from '../redux/departmentSelectors';

export interface IDepartmentState {
    departments : any[]
}

export interface IDepartmentProps {
    loading : boolean;
    departments : any[];
}

class DepartmentContainer extends React.Component<IDepartmentProps & typeof DepartmentActionCreators> {

    state = {
        departments: []
    }

    constructor(props:any) {
        super(props);
    }

    componentDidMount() {
       const {loading, loadDepartments} = this.props;
       if(!loading) {
            loadDepartments();
       }
    }

    render() {
        const columnDefs = [
            { headerName: "Name", field: "dName", sortable : true, filter: true },
            { headerName: "Phone", field: "dPhone", sortable : true, filter: true },
            { headerName: "Address", field: "address", sortable : true, filter: true }];

        return (
            <div>
                <DepartmentModal/>
                <div className="ag-theme-alpine" style={ {height: '200px', width: '602px'} }>
                        <AgGridReact
                            columnDefs={columnDefs}
                            rowData={this.props.departments}>
                        </AgGridReact>
                      </div>
            </div>
        );
    }
}

const mapStateToProps = (state : any) : IDepartmentProps => {
    return {
        loading : getLoading(state),
        departments : getDepartments(state)
    };
};

const mapDispatchToProps = (dispatch:any) => {
    return {
        ...bindActionCreators(DepartmentActionCreators, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DepartmentContainer);