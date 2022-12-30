import React from "react";
import { Box, Grid, Typography, Button } from "@material-ui/core";
import theme from "./theme/theme";
// import img from "./image/image-1.png";
const Header1 = (props) => {
  return (
    <header className="banner">
      <Box
        py={7}
        bgcolor="#001220"
        color="white"
        className="shadow-2xl ring-offset-4"
      >
        <Grid container justify="center">
          <Grid item xs={10}>
            <Box display="flex" justifyContent="center">
              <Typography variant="h4" className="size-k">
                Top Jobs
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </header>
  );
};

export default Header1;
