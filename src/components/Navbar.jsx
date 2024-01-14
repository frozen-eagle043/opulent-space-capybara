import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  ListItemText,
  ListItem,
  List,
  Drawer,
  Divider,
  Hidden,
  Collapse,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openSymposia, setOpenSymposia] = useState(false);
  const [openCommittees, setOpenCommittees] = useState(false);
  const [openSpecialSessions, setOpenSpecialSessions] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSymposiaToggle = () => {
    setOpenSymposia(!openSymposia);
  };

  const handleCommitteesToggle = () => {
    setOpenCommittees(!openCommittees);
  };

  const handleSpecialSessionsToggle = () => {
    setOpenSpecialSessions(!openSpecialSessions);
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div>
      <Hidden mdUp>
        {/* Render a menu button for small screens */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>
      </Hidden>

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Logo
          </Typography>

          {/* For small screens, use a drawer */}
          <Hidden mdUp>
            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={handleDrawerToggle}
            >
              {/** Render menu items in the drawer */}
              <List>
                <MenuItem onClick={handleDrawerToggle}>Home</MenuItem>
                <MenuItem onClick={handleSymposiaToggle}>
                  Symposia - Workshops{" "}
                  {openSymposia ? <ExpandLess /> : <ExpandMore />}
                </MenuItem>
                <Collapse in={openSymposia} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {[
                      "Circuits and Systems",
                      "Signal Processing",
                      "Control and Robotics",
                      "Telecommunications",
                      "Power Systems",
                      "Vehicular Technology",
                      "Education",
                      "Computer Science",
                      "Computational Intelligence (Neural Networks, Fuzzy Systems, Evolutionary Computing)",
                      "Artificial Intelligence",
                      "Applied Electromagnetics, Microwaves, Antennas",
                      "Simulation and modelling",
                      "Applied Mathematics",
                      "Applied Physics",
                    ].map((item, index) => (
                      <ListItem key={index} button onClick={handleMenuClose}>
                        <ListItemText primary={item} />
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
                <MenuItem onClick={handleCommitteesToggle}>
                  Committees {openCommittees ? <ExpandLess /> : <ExpandMore />}
                </MenuItem>
                <Collapse in={openCommittees} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {[
                      "Organizing and Steering Committee",
                      "Advisory Committee",
                      "Technical Program Committee",
                      "Reviewers",
                    ].map((item, index) => (
                      <ListItem key={index} button onClick={handleMenuClose}>
                        <ListItemText primary={item} />
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
                <MenuItem onClick={handleSpecialSessionsToggle}>
                  Special Sessions{" "}
                  {openSpecialSessions ? <ExpandLess /> : <ExpandMore />}
                </MenuItem>
                <Collapse in={openSpecialSessions} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {[
                      "Special Sessions Format",
                      "Accepted Special Sessions",
                    ].map((item, index) => (
                      <ListItem key={index} button onClick={handleMenuClose}>
                        <ListItemText primary={item} />
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              </List>
              <Button color="inherit">Plenary Speakers</Button>
              <Button color="inherit">Proceedings</Button>
              <Button color="inherit">Venue</Button>
              <Button color="inherit">Format</Button>
              <Button color="inherit">Deadline</Button>
              <Button color="inherit">Fees</Button>
              <Button color="inherit">Contact</Button>
            </Drawer>
          </Hidden>

          {/* For larger screens, render regular menu items */}
          <Hidden smDown>
            <Button color="inherit" onClick={handleSymposiaToggle}>
              Symposia - Workshops{" "}
              {openSymposia ? <ExpandLess /> : <ExpandMore />}
            </Button>
            <Collapse in={openSymposia} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {[
                  "Circuits and Systems",
                  "Signal Processing",
                  "Control and Robotics",
                  "Telecommunications",
                  "Power Systems",
                  "Vehicular Technology",
                  "Education",
                  "Computer Science",
                  "Computational Intelligence (Neural Networks, Fuzzy Systems, Evolutionary Computing)",
                  "Artificial Intelligence",
                  "Applied Electromagnetics, Microwaves, Antennas",
                  "Simulation and modelling",
                  "Applied Mathematics",
                  "Applied Physics",
                ].map((item, index) => (
                  <ListItem key={index} button onClick={handleMenuClose}>
                    <ListItemText primary={item} />
                  </ListItem>
                ))}
              </List>
            </Collapse>
            <Button color="inherit" onClick={handleCommitteesToggle}>
              Committees {openCommittees ? <ExpandLess /> : <ExpandMore />}
            </Button>
            <Collapse in={openCommittees} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {[
                  "Organizing and Steering Committee",
                  "Advisory Committee",
                  "Technical Program Committee",
                  "Reviewers",
                ].map((item, index) => (
                  <ListItem key={index} button onClick={handleMenuClose}>
                    <ListItemText primary={item} />
                  </ListItem>
                ))}
              </List>
            </Collapse>
            <Button color="inherit" onClick={handleSpecialSessionsToggle}>
              Special Sessions{" "}
              {openSpecialSessions ? <ExpandLess /> : <ExpandMore />}
            </Button>
            <Collapse in={openSpecialSessions} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {["Special Sessions Format", "Accepted Special Sessions"].map(
                  (item, index) => (
                    <ListItem key={index} button onClick={handleMenuClose}>
                      <ListItemText primary={item} />
                    </ListItem>
                  )
                )}
              </List>
            </Collapse>
          </Hidden>

          <Hidden smDown>
            <Button color="inherit">Plenary Speakers</Button>
            <Button color="inherit">Proceedings</Button>
            <Button color="inherit">Venue</Button>
            <Button color="inherit">Format</Button>
            <Button color="inherit">Deadline</Button>
            <Button color="inherit">Fees</Button>
            <Button color="inherit">Contact</Button>
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
