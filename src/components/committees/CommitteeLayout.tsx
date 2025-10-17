import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useCommittee } from './CommitteeContext';

interface CommitteeLayoutProps {
  children: React.ReactNode;
  title: string;
}

export default function CommitteeLayout({ children, title }: CommitteeLayoutProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { setSelected } = useCommittee();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (key: 'advisory' | 'organizing' | 'technical') => {
    setSelected(key);
    handleClose();
  };
  const buttonStyle = {
    backgroundColor: "#981B1B",
    '&:hover': {
      backgroundColor: "#7f1d1d",
    },
  };

  return (
    <section id="committee" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <Button
              id="demo-customized-button"
              aria-controls={open ? "demo-customized-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              variant="contained"
              disableElevation
              onClick={handleClick}
              endIcon={<KeyboardArrowDownIcon />}
              sx={buttonStyle}
            >
              Committees
            </Button>
            <Menu
              id="demo-customized-menu"
              MenuListProps={{
                "aria-labelledby": "demo-customized-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <MenuItem onClick={() => handleSelect('organizing')} disableRipple sx={{ minWidth: '200px' }}>
                Organizing Committee
              </MenuItem>
              <MenuItem onClick={() => handleSelect('technical')} disableRipple sx={{ minWidth: '200px' }}>
                Technical Program Committee
              </MenuItem>
              <MenuItem onClick={() => handleSelect('advisory')} disableRipple sx={{ minWidth: '200px' }}>
                Advisory Board
              </MenuItem>
            </Menu>
          </div>
          <h2 className="text-4xl font-bold text-surface-primary mb-4">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}