"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import DeblurIcon from '@mui/icons-material/Deblur';
import { useScrollTrigger } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PaymentsIcon from '@mui/icons-material/Payments';

const csWhite = "#e0e1d8"
const csGrey = "#99999F"

const pages = ['Get Started', 'About', 'Pricing'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const socials = [
    {platform: "twitter", link: "#", icon: <TwitterIcon sx={{ color: csGrey, transition: "color 0.3s ease-in-out", cursor: "pointer", "&:hover": { color: csWhite } }} /> },
    {platform: "twitter", link: "#", icon: <FacebookIcon sx={{ color: csGrey, transition: "color 0.3s ease-in-out", cursor: "pointer", "&:hover": { color: csWhite }, marginLeft: '15px' }} /> },
    {platform: "twitter", link: "#", icon: <InstagramIcon sx={{ color: csGrey, transition: "color 0.3s ease-in-out", cursor: "pointer", "&:hover": { color: csWhite }, marginLeft: '15px' }} /> },
]

export default function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [anchorElLink, setAnchorElLink] = React.useState<null | HTMLElement>(null);

  const handleOpenMenuLink = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElLink(event.currentTarget);
  };

  const handleCloseMenuLink = () => {
    setAnchorElLink(null);
  };

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 10, // Adjust this value as needed
  });

  return (
    <AppBar position="absolute" elevation={0} sx={{ borderBottom: '1px solid', borderColor: "transparent", transition: 'backgroundColor 2s ease-in-out', backgroundColor: "transparent"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <PaymentsIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, fontSize: '30px', color: 'csWhite' }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Recoleta',
              fontSize: '30px',
              color: csWhite,
              textDecoration: 'none',
              letterSpacing: '.1rem'
            }}
          >
            kazi |<span style={{ color: '#636cff', marginLeft: '5px' }}>Cards</span>
          </Typography>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Recoleta',
              fontWeight: 600,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            kazi |<span style={{ color: '#636cff', marginLeft: '5px' }}>Cards</span>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end', alignItems: 'center' }}>
            {pages.map((page, idx) => (
                <>
                    <Typography
                        key={page}
                        onClick={handleCloseNavMenu}
                        sx={{ my: 3, color: '#e0e1d8', display: 'block', marginRight: '15px', marginLeft: '15px', textTransform: 'none', cursor: 'pointer', transition: "color 0.3s ease-in-out", "&:hover": { color: '#636cff' }, fontWeight: '500'}}
                    >
                        {page}
                    </Typography>
                </>
            ))}
          </Box>
          <Box sx={{ width: '1px', height: '25px', backgroundColor: '#2e2e32' }}/>
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginLeft: '20px' }}>
            {socials.map((item) => (
                <>
                    {item.icon}
                </>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
            <Menu
                anchorEl={anchorElLink}
                open={Boolean(anchorElLink)}
                onClose={handleCloseMenuLink}
                MenuListProps={{
                onMouseLeave: handleCloseMenuLink,
                }}
            >
                {/* Add your menu items here */}
                <MenuItem onClick={handleCloseMenuLink}>Item 1</MenuItem>
                <MenuItem onClick={handleCloseMenuLink}>Item 2</MenuItem>
                <MenuItem onClick={handleCloseMenuLink}>Item 3</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}