import React, { useState } from "react";
import { Box, Grid, Typography, Button } from "@material-ui/core";
import theme from "./theme/theme";
// import img from "./image/image-1.png";
const Header = (props) => {
  return (
    <>
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
                  Admin? List your Jobs
                </Typography>
                <Button
                  variant="contained"
                  bgcolor="#fa7268"
                  className="sm-btn"
                  disableElevation
                  onClick={props.seton}
                >
                  Post a Job
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </header>
    </>
  );
};

export default Header;
