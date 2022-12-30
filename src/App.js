import React from "react";
import { Box, ThemeProvider, Grid, CircularProgress } from "@material-ui/core";
import Navbar from "./Navbar";
import Header from "./Header";
import theme from "./theme/theme";
import Search from "./Components/Search";
import JobCard from "./Job/JobCard";
import JobMoudule from "./Components/JobMoudule";
import JobData from "./DummyData";
import { firebase, firestore, app } from "./Firebase/config";
import { useState } from "react";
import { useEffect } from "react";
import { collection, serverTimestamp } from "firebase/firestore";
import { BlurCircularTwoTone } from "@material-ui/icons";
import Header1 from "./Header1";
import Viewmodal from "./Components/Viewmodal";

export default () => {
  const [jobs, setjobs] = useState([]);
  const [loading, setloading] = useState(true);
  const [jobmodal, newJobModal] = useState(false);
  const [viewJob, setViewJob] = useState({});

  const fetchjobs = async () => {
    const req = await firestore
      .collection("jobs")
      .orderBy("postedOn", "desc")
      .get();
    const tempjob = req.docs.map((job) => ({
      ...job.data(),
      id: job.id,
      postedOn: job.data().postedOn.toDate(),
    }));
    console.log(tempjob);
    // console.log(req);
    setjobs(tempjob);
    setloading(false);
  };

  const fetchsearchjobs = async (jobsearch) => {
    const req = await firestore
      .collection("jobs")
      .orderBy("postedOn", "desc")
      .where("location", "==", jobsearch.location)
      .where("type", "==", jobsearch.type)
      .get();
    const tempjob = req.docs.map((job) => ({
      ...job.data(),
      id: job.id,
      postedOn: job.data().postedOn.toDate(),
    }));
    console.log(tempjob);
    // console.log(req);
    setjobs(tempjob);
    setloading(false);
  };

  const postJob = async (jobdetails) => {
    await firestore.collection("jobs").add({
      ...jobdetails,
      postedOn: app.firestore.FieldValue.serverTimestamp(),
    });
    fetchjobs();
  };

  useEffect(() => {
    fetchjobs();
  }, []);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Header
          seton={() => {
            newJobModal(true);
          }}
        />

        <JobMoudule
          setoff={() => {
            newJobModal(false);
          }}
          turnon={jobmodal}
          postJob={postJob}
        />
        <Viewmodal
          setopen={viewJob}
          setclose={() => {
            setViewJob({});
          }}
        />
        <Grid container justify="center">
          <Grid item xs={10}>
            <Search fetchsearchjobs={fetchsearchjobs} />
          </Grid>
          {loading ? (
            <Box display="flex" justifyContent="center">
              <CircularProgress color="white" />
            </Box>
          ) : (
            <Grid item xs={10}>
              {jobs.map((job) => (
                <JobCard open={() => setViewJob(job)} key={job.id} {...job} />
              ))}
            </Grid>
          )}
        </Grid>
      </ThemeProvider>
    </>
  );
};
