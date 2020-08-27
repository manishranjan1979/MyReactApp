import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import { Formik, FormikProps } from 'formik';
import { Form, Segment, Select, Radio} from 'semantic-ui-react';

export interface IProps {

}

export interface IState {

}

class DepartmentForm extends React.Component <IProps, IState> {

    constructor(props : IProps) {
        super(props);
    }

    render() {
        return (
            <Formik
                  initialValues={{
                    dName: '',
                    dPhone: '',
                    dAddress: ''
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
                            name='dName' fluid
                            label='Department Name'
                            placeholder='Department Name'
                            value={formik.values.dName}
                            onChange={(e, {value}) => formik.setFieldValue('dName', value)}
                            />
                    <Form.Input fluid
                            name='dPhone'
                            label='Phone No.'
                            placeholder='Phone Number'
                            value={formik.values.dPhone}
                            onChange={(e, {value}) => formik.setFieldValue('dPhone', value)}
                            />
                  </Form.Group>
                  <Form.Group widths='equal'>
                    <Form.TextArea
                        name='dAddress' fluid
                        label='Address'
                        placeholder='Address'
                        value={formik.values.dAddress}
                        onChange={(e, {value}) => formik.setFieldValue('dAddress', value)}
                        />
                  </Form.Group>
                  <Form.Button type="submit">Submit</Form.Button>
              </Form>
          </div>
    )
}

export default DepartmentForm;