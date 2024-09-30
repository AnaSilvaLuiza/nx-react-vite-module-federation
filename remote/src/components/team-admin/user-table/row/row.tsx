import { TableCell, TableRow, Avatar } from '@mui/material';
import { IContact } from '../../types/types';

interface IProps {
  contact: IContact;
  index: number;
}

export function TableRowComponent({ contact, index }: IProps) {
  const { First_Name, Photo, Email, Job_Title, Last_Name } = contact ?? {};

  const rowStyle = (index: number) => ({
    backgroundColor: index % 2 === 0 ? '#ECE0E0' : 'transparent',
  });

  return (
    <TableRow key={index} style={rowStyle(index)}>
      <TableCell className="teamAdmin__tableCell">
        <div className="teamAdmin__userContainer">
          <Avatar alt={First_Name} src={Photo} />
          <div>
            {First_Name} {Last_Name}
          </div>
        </div>
      </TableCell>
      <TableCell className="teamAdmin__tableCell">{Email}</TableCell>
      <TableCell className="teamAdmin__tableCell">{Job_Title}</TableCell>
    </TableRow>
  );
}
