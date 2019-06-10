import React from 'react';
import { Link } from 'react-router-dom';


class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email:"",
            password:"",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state)
            .then(()=> this.props.history.push('/home'));
    }

    render() {
        return(
            <div className="login-container">
                <div className="login-wrapper">
                    <form className="login-inputs" onSubmit={this.handleSubmit}>

                        <input className="login-input" type="email"
                            value={this.state.email}
                            onChange={this.update("email")}
                            required="required"
                            placeholder="Email"
                        />


                        <input className="login-input" type="password"
                            value={this.state.password}
                            onChange={this.update("password")}
                            required="required"
                            placeholder="Password"
                        />
                        <input className="login-submit" type="submit" value="Log In"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;