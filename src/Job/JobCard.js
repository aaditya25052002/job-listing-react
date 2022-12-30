import React from "react";
import { Box, Grid, Typography, Button, makeStyles } from "@material-ui/core";
import { differenceInMinutes } from "date-fns";

const useStyles = makeStyles({
  wrapper: {
    border: "1.7px solid #e8e8e8",
    marginTop: "0.5rem",
    color: "white",
    transition: "0.3s",
    boxShadow: "0px 1px 5px rgba(0,0,0,0.1)",
    borderRadius: "10px",
    "&:hover": {
      boxShadow: "0px 5px 25px rgba(0,0,0,0.1)",
      borderLeft: "4px solid white",
      borderRight: "4px solid white",
      transform: "scale(1.03)",
    },
  },
  companyName: {
    fontSize: "13.5px",
    backgroundColor: "white",
    color: "#001220",
    borderRadius: "5px",
    padding: "2px",
    display: "inline-block",
    fontWeight: "600",
  },
  skillChip: {
    margin: "4px",
    padding: "6px",
    fontSize: "14.5px",
    borderRadius: "5px",
    transition: "0.3px",
    cursor: "pointer",
    fontWeight: "600",
    backgroundColor: "#001220",
    color: "white",
  },
});

const JobCard = (props) => {
  const classes = useStyles();
  return (
    <div className="animate__animated animate__bounceIn">
      <Box p={2} className={classes.wrapper}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography variant="subtitle1">{props.title}</Typography>
            <Typography variant="subtitle2" className={classes.companyName}>
              {props.companyName}
            </Typography>
          </Grid>
          <Grid item container xs>
            {props.skills.map((skill) => (
              <Grid key={skill} item className={classes.skillChip}>
                {skill}
              </Grid>
            ))}
          </Grid>
          <Grid item container direction="column" alignItems="flex-end" xs>
            <Grid item>
              <Typography variant="caption">
                {differenceInMinutes(Date.now(), props.postedOn)} min ago|
                {props.type} | {props.location}
              </Typography>
            </Grid>
            <Grid item mt={2}>
              <Button
                variant="outlined"
                className="job-btn"
                onClick={props.open}
              >
                Check
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default JobCard;
