import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import FormLabel from '@material-ui/core/FormLabel';

import axios from '../../axios/config';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { setUser } from '../../../redux/actions/users'
import CustomizedSnackbars from '../Alert/alert'

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
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
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

class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            loginFail: false,
            passwordError: '',
            passwordType: "password"
        }
    }

    handleChange = (e) => {
        //console.log(e.target.name, e.target.value)
        e.persist()

        this.setState(() => ({
            [e.target.name]: e.target.value,
            passwordError: '',
            loginFail: false

        }))
    }

    validate = () => {
        let isError = false;
        const errors = {
            passwordError: '',
        }


        if (this.state.password.length === 0) {
            isError = true;
            errors.passwordError = "Provide Password";
        }
        this.setState({
            ...this.state,
            ...errors
        })
        return isError


    }
    handleSubmit = (e) => {
        e.preventDefault()
        let usr = {
            username: "gerald",
            password: "password"
        }
        localStorage.setItem('user', usr)
                        this.props.dispatch(setUser(usr))
        const err = this.validate()
        if (!err) {
            const formData = {
                username: this.state.username,
                password: this.state.password
            }

            // console.log(formData)

            axios.post('/login', formData)
                .then((response) => {
                    //console.log(response)
                    if (!response.data.error) {
                        const { user} = response.data

                        localStorage.setItem('user', user)
                        this.props.dispatch(setUser(user))
                        this.setState(() => ({
                            username: '',
                            password: '',
                            redirectList: true

                        }))
                    }
                })
                .catch((err) => {
                    // console.log(err)
                    this.setState({ loginFail: true })
                })

        }


    }

    handleShowPassword = (e) => {
        if (e.target.checked) {
            this.setState({ passwordType: "text", loginFail: false })
        } else {
            this.setState({ passwordType: "password", loginFail: false })

        }
    }

    render() {
        if (this.state.redirectList) {
            return <Redirect to="/user/dashboard" />
        }
        const { classes } = this.props;

        return (
            <main className={classes.main}>
                <CustomizedSnackbars status={this.state.loginFail} />
                <Paper className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
        </Typography>
                    <form className={classes.form}>
                        <FormControl margin="dense" fullWidth>
                            <InputLabel htmlFor="">Username </InputLabel>
                            <Input id="username" name="username" value={this.state.username} onChange={this.handleChange} autoFocus />
                            <FormLabel className={classes.formlabel}></FormLabel>
                        </FormControl>

                        <FormControl margin="dense" fullWidth>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input name="password" type={this.state.passwordType} id="password" value={this.state.password} onChange={this.handleChange} />
                            <FormLabel className={classes.formlabel} margin="normal" error={true} >{this.state.passwordError}</FormLabel>
                        </FormControl>
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" onClick={this.handleShowPassword} />}
                            label="Show Password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={this.handleSubmit}
                        >
                            Sign in
          </Button>
                    </form>
                </Paper>

            </main>
        )
    }
}

SignIn.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(
    connect()(SignIn))
