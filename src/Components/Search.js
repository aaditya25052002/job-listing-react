import React from "react";
import { Box, Button, Select, MenuItem, makeStyles } from "@material-ui/core";
import { useState } from "react";

const useStyles = makeStyles({
  wrapper: {
    backgroundColor: "#fa7268",
    display: "flex",
    boxShadow: "0px 1px 5px rgba(0,0,0,0.1)",
    borderRadius: "5px",
    marginBottom: "6.5rem",
    "& > *": {
      flex: 1,
      height: "45px",
      margin: "8px",
    },
  },
});
const Search = (props) => {
  const classes = useStyles();
  const [jobsearch, setjobsearch] = useState({
    type: "Part Time",
    location: "Work From Home",
  });
  const handlechange = (e) => {
    e.persist();
    setjobsearch((oldstate) => ({
      ...oldstate,
      [e.target.name]: e.target.value,
    }));
    console.log(jobsearch);
  };
  const onsearch = async () => {
    await props.fetchsearchjobs(jobsearch);
  };
  return (
    <div className="animate__animated  animate__backInDown">
      <Box p={2} mt={-4.5} className={classes.wrapper}>
        <Select
          // defaultValue="Job Role"
          disableUnderline
          variant="filled"
          className="jmt"
          value={jobsearch.type}
          name="type"
          onChange={handlechange}
        >
          <MenuItem value="Full Time">Full Time</MenuItem>
          <MenuItem value="Part Time">Part Time</MenuItem>
        </Select>

        <Select
          // defaultValue="Location"
          disableUnderline
          variant="filled"
          className="jmt"
          value={jobsearch.location}
          name="location"
          onChange={handlechange}
        >
          <MenuItem value="Work From Home">Work From Home</MenuItem>
          <MenuItem value="Work From Office">Work From Office</MenuItem>
        </Select>
        <Button
          variant="contained"
          bgcolor="#fa7268"
          className="sm-btn jmt"
          disableElevation
          onClick={onsearch}
        >
          Search
        </Button>
      </Box>
    </div>
  );
};

export default Search;
