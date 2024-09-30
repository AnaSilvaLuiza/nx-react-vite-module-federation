import { Button, Divider, Heading, Icon } from '@olmero/common-ui';
import {
  InputAdornment,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from '@mui/material';
import { IContactsSearchResponse } from '../../pages/team-admin/types/types';
import { useState } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useData } from '../../services/services';
import UsersTable from './user-table/user-table';
import InviteModal from '../invite-modal/invite-modal';

export default function TeamAdmin() {
  const usersInvites = [
    { email: 'email@email.com', status: 'Pending' },
    { email: 'email@email.com', status: 'Pending' },
    { email: 'email@email.com', status: 'Pending' },
  ];

  const rowStyle = (index: number) => ({
    backgroundColor: index % 2 === 0 ? '#ECE0E0' : 'transparent',
  });

  const headers = ['Email', 'Status'];
  const [searchText, setSearchText] = useState<string>('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event?.target?.value);
  };

  const query = `query {
    contactsSearch(SearchText: "${searchText}") {
      Id
      First_Name
      Last_Name
      Email
      Photo
      Job_Title
    }
  }`;

  const queryKey = ['contactsSearch', searchText, query];

  const { data } = useData(queryKey, query, searchText) ?? {};

  const { contactsSearch } = (data as IContactsSearchResponse) ?? [];

  const [openInviteModal, setOpenInviteModal] = useState(false);

  return (
    <>
      <Heading variant="h5">Organisation</Heading>
      <div className="teamAdmin__allUsers">
        <TextField
          variant="outlined"
          placeholder="Search users..."
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Icon icon={faSearch} />
              </InputAdornment>
            ),
          }}
          value={searchText}
          onChange={handleSearchChange}
        />
        <div className="teamAdmin__allUsers__Buttons">
          <Button.Root onClick={() => setOpenInviteModal(true)}>
            Invite
          </Button.Root>
          <Button.Root
            onClick={() => alert('Manage users clicked')}
            type="outlined"
          >
            Manage users
          </Button.Root>
        </div>
      </div>

      <Paper className="teamAdmin__tablePaper">
        <TableContainer className="teamAdmin__tableContainer">
          <Table stickyHeader>
            <TableHead className="bg-transparent">
              <TableRow>
                {headers.map((header) => (
                  <TableCell className="teamAdmin__tableCell" key={header}>
                    {header}
                  </TableCell>
                ))}
              </TableRow>{' '}
            </TableHead>
            <TableBody>
              {usersInvites?.map((row, index: number) => (
                <TableRow key={index} style={rowStyle(index)}>
                  <TableCell className="teamAdmin__tableCell">
                    {row.email}
                  </TableCell>
                  <TableCell className="teamAdmin__tableCell">
                    {row.status}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <Divider />

      <UsersTable contactsSearch={contactsSearch} />
      <InviteModal
        handleClose={() => setOpenInviteModal(false)}
        handleOpen={() => setOpenInviteModal(true)}
        open={openInviteModal}
      />
    </>
  );
}
