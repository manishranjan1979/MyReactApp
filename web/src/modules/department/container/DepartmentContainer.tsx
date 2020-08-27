import React from 'react'
import DepartmentModal from './../components/DepartmentModal';

class DepartmentContainer extends React.Component {

    constructor(props:any) {
        super(props);
    }

    render() {
        return (<DepartmentModal/>);
    }
}

export default DepartmentContainer;