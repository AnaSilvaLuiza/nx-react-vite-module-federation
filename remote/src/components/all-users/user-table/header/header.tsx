import { TableCell, TableRow } from '@mui/material';

export default function TableHeader() {
  const headers = ['User', 'Email', 'Role'];

  return (
    <TableRow>
      {headers.map(header => (
        <TableCell className="teamAdmin__tableCell" key={header}>
          {header}
        </TableCell>
      ))}
    </TableRow>
  );
}
