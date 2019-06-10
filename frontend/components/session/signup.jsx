import React from 'react';
import { Link } from 'react-router-dom';

class Signup extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            password: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createUser(this.state)
            .then(() => this.props.history.push('/home'));
    }

    render() {
        return(
            <div className="login-container">
                <div className="login-wrapper">
                    <form className="login-inputs" onSubmit={this.handleSubmit}>
                        <input className="login-input" type="text"
                            value={this.state.first_name}
                            onChange={this.update("email")}
                            placeholder="Email"
                            />
                        <input className="login-input" type="password"
                            value={this.state.first_name}
                            onChange={this.update("password")}
                            placeholder="Password"
                            />
                        <input className="login-input" type="text"
                            value={this.state.first_name}
                            onChange={this.update("first_name")}
                            placeholder="First Name"
                            />
                        <input className="login-input" type="text"
                            value={this.state.first_name}
                            onChange={this.update("last_name")}
                            placeholder="Last Name"
                            />
                        <input className="login-submit" type="submit" value="Sign Up"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default Signup;