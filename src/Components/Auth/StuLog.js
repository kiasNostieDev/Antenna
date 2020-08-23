import React from "react";
import "../Styles/StuLog.css";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  field: {
    width: "400px",
  },
}));

export default function StuLog() {
  const classes = useStyles();
  return (
    <div className="StuLogAuth">
      <div className="StuLogHeading">Student Login</div>
      <div className="BoxAdmin">
        <TextField
          id="outlined-basic"
          label="Phone"
          className={classes.field}
          variant="outlined"
        />
      </div>
      <div className="BoxAdmin">
        <TextField
          id="outlined-basic"
          label="Password"
          className={classes.field}
          variant="outlined"
        />
      </div>
      <div className="StuLogin">
          <button className="btnlogin">COnnect_antenna</button>
      </div>
    </div>
  );
}
