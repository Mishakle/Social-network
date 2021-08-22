import React, { FC } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { AuthAction } from '../../redux/actions/auth';
import useStyles from './styles';
import { SignInInputs } from './interfaces';

const SignIn: FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm<SignInInputs>();

  const onSubmitForm = ({ email, password }: SignInInputs) => {
    if (!password || !email) {
      return;
    }
    dispatch({
      type: AuthAction.SIGN_IN,
      payload: {
        email,
        password,
      },
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h4">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit(onSubmitForm)}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            color="secondary"
            inputRef={register}
          />
          <TextField
            variant="outlined"
            margin="normal"
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
          <Button
            type="submit"
            className={classes.submit}
            fullWidth
            variant="contained"
            color="primary"
          >
            Log in
          </Button>
          <Grid container justify="center">
            <Grid item>
              <Link to="/signup">Do not have an account?</Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default SignIn;
