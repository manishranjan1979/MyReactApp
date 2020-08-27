import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import DepartmentForm from './DepartmentForm';

function DepartmentModal() {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Add Department</Button>}
    >
      <Modal.Header>Add Department</Modal.Header>
      <Modal.Content>
        <DepartmentForm/>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
            Close
        </Button>

      </Modal.Actions>
    </Modal>
  )
}

export default DepartmentModal;
