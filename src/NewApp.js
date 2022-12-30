import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box, Grid, Typography, Button, makeStyles } from "@material-ui/core";
import App from "./App";
import Login from "./Components/Login";
import MainPage from "./Components/MainPage";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./Firebase/config";
import { useEffect, useState } from "react";
import { login, logout, selectUser } from "./features/userSlice";
import Header from "./Header";
import Logout from "./Components/Logout";
import Dashboard from "./Components/Dashboard";
const NewApp = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //log in
        dispatch(
          login({
            uid: authUser.uid,
            email: authUser.email,
          })
        );
      } else {
        // log out
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, []);
  return (
    <div>
      <BrowserRouter>
        {!user ? (
          <MainPage />
        ) : (
          <Routes>
            <Route path="/" element={<App />} />
            <Route exact path="/account" element={<Logout />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
};

export default NewApp;
