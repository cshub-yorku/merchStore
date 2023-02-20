import { React, useState } from "react";
import "../styles/NavSidebar.css";
import { IconButton, Typography, Drawer, Box } from "@mui/material";
import { Dehaze, Groups, Title } from "@mui/icons-material";
import PersonIcon from '@mui/icons-material/Person';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import GroupsIcon from '@mui/icons-material/Groups';
import EventIcon from '@mui/icons-material/Event';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


export default function NavSidebar( {trigger, passFunction} ) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <IconButton
        className="navMenu"
        size="large"
        edge="start"
        sx={{ color: "text.primary" }}
        onClick={() => setIsDrawerOpen(true)}
      >
        <Dehaze sx={{ fontSize: 40 }}></Dehaze>
      </IconButton>

      {/* LEFT-SIDEBAR COMPONENT ADDED HERE FOR NOW */}

      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box
          p={5}
          width="16vw"
          height="100vh"
          sx={{
            backgroundColor: "#1f1e3a",
            borderRadius: "0px 20px 20px 0px",
          }}
          textAlign="center"
          role="presentation"
        >
          <Typography
            variant="h6"
            component="div"
            sx={{
              color: "white",
              fontWeight: "700",
              fontSize: "1.5rem"
            }}
          >
           <IconButton
              size="large"
              sx={{ color: "text.primary" }}
              onClick={() => setIsDrawerOpen(false)}
            >
              <CloseIcon 
              sx={{ 
                fontSize: 40,
                marginLeft: "14vw",
                marginTop: "-5vh"
                
              }}>

              </CloseIcon>
          </IconButton>


           <List>
              
                <ListItem disablePadding onClick={() => {
                    setIsDrawerOpen(false);
                    passFunction(!trigger);
                  }}>
                <ListItemButton>
                  <ListItemIcon>
                    <PersonIcon 
                      sx={{
                      color: "white",
                      fontSize: "2rem"
                    }}
                  />
                  </ListItemIcon>
                  <ListItemText primary="Profile" />

                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <HomeIcon
                    sx={{
                    color: "white",
                    fontSize: "2rem"
                  }}
                  />
                  </ListItemIcon>
                  <ListItemText 
                  primary="Home"
                  />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <InfoIcon
                    sx={{
                    color: "white",
                    fontSize: "2rem"
                  }}
                  />
                  </ListItemIcon>
                  <ListItemText 
                  primary="About"
                  />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <GroupsIcon
                    sx={{
                    color: "white",
                    fontSize: "2rem"
                  }}
                  />
                  </ListItemIcon>
                  <ListItemText 
                  primary="Executives"
                  />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <EventIcon
                    sx={{
                    color: "white",
                    fontSize: "2rem"
                  }}
                  />
                  </ListItemIcon>
                  <ListItemText 
                  primary="Events"
                  />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <AutoStoriesIcon
                    sx={{
                    color: "white",
                    fontSize: "2rem"
                  }}
                  />
                  </ListItemIcon>
                  <ListItemText 
                  primary="Resources"
                  />
                </ListItemButton>
              </ListItem>
              
        
           </List>
            
          </Typography>
        </Box>
      </Drawer>
    </>
  );
}
