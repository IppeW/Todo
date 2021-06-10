import React, { Component } from 'react';
import AuthenticationService from './AuthenticationService.js'
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';


class HeaderComponent extends Component {
    render() {
        const isUserLoggin = AuthenticationService.isUserLoggedIn();
        //console.log(isUserLoggin);

        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="www.meddi.fr" className="navbar-brand">Meddi</a></div>
                    <ul className="navbar-nav">
                        {isUserLoggin && <li><Link to="/welcome/Meddi" className="nav-link">Home</Link></li>}
                        {isUserLoggin && <li><Link to="/todos" className="nav-link">Todos</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggin && <li><Link to="/login" className="nav-link">Login</Link></li>}
                        {isUserLoggin && <li><Link to="/logout" className="nav-link" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>

        )
    }
}

export default withRouter(HeaderComponent);