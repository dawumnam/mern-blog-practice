import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { AppBar, Typography, Toolbar, Avatar, Button } from "@material-ui/core";
import useStyles from "./styles";
import memories from "../../images/memories.png";
import { useDispatch } from "react-redux";

export default function Navbar() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/");
    setUser(null);
  };

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <div>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <div className={classes.brandContainer}>
          <Typography
            component={Link}
            to="/"
            className={classes.heading}
            variant="h2"
            align="center"
          >
            Memories
          </Typography>
          <img
            className={classes.image}
            src={memories}
            alt="memories"
            height="60"
          />
        </div>
        <Toolbar className={classes.toolbar}>
          {user ? (
            <div className={classes.profile}>
              <Avatar
                className={classes.purple}
                alt={user.userInfo?.name}
                src={user.userInfo.imageUrl}
              >
                {user.userInfo.name.charAt(0)}
              </Avatar>
              <Typography className={classes.userName} variant="h6">
                {user.userInfo.name}
              </Typography>
              <Button
                variant="contained"
                className={classes.logout}
                color="secondary"
                onClick={logout}
              >
                Logout
              </Button>
            </div>
          ) : (
            <Button
              component={Link}
              to="/auth"
              variant="contained"
              color="primary"
            >
              Sign in
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}