import React, { FC } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Alert } from '@material-ui/lab';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import useStyles from './styles';
import { AuthAction } from '../../redux/actions/auth';
import { SignInInputs } from './interfaces';

const SignUp: FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm<SignInInputs>();

  const onSubmitForm = ({ email, username, password }: SignInInputs) => {
    if (!password || !email) return;

    dispatch({
      type: AuthAction.SIGN_UP,
      payload: {
        email,
        username,
        password,
      },
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h4">
          Sign up
        </Typography>
        {errors.password && <Alert severity="error">{errors.password.message}</Alert>}
        <form className={classes.form} onSubmit={handleSubmit(onSubmitForm)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                color="secondary"
                inputRef={register}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="username"
                label="Username"
                type="username"
                id="username"
                autoComplete="username"
                color="secondary"
                inputRef={register}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                color="secondary"
                inputRef={register({
                  minLength: { value: 6, message: 'Password is too short' },
                })}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            className={classes.submit}
            fullWidth
            variant="contained"
            color="primary"
          >
            Sign Up
          </Button>
          <Grid container justify="center">
            <Grid item>
              <Link to="/login">Already have an account?</Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default SignUp;
