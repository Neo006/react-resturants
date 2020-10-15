import React from 'react';
import Container from "@material-ui/core/Container";
import Header from "./components/Header";
import {makeStyles} from "@material-ui/core/styles";
import Home from "./components/Home";

const useStyles = makeStyles((theme) => ({
    app: {
        padding: "60px 0",
    },
}));

function App() {
  const classes = useStyles();

  return (
      <Container maxWidth="lg">
        <header>
            <Header/>
        </header>
        <div className={classes.app}>
            <Home/>
        </div>
      </Container>
  );
}

export default App;
