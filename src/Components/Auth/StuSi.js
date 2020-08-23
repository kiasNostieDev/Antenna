import React from "react";
import "../Styles/StuSi.css";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  field: {
    width: "400px",
  },
  formControl: {
    margin: theme.spacing(1),
    width: "400px",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function StuSi() {
  const classes = useStyles();
  return (
    <div className="StuSignin">
      <div className="StuSiHeading">StudentSignIn</div>
      <div className="BoxAdmin">
        <div>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              label="Age"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div className="BoxAdmin">
        <TextField
          id="outlined-basic"
          label="Email"
          className={classes.field}
          variant="outlined"
        />
      </div>
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
      <div className="SignUpStu">
        <button className="btnlogin">COnnect_antenna</button>
      </div>
    </div>
  );
}
