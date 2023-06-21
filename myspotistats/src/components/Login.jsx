import React from 'react'
import Button from './UI/Button'

const loginButtonHandler = () => {
    window.location.href = "http://localhost:8080/login";
  };

const Login = props => {
  return (
    <Button onClick={loginButtonHandler} mode={props.mode}>Login with Spotify</Button>
  )
}

export default Login