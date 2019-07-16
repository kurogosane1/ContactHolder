import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/Auth/authContext';
import AlertContext from '../../context/Auth/authContext';

const Login = props => {
	const authContext = useContext(AuthContext);
	const alertContext = useContext(AlertContext);

	const { setAlert } = alertContext;
	const { login, error, clearErrors, isAuthenticated } = authContext;

	useEffect(() => {
		if (isAuthenticated) {
			props.history.push('/');
		}
		if (error === 'Invalid Credentials') {
			setAlert(error, 'danger');
			clearErrors();
		}
	}, [clearErrors, error, setAlert, isAuthenticated, props.history]);

	const [user, setUser] = useState({
		email: '',
		password: '',
	});

	const { email, password } = user;
	const onchange = e => setUser({ ...user, [e.target.name]: e.target.value });

	const onsubmit = e => {
		e.preventDefault();
		if (email === '' || password === '') {
			setAlert('Please fill in all fields', 'danger');
		} else {
			login({
				email, 
				password
			});
		}
	};
	return (
		<div className="form-container">
			<h1>
				Account <span className="text-primary">Login</span>
			</h1>
			<form onSubmit={onsubmit}>
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
					/>
				</div>

				<input
					type="submit"
					value="Login"
					className="btn btn-primary btn-block"
				/>
			</form>
		</div>
	);
};

export default Login;
