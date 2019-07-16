import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/Alert/AlertContext';
import AuthContext from '../../context/Auth/authContext';

const Register = (props) => {
	const alertContext = useContext(AlertContext);
	const authContext = useContext(AuthContext);
	const { setAlert } = alertContext;
	const { register, error, clearErrors, isAuthenticated } = authContext;

	useEffect(() => {
		if(isAuthenticated) {
			props.history.push('/');
		}
		if (error === 'User already exists') {
			setAlert(error, 'danger');
			clearErrors();
		}
	}, [clearErrors, error, setAlert, isAuthenticated, props.history]);

	const [user, setUser] = useState({
		name: '',
		email: '',
		password: '',
		password2: '',
	});

	const { name, email, password, password2 } = user;
	const onchange = e => setUser({ ...user, [e.target.name]: e.target.value });
	const onsubmit = e => {
		e.preventDefault();
		if (name === '' || email === '' || password === '') {
			setAlert('please enter all fields', 'danger');
		} else if (password !== password2) {
			setAlert('passwords do not match');
		} else {
			register({
				name,
				email,
				password,
			});

		}
	};
	return (
		<div className="form-container">
			<h1>
				Account <span className="text-primary">Register</span>
			</h1>
			<form onSubmit={onsubmit}>
				<div className="form-group">
					<label htmlFor="name">Name</label>
					<input
						type="text"
						name="name"
						value={name}
						onChange={onchange}
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="email">Email Address</label>
					<input
						type="email"
						name="email"
						value={email}
						onChange={onchange}
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						name="password"
						value={password}
						onChange={onchange}
						required
						minLength="6"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="password2">Confirm Password</label>
					<input
						type="password"
						name="password2"
						value={password2}
						onChange={onchange}
						required
						minLength="6"
					/>
				</div>
				<input
					type="submit"
					value="Register"
					className="btn btn-primary btn-block"
				/>
			</form>
		</div>
	);
};

export default Register;
