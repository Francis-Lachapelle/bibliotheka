import Button from '@mui/material/Button';
import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AddBoxSharpIcon from '@mui/icons-material/AddBoxSharp';
import BarChartIcon from '@mui/icons-material/BarChart';
import { labels } from '../../typography/labels';
import BookModal from './BookModal';

const BookMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [openModal, setOpenModal] = React.useState(false);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <BookModal open={openModal} setOpen={setOpenModal} />
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant='contained'
        onClick={handleClick}
      >
        {labels.bookMenuButton}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>{labels.addBook} <AddBoxSharpIcon style={{marginLeft:'15px'}} /></MenuItem>
        <MenuItem onClick={handleClose}>{labels.showStats} <BarChartIcon style={{marginLeft:'15px'}} /></MenuItem>
      </Menu>
    </div>
  );
}

export default BookMenu