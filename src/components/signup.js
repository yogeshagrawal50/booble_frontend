import React, { Component } from 'react';
import '../styles/signup.css';

import Google from './googleLogin';
import Facebook, { facebook } from'./facebookLogin'


const responseFacebook = (response) => {
  console.log(response);
}

const responseGoogle = (response) => {
  console.log(response);
}
export default class SignUp extends Component {
	constructor() {
		super();
		this.state = {
			firstname: '',
			lastname: '',
			email: '',
      password: '',
  
		};
    this.handleSubmit = this.handleSubmit.bind(this);
  }
    

  async handleSubmit(e) {
    var data = new FormData();
    const payload = {
    email: this.lastname.email,
    password: this.lastname.password

};
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify(payload);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
};

const result =  await fetch("https://reqres.in/api/register", requestOptions)
  .then(response => { 
    return response.json()
  })
  .then(data => {
    console.log(data);
    return data
  })
  .catch(error => console.log('error', error));
  }

	render() {
		const { errors } = this.state;
		return (
			<div className="sigup-form">
				<h6>Sign Up</h6>

				<h3> Create Your Account</h3>
        <p className="lorem-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <p className="lorem-text"> OR  </p>

				<form >
        <div className="socialLogin">
        <Google className="googleButton" />
        <Facebook className="facebookButton" />
        </div>
    

  			<div className='form-group'>
						<input
							type='text'
							className='form-control'
              name='firstname'
              required
							value={this.state.firstname}
							onChange={(evt) => this.setState({ firstname: evt.target.value })}
							placeholder='First name'
						/>
					</div>
					<div className='form-group'>
						<input
							type='text'
							className='form-control'
							name='lastname'
							value={this.state.lastname}
              onChange={(evt) => this.setState({ lastname: evt.target.value })}
              required
							placeholder='Last name'
						/>
					</div>
					<div className='form-group'>
						<input
							type='email'
							className='form-control'
							name='email'
              value={this.state.email}
              required
							onChange={(evt) => this.setState({ email: evt.target.value })}
							placeholder='Enter email'
						/>
					</div>
					<div className='form-group'>
						<input
              type="password"	
              className='form-control'
							name='password'
              value={this.state.password}
              minLength="8"
              required
							onChange={(evt) => this.setState({ password: evt.target.value })}
              placeholder='Enter password'              
						/>
          </div>
					<button type='submit' className='btn btn-primary btn-block'>
						Sign Up
					</button>
					<p className='policy'>
						By clicking Sign Up you agree to our <a href='#'>Terms of Use</a>{' '}
						and our <a href='#'>Privacy Policy</a>
					</p>
				</form>
			</div>
		);
	}
}
