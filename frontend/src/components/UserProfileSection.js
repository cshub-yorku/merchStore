import React from 'react';
import { IconButton, Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { SignedIn, UserProfile } from "@clerk/clerk-react";

const UserProfileSection = () => {
  const navigate = useNavigate();
  
  const goBack = () => {
    navigate(-1);
  };
  
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      <IconButton
        onClick={goBack}
        sx={{ alignSelf: "flex-start", color: "white" }}
        aria-label="Go back"
      >
        <ArrowBackIcon sx={{ fontSize: 25 }} />
      </IconButton>
      <SignedIn>
        <UserProfile />
      </SignedIn>
    </Box>
  );
};

export default UserProfileSection;
