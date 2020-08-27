import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import EmployeeForm from './EmployeeForm';

function EmployeeModal() {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Add Employee</Button>}
    >
      <Modal.Header>Add Employee</Modal.Header>
      <Modal.Content>
        <EmployeeForm/>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
            Close
        </Button>

      </Modal.Actions>
    </Modal>
  )
}

export default EmployeeModal;
