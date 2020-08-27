import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import {Tab} from 'semantic-ui-react';
import EmployeeContainer from './../../employee/container/EmployeeContainer';
import DepartmentContainer from './../../department/container/DepartmentContainer';

class AppContainer extends React.Component {

    constructor(props: any) {
        super(props);
    }

    render() {

        const panes = [
          { menuItem: 'Employee', render: () => <Tab.Pane><EmployeeContainer/></Tab.Pane> },
          { menuItem: 'Department', render: () => <Tab.Pane><DepartmentContainer/></Tab.Pane> }
        ]
        return (
            <Tab panes={panes} />
        )
    }
}

export default AppContainer;