import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
} from '@mui/material';
import TableHeader from './header/header';
import { TableRowComponent } from './row/row';
import { IContact } from '../../../pages/team-admin/types/types';

interface IProps {
  contactsSearch: IContact[];
}

export default function UsersTable({ contactsSearch }: IProps) {
  return (
    <>
      {/* <SearchField
        placeholder="Search users..."
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleSearchChange(event)}
      /> */}
      {contactsSearch?.length ? (
        <Paper className="teamAdmin__tablePaper">
          <TableContainer className="teamAdmin__tableContainer">
            <Table stickyHeader>
              <TableHead className="bg-transparent">
                <TableHeader />
              </TableHead>
              <TableBody>
                {contactsSearch?.map((row: IContact, index: number) => (
                  <TableRowComponent key={index} contact={row} index={index} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      ) : (
        <strong>No find any users......</strong>
      )}
    </>
  );
}
