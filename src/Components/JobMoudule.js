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
import theme from "../theme/theme";
import { Close } from "@material-ui/icons";
import { useState } from "react";
import { firebase, firestore } from "../Firebase/config";

const useStyles = makeStyles((theme) => ({
  skillchip: {
    margin: theme.spacing(0.5),
    padding: theme.spacing(0.75),
    fontSize: "14.5px",
    borderRadius: "5px",
    fontWeight: 600,
    border: `1px solid ${theme.palette.primary.main}`,
    cursor: "pointer",
    objectFit: "contain",
  },
  included: {
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
  },
}));

const initstate = {
  title: "",
  type: "Part Time",
  companyName: "",
  location: "Work From Home",
  jobDescription: "",
  skills: [],
};

const JobMoudule = (props) => {
  const classes = useStyles();
  const addRemoveSkill = (skill) => {
    jobdetails.skills.includes(skill)
      ? setjobdetails((oldstate) => ({
          ...oldstate,
          skills: oldstate.skills.filter((s) => s !== skill),
        }))
      : setjobdetails((oldstate) => ({
          ...oldstate,
          skills: oldstate.skills.concat(skill),
        }));
  };

  const handleSubmit = async () => {
    for (const field in jobdetails) {
      if (typeof jobdetails[field] === "string" && !jobdetails[field]) {
        alert("fill all the mandotory fields!");
        return;
      }
    }
    await props.postJob(jobdetails);
  };

  const [jobdetails, setjobdetails] = useState(initstate);

  const handlechange = (e) => {
    e.persist();
    setjobdetails((oldstate) => ({
      ...oldstate,
      [e.target.name]: e.target.value,
    }));
  };

  const closemodal = () => {
    setjobdetails(initstate);
    props.setoff();
  };

  const skills = [
    "Javascript",
    "React",
    "Node",
    "Flutter",
    "Vue",
    "Firebase",
    "sql",
    "MongoDB",
  ];
  return (
    <Dialog open={props.turnon} fullWidth>
      <DialogTitle>
        <Box display="flex" justifyContent="space-between">
          Post a Job
          <IconButton onClick={closemodal}>
            <Close />
          </IconButton>
        </Box>
      </DialogTitle>

      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FilledInput
              name="title"
              value={jobdetails.title}
              onChange={handlechange}
              placeholder="Job Title*"
              disableUnderline
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <Select
              name="type"
              value={jobdetails.type}
              onChange={handlechange}
              defaultValue="Part Time"
              disableUnderline
              variant="filled"
              className="jmt"
              fullWidth
            >
              <MenuItem fullWidth value="Part Time">
                Part Time
              </MenuItem>
              <MenuItem fullWidth value="Full Time">
                Full Time
              </MenuItem>
            </Select>
          </Grid>
          <Grid item xs={6}>
            <FilledInput
              name="companyName"
              value={jobdetails.companyName}
              onChange={handlechange}
              placeholder="Company Name"
              disableUnderline
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <Select
              name="location"
              value={jobdetails.location}
              onChange={handlechange}
              defaultValue="Work From Home"
              disableUnderline
              variant="filled"
              className="jmt"
              fullWidth
            >
              <MenuItem value="Work From Home">Work From Home</MenuItem>
              <MenuItem value="Work From Office">Work From Office</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12}>
            <FilledInput
              name="jobDescription"
              value={jobdetails.jobDescription}
              onChange={handlechange}
              placeholder="Job Description*"
              disableUnderline
              fullWidth
              multiline
              rows={4}
            />
          </Grid>
        </Grid>
        <Box mt={2}>
          <Typography>Skills</Typography>
          <Box display="flex">
            {skills.map((skill) => (
              <Box
                onClick={() => addRemoveSkill(skill)}
                className={`${classes.skillchip} ${
                  jobdetails.skills.includes(skill) && classes.included
                }`}
                key={skill}
              >
                {skill}
              </Box>
            ))}
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Box
          width="100%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="caption" color="red">
            *Required Fields
          </Typography>
          <Button onClick={handleSubmit} disableElevation color="primary">
            Post a Job
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};

export default JobMoudule;
