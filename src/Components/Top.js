import React from "react";
import { Box, Grid, Typography, Button } from "@material-ui/core";

const Top = () => {
  return (
    <div className="top">
      <Box bgcolor="secondary.main" color="white">
        <Typography variant="h5">List your Jobs</Typography>
        <Button variant="contained">Post a Job</Button>
      </Box>
    </div>
  );
};

export default Top;
