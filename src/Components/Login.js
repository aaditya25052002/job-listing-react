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
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../Firebase/config";

const Login = (props) => {
  // const emailref = useRef(null);
  // const passref = useRef(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authuser) => {
        console.log(authuser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const inbox = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((authuser) => {
        console.log(authuser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div>
      <Dialog open={props.doOn} fullWidth>
        <DialogTitle>
          <Box display="flex" justifyContent="space-between">
            Login/SignUp
            <IconButton>
              <Close onClick={props.doO} />
            </IconButton>
          </Box>
        </DialogTitle>

        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FilledInput
                // ref={emailref}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                type="email"
                placeholder="Email"
                disableUnderline
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <FilledInput
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                // f
                type="password"
                placeholder="Password"
                disableUnderline
                fullWidth
              />
            </Grid>
          </Grid>
          <Box mt={2}>
            <Button
              onClick={inbox}
              disableElevation
              color="pink"
              variant="contained"
              fullWidth
            >
              <span
                onClick={() => {
                  history("/");
                }}
              >
                Login
              </span>
            </Button>
          </Box>
          <Box mt={1}>
            <Button
              onClick={register}
              disableElevation
              color="pink"
              variant="contained"
              fullWidth
            >
              SignUp
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Login;
