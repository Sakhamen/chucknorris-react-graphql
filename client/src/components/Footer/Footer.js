import React from "react";

// material-ui
import { makeStyles } from "@material-ui/core/styles";

import {
  Container,
  Typography,
  Link
} from "@material-ui/core";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/sakhamen">
        Sakhamuzi Mhlongo
      </Link>
      {" " + new Date().getFullYear()}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(8),
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          Graphql + React JS
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Chuck out loud with Norris Jokes!
        </Typography>
        <Copyright />
      </Container>
    </footer>
  );
};

export default Footer;
