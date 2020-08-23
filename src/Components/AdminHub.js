import React, { useRef, useState } from "react";
import "./Styles/AdminHub.css";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import SettingsInputAntenna from "@material-ui/icons/SettingsInputAntenna";
import TextField from "@material-ui/core/TextField";

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
  field: {
    width: "100%",
  },
}));

export default function AdminHub() {
  const [file, setFile] = useState("");
  const [progress, setProgress] = useState(0);
  const el = useRef();
  const classes = useStyles();

  function handleChange(event) {
    setProgress(0);
    const file = event.target.files[0];
    console.log(file);
    setFile(file);
  }

  function handleUpload() {
    const formData = new FormData();
    formData.append("file", file);
  }

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
        <div className="UploadFile">
          <button className="SubmitButtonFile" onClick={handleUpload}>
            PatchToAntenna
          </button>
        </div>
      </div>
    );
  }

  function NoCaseStudy() {
    return (
      <div className="NoCaseStudy">
        <div className="HeadingCase">Upload_Case_Study</div>
        <TextField
          className={classes.field}
          id="standard-textarea"
          label="Title or Case Study Description"
          placeholder="CaseStudy"
          multiline
        />
        <div className="UploadButton">
          <input
            type="file"
            ref={el}
            onChange={handleChange}
            className="UploadFilebtn"
          />
        </div>
        <div className="UploadFile">
          <button className="SubmitButtonFile" onClick={handleUpload}>
            SendToAntenna
          </button>
        </div>
      </div>
    );
  }

  function StudentTile() {
    const classes = useStyles();
    return (
      <div className="StudentTile">
        <div className="Name">Akinthiya Srinath KI</div>
        <div className="Status"></div>
        <div className="File">
          <Button color="inherit" className={classes.btn}>
            File
          </Button>
        </div>
      </div>
    );
  }

  function StudentList() {
    return (
      <div className="StudentList">
        <StudentTile />
        <StudentTile />
        <StudentTile />
        <StudentTile />
        <StudentTile />
        <StudentTile />
        <StudentTile />
        <StudentTile />
        <StudentTile />
        <StudentTile />
        <StudentTile />
        <StudentTile />
        <StudentTile />
        <StudentTile />
        <StudentTile />
        <StudentTile />
        <StudentTile />
        <StudentTile />
        <StudentTile />
      </div>
    );
  }

  return (
    <div>
      <AppBarCustom />
      <CurrentCaseStudy />
      <StudentList />
    </div>
  );
}
