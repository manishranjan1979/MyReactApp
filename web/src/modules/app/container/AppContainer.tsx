import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import {Tab} from 'semantic-ui-react';
import EmployeeContainer from './../../employee/container/EmployeeContainer';
import DepartmentContainer from './../../department/container/DepartmentContainer';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";
class AppContainer extends React.Component {

    constructor(props: any) {
        super(props);
    }

    render() {

        const panes = [
              {
                menuItem: {
                  as: NavLink,
                  id: "tab1",
                  content: "Employee",
                  to: "/employee",
                  exact: true,
                  key: "employee"
                },
                pane: (
                  <Route
                    path="/employee"
                    exact
                    render={() => (
                      <Tab.Pane>
                        <div><EmployeeContainer/></div>
                      </Tab.Pane>
                    )}
                  />
                )
              },
              {
                menuItem: {
                  as: NavLink,
                  id: "tab2",
                  content: "Department",
                  to: "/department",
                  exact: true,
                  key: "department"
                },
                pane: (
                  <Route
                    path="/department"
                    exact
                    render={() => (
                      <Tab.Pane>
                        <div><DepartmentContainer/></div>
                      </Tab.Pane>
                    )}
                  />
                )
              }
            ];

        /*const panes = [
          { menuItem: 'Employee', render: () => <Tab.Pane><EmployeeContainer/></Tab.Pane> },
          { menuItem: 'Department', render: () => <Tab.Pane><DepartmentContainer/></Tab.Pane> }
        ]
        return (
            <Tab panes={panes} />
        )*/

        return (
              <Router>
                  <Switch>
                    <Tab renderActiveOnly={false} activeIndex={0} panes={panes} />
                  </Switch>
              </Router>
            );
    }
}

export default AppContainer;