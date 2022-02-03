import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Avatar,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  Link,
  Card,
} from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { loginUser } from "../redux/action/action";
import { useNavigate } from "react-router-dom";
export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setMsg] = useState("");
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };
  const avatarStyle = {
    backgroundColor: "#b84db8",
  };

  const handleSubmit = async () => {
    const result = await loginUser(
      {
        email,
        password,
      },
      dispatch
    );
    if (result != "") {
      setMsg(result);
    }
    if (result == "") {
      navigate.push("/profile");
    }
  };

  return (
    <div>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="Center">
            <Avatar style={avatarStyle}>
              <LockIcon />
            </Avatar>
            <h2>Login</h2>
          </Grid>
          <form noValidate>
            <TextField
              placeholder="Enter Email Adress"
              fullWidth
              required
              id="email"
              name="email"
              label="Email Address"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              placeholder="Enter Password"
              fullWidth
              required
              id="password"
              name="password"
              label="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox name="checkedB" color="primary" />}
              label="Remeber me"
            />
            <Button
              type="submit"
              color="primary"
              variant="contained"
              fullWidth
              onClick={handleSubmit}
            >
              Login
            </Button>
          </form>
          <Card>
            <Typography>{errMsg != "" && <span>{errMsg}</span>}</Typography>
          </Card>
          <Typography>
            <Link href="#">Forgot Password?</Link>
          </Typography>
          <Typography>
            {" "}
            Do yo have an account?
            <Link href="#">Sign Up</Link>
          </Typography>
        </Paper>
      </Grid>
    </div>
  );
};
