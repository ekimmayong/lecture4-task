import React, { Component } from 'react';
import axios from 'axios';
import { Avatar, Box, Button, Container, Checkbox, CssBaseline, FormControlLabel, Grid, TextField, Typography, Snackbar } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import { Link } from 'react-router-dom';

class Signup extends Component {
  constructor(){
    super();
    this.state={
      userinfo: {
        fname: '',
        lname: '',
        email: '',
        password: ''
      },
      error: {
        fnameError: '',
        lnameError: '',
        emailError: '',
        passwordError: ''
      },
      formValid: false,
      submitted: false
    }
  }

  componentDidMount(){
    
  }

  handleChange =(e)=> {
    if(e.target.name === 'fname'){
        this.validateFName(e.target.value);
    }

    if(e.target.name === 'lname'){
        this.validateLName(e.target.value);
        
    }

    if(e.target.name === 'email'){
        this.validateemail(e.target.value);
    }

    if(e.target.name === 'password'){
        this.validatePassword(e.target.value);
    }
}

validateFName=(fname)=>{
    let fnameError = this.state.error.fnameError;
    let formValid = this.state.formValid;

    if(fname.trim() === ''){
        fnameError = 'Please enter a valid name'
        formValid = false

    }else if(fname.trim().length <= 3){
        fnameError = 'Please enter more than 3 characters'
        formValid = false
    }else{
        formValid = true;
        fnameError = ''
    }

    this.setState({
        userinfo: {
            ...this.state.userinfo,
            fname,
        },
        error: {
            ...this.state.error,
            fnameError
        },
        formValid
    });

    return formValid;
}

validateLName=(lname)=>{
  let lnameError = this.state.error.lnameError;
  let formValid = this.state.formValid;

  if(lname.trim() === ''){
      lnameError = 'Please enter a valid name'
      formValid = false

  }else if(lname.trim().length <= 3){
      lnameError = 'Please enter more than 3 characters'
      formValid = false
  }else{
      formValid = true;
      lnameError = ''
  }

  this.setState({
      userinfo: {
          ...this.state.userinfo,
          lname,
      },
      error: {
          ...this.state.error,
          lnameError
      },
      formValid
  });
  console.log(formValid)
  return formValid;
}

validateemail=(email)=> {
    let emailError = this.state.error.emailError;
    let formValid = this.state.formValid;

    let pattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;

    if(!pattern.test(email)){
        emailError = 'Invalid Email address';
        formValid = false
    }else{
        formValid = true;
        emailError = ''
    }

    this.setState({
        userinfo: {
            ...this.state.userinfo,
            email,
        },
        error: {
            ...this.state.error,
            emailError
        },
        formValid
    });

    return formValid;
}

validatePassword=(password)=>{
  let passwordError = this.state.error.passwordError;
  let formValid = this.state.formValid;

  if(password.trim() === ''){
    passwordError = 'Please enter a valid password'
      formValid = false

  }else if(password.trim().length <= 8){
      passwordError = 'Please enter more than 8 characters'
      formValid = false
  }else{
      formValid = true;
      passwordError = ''
  }

  this.setState({
      userinfo: {
          ...this.state.userinfo,
          password,
      },
      error: {
          ...this.state.error,
          passwordError
      },
      formValid
  });

  return formValid;
}


  handleSubmit =(e)=> {
    e.preventDefault()

    if(this.validateFName(this.state.userinfo.fname) && this.validateLName(this.state.userinfo.lname) && this.validateemail(this.state.userinfo.email) && this.validatePassword(this.state.userinfo.password)){
      this.setState({
        submitted: true
      })
    }else{
      this.setState({
        submitted:false
      })
    }
  }

  snackbarClose =()=> {
    this.setState({
      submitted: false
    })
  }
  render() {
    
    return (
      <Container component="main" maxWidth="xs">
        <Snackbar
          anchorOrigin={{  vertical: 'top', horizontal: 'right', }}
          open={this.state.submitted}
          onClose={this.snackbarClose}
          autoHideDuration={6000}
          message="Form submitted"
          key={'top-right'}
          severity="success"
      />
      <CssBaseline />
      <div style={{marginTop: 8, display: "flex",  flexDirection: "column", alignItems: "center"}}>
        <Avatar style={{margin: 1,backgroundColor: '#efefef'}}>
          <LockIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form style={{width: "100%",  marginTop: 3}} onSubmit={this.handleSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                autoComplete="fname"
                name="fname"
                variant="outlined"
                required
                fullWidth
                id="fname"
                label="First Name"
                onChange={this.handleChange}
                autoFocus
              />
              <Typography variant='body2' sx={{color:'#ff0000'}}>{this.state.error.fnameError}</Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lname"
                label="Last Name"
                name="lname"
                autoComplete="lname"
                onChange={this.handleChange}
              />
              <Typography variant='body2' sx={{color:'#ff0000'}}>{this.state.error.lnameError}</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={this.handleChange}
              />
              <Typography variant='body2' sx={{color:'#ff0000'}}>{this.state.error.emailError}</Typography>
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
                onChange={this.handleChange}
              />
              <Typography variant='body2' sx={{color:'#ff0000'}}>{this.state.error.passwordError}</Typography>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          <Grid item xs={12}>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Sign Up
            </Button>
          </Grid>
          </Grid>
          
          <Grid container justify="flex-center">
            <Grid item>
              <Link href="/" variant="body2">
                <Typography variant='body1'>Already have an account? Sign in</Typography>
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
    )
  }
}

export default Signup
