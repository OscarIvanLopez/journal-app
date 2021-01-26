import React, { useEffect, useState } from "react";
import { firebase } from "../firebase/firebase-config";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import JournalScreen from "../components/journal/JournalScreen";
import { useDispatch } from "react-redux";

import AuthRouter from "./AuthRouter";
import { login } from "../actions/auth";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const AppRouter = () => {
  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      
      setChecking(false);
    });
  }, [dispatch, setChecking, setIsLoggedIn]);

  if (checking) {
    return <h1>Whait...</h1>;
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            path="/auth"
            isAuthenticaded={isLoggedIn}
            component={AuthRouter}
          />
          <PrivateRoute
            exact
            path="/"
            isAuthenticaded={isLoggedIn}
            component={JournalScreen}
          />

          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
