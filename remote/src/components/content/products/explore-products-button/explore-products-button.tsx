import { Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export default function ExploreProductsButton() {
  return (
    <Box className="userDrawer__exploreProductsButton" onClick={() => alert(`Explore Products clicked`)}>
      <AddIcon />
    </Box>
  );
}
