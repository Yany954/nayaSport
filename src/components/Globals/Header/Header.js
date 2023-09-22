import MenuIcon from "@mui/icons-material/Menu";
import { ThemeProvider, createTheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/img/logo.svg";
import { pages, pathRoutes } from "../../../routes/PathRoutes";
import "./Header.css";


function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  
  const theme = createTheme({
    palette: {
      nayablue: {
        main: '#00ffff',
        light: '#E9DB5D',
        dark: '#A29415',
        contrastText: '#242105',
      },
    },
  });


  return (
    <ThemeProvider theme={theme}>
    <AppBar className="container-navbar" color="transparent" position="static">
      <Container className="navbar" maxWidth='false'>
        <Toolbar>
          <Link to={pathRoutes.home}>
            <Box
              className="navbar-logo"
              component="img"
              alt="Logo"
              src={Logo}
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
              }}
            />
          </Link>
          <Box
            className="navbar-responsive"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <IconButton
              className="navbar-responsive"
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color= "nayablue"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "flex", md: "none" },
              }}
            >
              {pages.map((page) => (
                <Link className="navbar-link" to={page[1]} >
                  <MenuItem id="navbar-responsive" key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page[0]}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <Link className="link-logo" to="/">
            <Box
              className="navbar-logo"
              component="img"
              alt="Logo"
              src={Logo}
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
              }}
            />
          </Link>


          <Box
            className="navbar-item"
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            {pages.map((page) => (
              <Link className="navbar-link" key={page} to={page[1]}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white",fontWeight: 600, display: "block" }}
                >
                  {page[0]}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  );
}
export default Header;