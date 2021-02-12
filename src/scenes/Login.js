import React from 'react';
import styled from 'styled-components';
import store from 'store';
import { motion } from "framer-motion";
import { Animation }  from '../Global';
import { Helmet } from "react-helmet";
import BackHome from '../components/BackHome';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory, useLocation } from "react-router-dom";
import { Form, Message } from 'semantic-ui-react';

//Page data
const Page = {
  title: 'Login'
}

const Password = styled.div`
  input {
    width: 100%;
    color: var(--font-color);
    padding: 0.5em;
    background: var(--third-color);
    border-width: 2px;
    border-radius: 0.4em;
    border-style: solid;
    border-color: var(--container-color) !important;
    -webkit-appearance: none;
    margin-top: var(--spacing-small) !important;
  }
  button {
    width: 100%;
    color: var(--background-color);
    background-color: var(--font-color);
    padding: 0.61em;
    border-radius: 0.4em;
    border-color: none;
    -webkit-appearance: none;
    border-width: 0;
    margin-top: var(--spacing-small) !important;
    :hover {
      cursor: pointer;
    }
  }
`

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      password: '',
      error: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();

    const { password } = this.state;

    this.setState({ error: false });

    if (!(password === '092613')) {
      return this.setState({ error: true });
    }

    console.log("you're logged in. yay!");
    store.set('loggedIn', true);
  }
  handleChange(e, { name, value }) {
    this.setState({ [name]: value });
  }
  render() {
    if (store.get('loggedIn')) {
      return <Redirect to="/" />;
    };
    const { error } = this.state;
    return (
      <motion.div initial="initial" animate="in" exit="out" variants={Animation.variants} transition={Animation.transition}>

        <Helmet><title>{Page.title + " – Matt Argo"}</title></Helmet>

        <BackHome />

        <Password>
          <p>To honor my non-disclosure agreements, some of my work is private. Enter your code below to view everything, or <a href="mailto:mattargomaniz@gmail.com">email me</a> if you need one.</p>
          <Form className="spacing-medium-top" error={error} onSubmit={this.onSubmit}>
            <Form.Input
              inline
              label="Enter your code"
              type="text"
              name="password"
              inputMode="numeric"
              placeholder="000000"
              onChange={this.handleChange}
            />
            {error &&
                <Message className="spacing-xsmall-top light-text"
                error={error}
                content="Sorry, that's not the current code. Please try again."
                />
            }
            <Form.Button type="submit">Submit</Form.Button>
          </Form>
        </Password>

      </motion.div>
    );
  }
}

export default Login;