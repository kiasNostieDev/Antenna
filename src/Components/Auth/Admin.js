import React, { useRef } from "react";
import "../Styles/Admin.css";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  field: {
    width: "400px",
  },
}));

export default function Admin() {
  const classes = useStyles();
  const phone = useRef();
  const password = useRef();

  function handleClick(event) {
    console.log(phone.current.value);
    console.log(password.current.value);
  }

  return (
    <div className="AdminAuth">
      <div className="AdminHeading">AdminAuth</div>
      <div className="BoxAdmin">
        <TextField
          ref={phone}
          id="outlined-basic"
          label="Name"
          className={classes.field}
          variant="outlined"
        />
      </div>
      <div className="BoxAdmin">
        <TextField
          ref={password}
          id="outlined-basic"
          label="Password"
          className={classes.field}
          variant="outlined"
        />
      </div>
      <div className="LoginAdmin">
        <button onClick={handleClick} className="btnlogin">
          COnnect_antenna
        </button>
      </div>
    </div>
  );
}
