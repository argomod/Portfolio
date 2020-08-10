import React from 'react';
import styled from 'styled-components';
import store from 'store';
import { motion } from "framer-motion";
import { Animation }  from '../Global';
import { Helmet } from "react-helmet";
import { Breakpoint }  from '../Global';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory, useLocation } from "react-router-dom";
import { Form, Message } from 'semantic-ui-react';
import Breadcrumb from '../components/Breadcrumb'

//Page data
const Page = {
  title: 'Login'
}

const PasswordContainer = styled.section`
  display: grid;
  align-items: start;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: var(--spacing-large);
  grid-template-areas:
    "header header header"
    "content content content"
  ;
  @media ${Breakpoint.medium} {
      grid-template-areas:
          "header content content"
      ;
  }
`
const Header = styled.div `
  grid-area: header;
`
const Password = styled.div`
  grid-area: content;
  input {
    width: 100%;
    max-width: 500px;
    color: var(--font-color);
    font-size: var(--body-font-size) !important;
    padding: 0.4em;
    background: var(--third-color);
    border-width: 1px;
    border-radius: 0.4em;
    border-style: solid;
    border-color: var(--sec-color) !important;
    -webkit-appearance: none;
    margin-top: var(--spacing-xsmall) !important;
    font-family: 'GT America Mono Medium';
  }
  label {
    font-size: var(--small-font-size) !important;
  }
  button {
    width: 100%;
    max-width: 500px;
    color: var(--background-color);
    background-color: var(--font-color);
    padding: 0.8em;;
    border-radius: 0.4em;
    border-color: none;
    -webkit-appearance: none;
    border-width: 0;
    margin-top: var(--spacing-xsmall) !important;
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

        {/* Things to but in the head tag */}
        <Helmet><title>{Page.title + " – Matt Argo"}</title></Helmet>

        <PasswordContainer className="spacing-large-top">
          <Header className="spacing-medium-bottom">
            <Breadcrumb />  
          </Header>
          <Password>
            <p>To honor my non-disclosure agreements, some of my work is private. Enter your code below to view everything, or <a href="mailto:name@rapidtables.com">email me</a> if you need one.</p>
            <Form className="spacing-large-top small-text" error={error} onSubmit={this.onSubmit}>
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
        </PasswordContainer>
      </motion.div>
    );
  }
}

export default Login;