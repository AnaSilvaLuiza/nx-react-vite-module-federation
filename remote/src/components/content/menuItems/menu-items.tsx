import { Link } from '@mui/material';
import {
  SettingsOutlined,
  QuestionMarkOutlined,
  PersonAddAltOutlined,
  GroupsOutlined,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export function MenuItems() {
  const navigate = useNavigate();

  type MenuItemProps = {
    icon: JSX.Element;
    label: string;
    onClick: () => void;
  };

  const MenuItem = ({ icon, label, onClick }: MenuItemProps): JSX.Element => (
    <Link
      color="inherit"
      underline="none"
      component="button"
      onClick={onClick}
      children={
        <>
          <p>{icon}</p>
          <p>{label}</p>
        </>
      }
    />
  );

  const menuItems: MenuItemProps[] = [
    {
      icon: <SettingsOutlined fontSize="small" />,
      label: 'Admin',
      onClick: () => alert('Admin clicked'),
    },
    {
      icon: <GroupsOutlined fontSize="small" />,
      label: 'Teams',
      onClick: () => navigate('/team-admin'),
    },
    {
      icon: <PersonAddAltOutlined fontSize="small" />,
      label: 'Invite',
      onClick: () => alert('Invite clicked'),
    },
    {
      icon: <QuestionMarkOutlined fontSize="small" />,
      label: 'Help',
      onClick: () => alert('Help clicked'),
    },
  ];

  return (
    <div className="userDrawer__menuItems">
      {menuItems.map((item, index) => (
        <MenuItem
          key={index}
          icon={item.icon}
          label={item.label}
          onClick={item.onClick}
        />
      ))}
    </div>
  );
}
