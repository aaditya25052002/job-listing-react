import React from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  ThemeProvider,
} from "@material-ui/core";
import theme from "../theme/theme";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Login from "./Login";

const MainPage = () => {
  const [on, seton] = useState(false);
  const history = useNavigate();
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Box display="flex" justifyContent="center" mt={5} mb={5}>
          <Typography variant="h3" color="white" className="main-white">
            List your jobs with us
          </Typography>
        </Box>
      </ThemeProvider>
      <ThemeProvider theme={theme}>
        <header className="banner">
          <Box
            py={7}
            bgcolor="#001220"
            color="white"
            className="shadow-2xl ring-offset-4"
            mt={15}
          >
            <Grid container justify="center">
              <Grid item xs={10}>
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="h4" className="size-k">
                    Post/view Jobs
                  </Typography>

                  <Button
                    variant="contained"
                    bgcolor="#fa7268"
                    className="sm-btn"
                    disableElevation
                    onClick={() => seton(true)}
                  >
                    Login/Signup
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </header>
      </ThemeProvider>
      <Login
        doOn={on}
        doOff={() => {
          seton(false);
        }}
      />
    </div>
  );
};

export default MainPage;
