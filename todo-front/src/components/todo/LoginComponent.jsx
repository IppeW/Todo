import React, { Component } from 'react';
import AuthenticationService from './AuthenticationService.js'

class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: 'meddi',
            password: '',
            hasLoginFailed: false,
            showSuccesMessage: false,
        }
        // this.handlerUserChange = this.handlerUserChange.bind(this)
        // this.handlerPassChange = this.handlerPassChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    // handlerUserChange(event) {
    //     console.log(event.target.value);
    //     this.setState({ username: event.target.value })

    // }

    // handlerPassChange(event) {
    //     console.log(event.target.value);
    //     this.setState({ password: event.target.value })
    // }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]
                    : event.target.value
            }
        )
    }

    loginClicked() {
        // if (this.state.username === 'meddi' && this.state.username === 'dummy') {
        //     AuthenticationService.registerSuccessfullLogin(this.state.username, this.state.password);
        //     this.props.history.push(`/welcome/${this.state.username}`)
        //     // this.setState({ showSuccesMessage: true })
        //     // this.setState({ hasLoginFailed: false })
        // }

        // else {
        //     console.log('Fail')
        //     this.setState({ showSuccesMessage: false })
        //     this.setState({ hasLoginFailed: true })
        // }

        // AuthenticationService
        //     .executeBasicAuthenticationService(this.state.username, this.state.password)
        //     .then(() => {
        //         AuthenticationService.registerSuccessfullLogin(this.state.username, this.state.password);
        //         this.props.history.push(`/welcome/${this.state.username}`)
        //     }).catch(() => {
        //         this.setState({ showSuccesMessage: false })
        //         this.setState({ hasLoginFailed: true })
        //     })

        AuthenticationService
            .executeJwtAuthenticationService(this.state.username, this.state.password)
            .then((response) => {
                AuthenticationService.registerSuccessfullLoginForJwt(this.state.username, response.data.token);
                this.props.history.push(`/welcome/${this.state.username}`)
            }).catch(() => {
                this.setState({ showSuccessMessage: false })
                this.setState({ hasLoginFailed: true })
            })

    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                    {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} /> */}
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {/* {this.state.showSuccesMessage && <div>Login Sucessful</div>} */}
                    {/* <ShowLoginSuccesMessage showSuccesMessage={this.state.showSuccesMessage} /> */}
                    User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                    Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                </div>
            </div>
        );
    }
}

export default LoginComponent