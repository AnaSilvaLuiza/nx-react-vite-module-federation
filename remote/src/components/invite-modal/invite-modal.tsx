import { faPlus, faRemove } from '@fortawesome/free-solid-svg-icons';
import { TextField, Link } from '@mui/material';
import { Modal, Typography, Button } from '@olmero/common-ui';
import { useState } from 'react';
import { Form } from 'react-router-dom';

interface IProps {
  handleClose: () => void;
  handleOpen: () => void;
  open: boolean;
}

export default function InviteModal({ handleClose, handleOpen, open }: IProps) {
  const [users, setUsers] = useState<string[]>([]);
  const [currentEmail, setCurrentEmail] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const addUser = () => {
    if (!currentEmail) {
      setError('Please enter an email');
      return;
    }

    if (users.includes(currentEmail)) {
      setError('This email has already been added');
      return;
    }

    setUsers([...users, currentEmail]);
    setCurrentEmail('');
    setError('');
  };

  const removeUser = (userToRemove: string) => {
    setUsers(users.filter(user => user !== userToRemove));
  };

  const modalStyles = {
    '& .MuiDialog-container': {
      '& .MuiPaper-root': {
        padding: 6,
        width: 500,
        maxHeight: 516,
        '& .MuiDialogContent-root': {
          padding: '0',
          overflow: 'hidden',
        },
      },
    },
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Modal
        customSx={modalStyles}
        variant={Modal.variant.CUSTOM}
        handleClose={() => {
          handleClose();
          setError('');
        }}
        handleConfirm={handleOpen}
        title="Invite users"
        open={open}
        shouldShowCloseButton={false}
      >
        <div className="flex flex-col gap-4">
          <Typography>
            Invite users to your organisation by entering their email below. We will send them an email to accept.
          </Typography>

          <TextField
            placeholder="Enter email..."
            label="Email"
            value={currentEmail}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCurrentEmail(e.target.value)}
            fullWidth
            id="users"
            name="users"
            error={Boolean(error)}
            helperText={error ? error : ''}
          />
          <div className="flex flex-col gap-2" style={{ overflowY: 'auto', maxHeight: '5rem' }}>
            {users.map((user, index) => (
              <Link key={index} fontSize="small" onClick={() => removeUser(user)}>
                {user} <Button.Icon icon={faRemove} color="red" />
              </Link>
            ))}
          </div>
        </div>
        <Button.Root type="ghost" className="gap-1" onClick={addUser}>
          <Button.Icon icon={faPlus} /> <p>Invite another</p>
        </Button.Root>
      </Modal>
    </Form>
  );
}
