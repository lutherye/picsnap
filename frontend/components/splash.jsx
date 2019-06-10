import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/session_actions';
import { Link } from 'react-router-dom';
import Login from '../components/session/login_container';
import Signup from '../components/session/signup';

const mdp = dispatch => {
    return({
        login: (formUser) => dispatch(login(formUser))
    });
};

class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signUp: false,
        };
        // this.handleDemo = this.handleDemo.bind(this);
        this.changeForm = this.changeForm.bind(this);
    }

    changeForm() {
        let that = this;
        return () => {
            debugger
            if (that.state.signUp) {
                that.setState({signUp: false});
            } else {
                that.setState({signUp: true});
            }
        };
    }

    render() {
        const formBar = this.state.signUp ? <Signup/> : <Login/>
        const buttonWord = this.state.signUp ? "Log in" : "Sign up"
        return(
            <main className="splash-page">
                <button onClick={this.changeForm()}>{buttonWord}</button>
                {formBar}
            </main>
        )
    }
}

export default connect(null, mdp)(Splash);