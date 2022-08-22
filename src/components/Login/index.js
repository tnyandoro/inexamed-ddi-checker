import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Form } from 'react-bootstrap';
import requestToLogin from '../../redux/login/loginActions';
import styles from './Authentication.module.scss';

const Authentication = () => {
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();

    const userCredentials = {
      email: email.current.value,
      password: password.current.value,
    };
    dispatch(requestToLogin(userCredentials));
  };

  return (
    <div className={`${styles.login}`}>
      <h2 className="mb-3">Login</h2>
      <Form onSubmit={handleLogin}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={email} type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={password} type="password" placeholder="Password" />
        </Form.Group>
        <button className="btn btn-default border bg-light my-3" type="submit">
          Login
        </button>
      </Form>
    </div>
  );
};
export default Authentication;
