import { Box, Grid, Typography } from "@material-ui/core";
import { useState } from "react";
import { useEffect } from "react";
import { Dialog, DialogTitle, DialogContent, Button } from "@material-ui/core";
import { firebase, firestore, app } from "../Firebase/config";
import { auth } from "../Firebase/config";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const history = useNavigate();
  const [jobs, setjobs] = useState([]);
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
  };

  const removejobs = async (product) => {
    await firestore
      .collection("jobs")
      .doc(product)
      .delete()
      .then(() => {
        console.log("done");
      })
      .catch((e) => alert(e));
    fetchjobs();
  };

  useEffect(() => {
    fetchjobs();
  }, []);

  const user = useSelector(selectUser);
  return (
    <div>
      <Dialog open={true} fullWidth>
        <DialogTitle>
          <Grid xs={12}>
            <Box>
              <Typography variant="h5">Posted Jobs</Typography>
            </Box>
          </Grid>
        </DialogTitle>

        <DialogContent>
          <Box m={4}>
            {jobs.map((job) => (
              <Box display="flex" justifyContent="space-between" mb={1}>
                <Typography variant="subtitle">
                  {job.companyName} | {job.title}| {job.type}| {job.location}
                </Typography>
                <Button
                  onClick={() => {
                    removejobs(job.id);
                  }}
                >
                  Remove
                </Button>
              </Box>
            ))}
          </Box>
        </DialogContent>
        <Button variant="filled" onClick={() => history(-2)}>
          back
        </Button>
      </Dialog>
    </div>
  );
};

export default Dashboard;
