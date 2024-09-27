import { Link } from '@mui/material';
import { OpenInNew } from '@mui/icons-material';

export function Title() {
  return (
    <div className="userDrawer__title">
      <h5>Products</h5>
      <Link onClick={() => alert('Product clicked')} underline="none" component="button">
        View All <OpenInNew fontSize="inherit" />
      </Link>
    </div>
  );
}
