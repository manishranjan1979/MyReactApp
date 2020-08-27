import React from 'react'
import EmployeeModal from './../components/EmployeeModal';

class EmployeeContainer extends React.Component {

    constructor(props:any) {
        super(props);
    }

    render() {
        return (<EmployeeModal/>);
    }
}

export default EmployeeContainer;