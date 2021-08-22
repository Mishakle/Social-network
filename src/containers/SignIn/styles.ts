import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
    '& input:valid:focus + fieldset': {
      borderColor: 'green',
    },
    '& #email-label': {
      color: 'green',
    },
    '& #password-label': {
      color: 'green',
    },
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default useStyles;
