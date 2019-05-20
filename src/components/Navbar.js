
import React, { useCallback } from "react";
import { Route } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";

const headerStyles = {
  bar: {
    height: 50,
    flexDirection: "row",
    alignItems: "center"
  }
};

const Navbar = withStyles(headerStyles)(({ classes }) => (
  <Route
    component={({ match, history }) => (
      <AppBar className={classes.bar}>
        <Grid container>
          <Grid item md={5} xs={2}>
            {match.path === "/" && !match.isExact && (
              <Button
                color="inherit"
                onClick={useCallback(
                  () => {
                    history.goBack();
                  },
                  [history]
                )}
              >
                <ArrowBackIcon />
              </Button>
            )}
          </Grid>
          <Grid item xs={10} md={4}>
            <Typography color="inherit" variant="h5" component="h2">
              Explore Earth
            </Typography>
          </Grid>
        </Grid>
      </AppBar>
    )}
  />
));


export default Navbar;
