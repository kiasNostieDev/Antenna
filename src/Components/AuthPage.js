import React, { useState } from "react";
import SettingsInputAntenna from "@material-ui/icons/SettingsInputAntenna";
import "./Styles/AuthPage.css";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Admin from "./Auth/Admin";
import StuLog from "./Auth/StuLog";
import StuSi from "./Auth/StuSi";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    fontFamily: "Geo",
    fontSize: "30pt",
  },
}));

export default function AuthPage() {
  const [Content, setContent] = useState("StuLog");
  const classes = useStyles();

  function AuthContent(){
      if(Content === "StuLog")return (<div><StuLog/></div>)
      else if(Content === "StuSi")return (<div><StuSi/></div>)
      else if(Content === "Admin")return (<div><Admin/></div>)
  }

  function handleClick(route){
      setContent(route)
  }

  return (
    <div className="AuthPage">
      <div className="Decider">
        <div className="IconName">
          <div className="icon">
            <IconButton edge="start" color="inherit" aria-label="menu">
              <SettingsInputAntenna />
            </IconButton>
          </div>
          <div className="IconNameName">
            <Typography variant="h6" className={classes.title}>
              Antenna
            </Typography>
          </div>
        </div>
        <div className="Choices">
          <div className="ItemChoice" onClick={()=>{handleClick("Admin")}}>AdminLogin</div>
          <div className="ItemChoice" onClick={()=>{handleClick("StuLog")}}>StudentLogin</div>
          <div className="ItemChoice" onClick={()=>{handleClick("StuSi")}}>StudentSignup</div>
        </div>
      </div>
      <div className="MainAuth">
        <AuthContent />
      </div>
    </div>
  );
}
