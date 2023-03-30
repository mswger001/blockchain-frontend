import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import PermIdentity from '@material-ui/icons/PermIdentityOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import FormLabel from '@material-ui/core/FormLabel';

import axios from '../../axios/config';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const styles = theme => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 7,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: "blue",
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
    formlabel: {
        fontSize: '12px',
        marginTop: '5px'
    }
});

class SignUp extends React.Component{
    constructor() {
        super()
        this.state = {

            username: '',           
            password: '',
            firstError: '',         
            passwordError: '',

        }
}

 //es6 arrow function for event handlers where you dont have bind the this keyword

 handleChange =(e)=>{
    e.persist()

   this.setState(() => ({
       [e.target.name]: e.target.value
               }))
}

validate = () => {
   let isError = false;
   const errors = {
       firstError: '',
     passwordError: '',
 
   }
   const { username,password}=this.state
   if (username.length === 0) {
       isError = true;
       errors.firstError = "Provide userName";
   }
  
   if(password.length > 0 && password.length < 6){
       isError = true
       errors.passwordError = "Should be Minimum 6 Characters"
   }
   if (password.length === 0) {
       isError = true
       errors.passwordError = "Provide Password"
   }
  

    this.setState({
       ...this.state,
       ...errors
   })
   return isError


}




handleSubmit = (e) => {
   e.preventDefault()
   const err = this.validate()
   if (!err) {
       const formData = {
           username: this.state.username,
           password: this.state.password,
       }
       alert("form submitted")
       console.log(formData)


       axios.post('/signUp', formData)
           .then((response) => {
               console.log(response.data)
               this.setState(() => ({
                   noticeMsg: response.data.notice,
                   username: '',
                   password: '',
               }))
           })
           .catch((err) => {
               console.log(err)
           })
   }

}

render() {
   if (this.state.redirectList) {
       return <Redirect to="/" />
   }
   const { classes } = this.props;

   return (
    <main className={classes.main}>

    <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
            <PermIdentity />
        </Avatar>
        <Typography component="h1" variant="h5">
            Sign Up
    </Typography>
        <form className={classes.form}>
            <FormControl margin="dense" fullWidth>
                <InputLabel htmlFor="username">First Name </InputLabel>
                <Input id="username" name="username" value={this.state.username} onChange={this.handleChange}  autoFocus />
                <FormLabel className={classes.formlabel} error={true}>{this.state.firstError}</FormLabel>
            </FormControl>

         

            <FormControl margin="dense" fullWidth>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input name="password" type="password" id="password"  value={this.state.password} onChange={this.handleChange} />
                <FormLabel className={classes.formlabel} margin="normal" error={true} >{this.state.passwordError}</FormLabel>
            </FormControl>

            <FormControl margin="dense" fullWidth>
                <InputLabel htmlFor="verifypassword">Verify Password</InputLabel>
                <Input name="verifypassword" type="password" id="verifypassword"  value={this.state.password} onChange={this.handleChange} />
                <FormLabel className={classes.formlabel} margin="normal" error={true} >{this.state.passwordError}</FormLabel>
            </FormControl>
        


            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={this.handleSubmit}
            >
                Sign Up
    </Button>
        </form>
    </Paper>
 </main>
   );

}
}

SignUp.propTypes = {
classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(
connect()(SignUp))
