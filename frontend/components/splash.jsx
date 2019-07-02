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
        this.handleDemo = this.handleDemo.bind(this);
        this.changeForm = this.changeForm.bind(this);
    }

    changeForm() {
        let that = this;
        return () => {
            if (that.state.signUp) {
                that.setState({signUp: false});
            } else {
                that.setState({signUp: true});
            }
        };
    }

    handleDemo(e) {
        e.preventDefault();
        const demo = Object.assign({}, { email: "demo@demo.com", password: "password" });
        this.props.login(demo)
            .then(() => this.props.history.push('/'));
    }

    render() {
        const formBar = this.state.signUp ? <Signup/> : <Login/>
        const buttonWord = this.state.signUp ? "Log in" : "Sign up"
        return(
            <main className="splash-page">
                        <button className="change-form"
                            onClick={this.changeForm()}>
                                {buttonWord}
                        </button>
                <div className="splash-container">
                    <div className="form-wrapper">
                        <div className="form-container">
                            <div className="logo">
                                Logo
                            </div>
                            <div className="welcome">
                                Welcome to Picsnap
                            </div>
                            <div className="ideas">
                                Find new ideas to try
                            </div>
                            {formBar}
                            <div className="or">
                                OR
                            </div>
                            <div>
                                <div className="demo-wrapper">
                                    <button className="demo"
                                        onClick={this.handleDemo}
                                    >
                                        Continue with Demo
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default connect(null, mdp)(Splash);