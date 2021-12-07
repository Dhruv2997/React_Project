import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import '../index.css';
import Axios from 'axios';

function Main() {
  let history = useHistory();
  const redirect = () => {
    history.push('/Register')
  }
  const [usernameReg, setEmail] = useState("");
  const [passwordReg, setPassword] = useState("");

  const main = () => {
    Axios.post('http://localhost:3002/main', {username: usernameReg, password: passwordReg}).then((response) => {console.log(response);});
  };



  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div className='products'>
      <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label className="emailForm">Email</Form.Label>
          <input
          className="inputemail"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label className="emailForm" >Password</Form.Label>
          <input
          className="inputemail"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button onClick={main} className="button" block size="lg">
          Login
        </Button>
        <p className="registerAsk">Don't Have an Account</p>
        <Button className="button" block size="lg" onClick={redirect}>
          Register
        </Button>
      </Form>
    </div>
    </div>
  );
}

export default Main;