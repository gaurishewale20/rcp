import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#3d4547',
opacity:'80%'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor:'#c66b51',
    marginBottom: theme.spacing(2),
   '&:hover':{
    backgroundColor: '#ce3e14',
    color: '#fff'
   }
  },
  googleButton: {
    backgroundColor:'#e3927a',
    marginBottom: theme.spacing(2),
   '&:hover':{
    backgroundColor: '#ce3e14',
    color: '#fff'
   }
},

makeAccount: {
  alignItems:'center'
},

forgot: {
  alignItems:'center',
}
    
}));
