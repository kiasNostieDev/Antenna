import React, { useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import SettingsInputAntenna from "@material-ui/icons/SettingsInputAntenna";
import "./Styles/StudentHub.css";
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontFamily: "Geo",
    fontSize: "30pt",
  },
  nav: {
    backgroundColor: "#ED6A5A",
  },
  btn: {
    backgroundColor: "#ED6A5A",
  },
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
}));

export default function StudentHub() {

  const [file, setFile] = useState('')
  const [progress, setProgress] = useState(0)
  const el = useRef()

  const classes = useStyles();
  function AppBarCustom() {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.nav}>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <SettingsInputAntenna />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Antenna
            </Typography>
            <Button color="inherit">Logout</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }

  function CurrentCaseStudy() {
    return (
      <div className="CurrentCaseStudy">
        <div className="HeadingCase">Current_Case_Study</div>
        <div className="StudyName">
          Case Study to deal with normal problems in C
        </div>
      </div>
    );
  }

  function HelloStudent() {
    return <div className="HelloStudent">Hello Akinthiya Srinath KI,</div>;
  }

  function handleChange(event){
    setProgress(0)
    const file = event.target.files[0]
    console.log(file)
    setFile(file)
  }

  function handleUpload(){
    const formData = new FormData()
    formData.append('file',file)
  }

  return (
    <div>
      <AppBarCustom />
      <CurrentCaseStudy />
      <HelloStudent />
      <div className="UploadButton">
        <input type="file" ref={el} onChange={handleChange} className="Uploadbtn"/>
      </div>
      <div className="Submit">
          <button className="SubmitButton" onClick={handleUpload}>submit</button>
      </div>
    </div>
  );
}
