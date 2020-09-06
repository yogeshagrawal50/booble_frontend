import React, { Component } from 'react';
import '../styles/signup.css';

function validate(firstname, lastname, email, password) {
	// we are going to store errors for all fields
	// in a signle array
	const errors = [];

	if (firstname.length === 0) {
		errors.push("Name can't be empty");
	}
	if (lastname.length === 0) {
		errors.push("Name can't be empty");
	}
	if (email.length < 5) {
		errors.push('Email should be at least 5 charcters long');
	}
	if (email.split('').filter((x) => x === '@').length !== 1) {
		errors.push('Email should contain a @');
	}
	if (email.indexOf('.') === -1) {
		errors.push('Email should contain at least one dot');
	}

	if (password.length < 6) {
		errors.push('Password should be at least 6 characters long');
	}

	return errors;
}

export default class SignUp extends Component {
	constructor() {
		super();
		this.state = {
			firstname: '',
			lastname: '',
			email: '',
			password: '',
			errors: [],
		};

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();

		const { firstname, lastname, email, password } = this.state;

		const errors = validate(firstname, lastname, email, password);
		if (errors.length > 0) {
			this.setState({ errors });
			return;
		}

		// submit the data...
	}

	render() {
		const { errors } = this.state;
		return (
			<div>
				<h6>Sign Up</h6>

				<h3> Create Your Account</h3>
				<form onSubmit={this.handleSubmit}>
					{errors.map((error) => (
						<p key={error}>Error: {error}</p>
					))}
					
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
							type='password'
							className='form-control'
							name='password'
              value={this.state.password}
              required
							onChange={(evt) => this.setState({ password: evt.target.value })}
							placeholder='Enter password'
						/>
					</div>
					<button type='submit' className='btn btn-primary btn-block'>
						Sign Up
					</button>
					<p className='forgot-password text-right'>
						By clicking Sign Up you agree to our <a href='#'>Terms of Use</a>{' '}
						and our <a href='#'>Privacy Policy</a>
					</p>
				</form>
			</div>
		);
	}
}
