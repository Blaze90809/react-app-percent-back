import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Create extends React.Component {

  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }
  onChange = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { username, password } = this.state;

    axios.post('/api/auth/register', { username, password })
      .then((result) => {
        this.props.history.push("/")
      });
  };

    render() {
        const { username, password } = this.state;
        return (
            <div className="container">
                <div className="register-div">
                    <form className="form-signin" onSubmit={this.onSubmit}>
                        <h2 className="form-signin-heading">Register</h2>
                        <label for="inputEmail" className="sr-only">Email address</label>
                        <input type="email" className="form-control" placeholder="Email address" name="username" value={username} onChange={this.onChange} required/>
                        <label for="inputPassword" className="sr-only">Password</label>
                        <input type="password" className="form-control" placeholder="Password" name="password" value={password} onChange={this.onChange} required/>
                        <button className="btn btn-lg btn-primary btn-block" type="submit">Register</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Create;