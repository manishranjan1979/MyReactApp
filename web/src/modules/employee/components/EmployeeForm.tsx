import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import { Formik, FormikProps } from 'formik';
import { Form, Segment, Select, Radio} from 'semantic-ui-react';

export interface IProps {

}

export interface IState {

}

class EmployeeForm extends React.Component <IProps, IState> {

    constructor(props : IProps) {
        super(props);
    }

    render() {
        return (
            <Formik
                  initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    department: '',
                    salary: '',
                    gender: ''
                  }}
                  onSubmit={this.handleSubmit}
                  render={this.renderForm}
                />
            );
    }

    handleSubmit = (values : any, formikApi : any) => {
        alert(values.firstName);
        alert(values.lastName);
    }

    getDepartment = () => {
        const departments : any[] = [{text : 'Admin', value : 1}, {text : 'HR', value : 2}, {text : 'IT', value : 3}];
        return departments;
    }

    renderForm = (formik: FormikProps<any>) => (
        <div className={'form'}>
              <Form onSubmit={formik.handleSubmit}>
                  <Form.Group widths='equal'>
                    <Form.Input
                            name='firstName' fluid
                            label='First name'
                            placeholder='First name'
                            value={formik.values.firstName}
                            onChange={(e, {value}) => formik.setFieldValue('firstName', value)}
                            />
                    <Form.Input fluid
                            name='lastName'
                            label='Last name'
                            placeholder='Last name'
                            value={formik.values.lastName}
                            onChange={(e, {value}) => formik.setFieldValue('lastName', value)}
                            />
                  </Form.Group>
                  <Form.Group widths='equal'>
                    <Form.Input
                        name='email' fluid
                        label='Email'
                        placeholder='Email'
                        value={formik.values.email}
                        onChange={(e, {value}) => formik.setFieldValue('email', value)}
                        />
                    <Form.Select
                        name='department'
                        label='Department'
                        placeholder='Select Department'
                        options={this.getDepartment()}
                        onChange={(e, {value}) => formik.setFieldValue('department', value)}
                        />
                  </Form.Group>
                  <Form.Group widths='equal'>
                    <Form.Input
                        name='salary' fluid
                        label='Salary'
                        placeholder='salary'
                        value={formik.values.salary}
                        onChange={(e, {value}) => formik.setFieldValue('salary', value)}
                    />
                    </Form.Group>
                    <Form.Group>
                    <div className={'field'}>
                    <label>Gender</label>
                    </div>
                            <Form.Field>
                              <Radio
                                label='Male'
                                name='gender'
                                value='male'
                                checked={formik.values.gender === 'male'}
                            onChange={(e, {value}) => {formik.setFieldValue('gender', value)}}
                              />
                            </Form.Field>
                            <Form.Field>
                              <Radio
                                label='Female'
                                name='gender'
                                value='female'
                                checked={formik.values.gender === 'female'}
                                onChange={(e, {value}) => {formik.setFieldValue('gender', value)}}
                              />
                            </Form.Field>
                    </Form.Group>
                  <Form.Button type="submit">Submit</Form.Button>
              </Form>
          </div>
    )
}

export default EmployeeForm;