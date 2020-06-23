import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>home</NavLink>
        <NavLink to="/create" activeClassName="is-active">add expense</NavLink>
        <NavLink to="/help" activeClassName="is-active">help</NavLink>
        <button onClick={startLogout}>Logout</button>
        </header>
);

const mapDispatchtoProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchtoProps)(Header);