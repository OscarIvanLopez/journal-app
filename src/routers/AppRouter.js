import React, { useEffect } from "react";
import { firebase } from "../firebase/firebase-config";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import JournalScreen from "../components/journal/JournalScreen";
import { useDispatch } from "react-redux";

import AuthRouter from "./AuthRouter";
import { login } from "../actions/auth";

const AppRouter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
      }
    });
  }, [dispatch]);
  
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={JournalScreen} />
          <Route path="/auth" component={AuthRouter} />

          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
