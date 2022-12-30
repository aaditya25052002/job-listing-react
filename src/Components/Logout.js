import React, { useState } from "react";
import { Box, Grid, Typography, Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { auth } from "../Firebase/config";
import userEvent from "@testing-library/user-event";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import Navbar from "../Navbar";
const Logout = () => {
  const user = useSelector(selectUser);
  const history = useNavigate();
  return (
    <>
      <Navbar />
      <header className="banner">
        <Box
          py={7}
          bgcolor="#001220"
          color="white"
          className="shadow-2xl ring-offset-4"
        >
          <Grid container justify="center">
            <Grid item xs={10}>
              <Box display="flex" justifyContent="space-between">
                <Typography variant="h4" className="size-k">
                  {user.email}
                </Typography>
                <Button
                  variant="contained"
                  bgcolor="#fa7268"
                  className="sm-btn"
                  disableElevation
                  onClick={() => {
                    auth.signOut();
                  }}
                >
                  SignOut
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </header>
    </>
  );
};

export default Logout;
