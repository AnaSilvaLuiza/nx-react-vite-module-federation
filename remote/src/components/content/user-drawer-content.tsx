import { Divider } from '@mui/material';
import { MenuItems } from './menuItems/menu-items';
import { Title } from './title/title';
import { Produts } from './products/products';

export function DrawerContent() {
  return (
    <div className="userDrawer__content">
      <Title />
      <Divider />
      <Produts />
      <Divider />
      <MenuItems />
    </div>
  );
}
