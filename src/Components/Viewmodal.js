import React from "react";
import {
  Box,
  Grid,
  FilledInput,
  Select,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
const viewmodal = (props) => {
  return (
    <div>
      <Dialog open={!!Object.keys(props.setopen).length} fullWidth>
        <DialogTitle>
          <Box display="flex" justifyContent="space-between">
            {props.setopen.title} @ {props.setopen.companyName}
            <IconButton>
              <Close onClick={props.setclose} />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent>
          <Box display="flex" mb={1}>
            <Typography variant="subtitle1">
              Type: {props.setopen.type}
            </Typography>
          </Box>
          <Box display="flex" mb={1}>
            <Typography variant="subtitle1">
              Company Name: {props.setopen.companyName}
            </Typography>
          </Box>
          <Box display="flex" mb={1}>
            <Typography variant="subtitle1">
              location: {props.setopen.location}
            </Typography>
          </Box>
          <Box display="flex" mb={1}>
            <Typography variant="subtitle1">
              Job Description: {props.setopen.jobDescription}
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined">Apply</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default viewmodal;
