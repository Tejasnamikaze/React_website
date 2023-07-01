// import { useState } from 'react';
// import './style.css';
// export default function Form() {

// 	// States for registration
// 	const [name, setName] = useState('');
// 	const [email, setEmail] = useState('');
// 	const [password, setPassword] = useState('');

// 	// States for checking the errors
// 	const [submitted, setSubmitted] = useState(false);
// 	const [error, setError] = useState(false);

// 	// Handling the name change
// 	const handleName = (e) => {
// 		setName(e.target.value);
// 		setSubmitted(false);
// 	};

// 	// Handling the email change
// 	const handleEmail = (e) => {
// 		setEmail(e.target.value);
// 		setSubmitted(false);
// 	};

// 	// Handling the password change
// 	const handlePassword = (e) => {
// 		setPassword(e.target.value);
// 		setSubmitted(false);
// 	};

// 	// Handling the form submission
// 	const handleSubmit = (e) => {
// 		e.preventDefault();
// 		if (name === '' || email === '' || password === '') {
// 			setError(true);
// 		} else {
// 			setSubmitted(true);
// 			setError(false);
// 		}
// 	};

// 	// Showing success message
// 	const successMessage = () => {
// 		return (
// 			<div
// 				className="success"
// 				style={{
// 					display: submitted ? '' : 'none',
// 				}}>
// 				<h1>User {name} successfully registered!!</h1>
// 			</div>
// 		);
// 	};

// 	// Showing error message if error is true
// 	const errorMessage = () => {
// 		return (
// 			<div
// 				className="error"
// 				style={{
// 					display: error ? '' : 'none',
// 				}}>
// 				<h1>Please enter all the fields</h1>
// 			</div>
// 		);
// 	};

// 	return (
// 		<div className="form">
// 			<div>
// 				<h1>User Registration</h1>
// 			</div>

// 			{/* Calling to the methods */}
// 			<div className="messages">
// 				{errorMessage()}
// 				{successMessage()}
// 			</div>

// 			<form>
// 				{/* Labels and inputs for form data */}
// 				<label className="label"> Name </label>
// 				<input onChange={handleName} className="input"
// 					value={name} type="text" />
// 				<hr></hr>

// 				<label className="label"> Email </label>
// 				<input onChange={handleEmail} className="input"
// 					value={email} type="email" />
// 				<hr>
// 				</hr>

// 				<label className="label"> Password </label>
// 				<input onChange={handlePassword} className="input"
// 					value={password} type="password" />
// 				<hr></hr>
// 				<button onClick={handleSubmit} className="btn" type="submit">
// 					Submit
// 				</button>
// 			</form>
// 		</div>
// 	);
// }
import './regform.css'
import React, { useState } from 'react';

const Form = () => {
	const [formData, setFormData] = useState({
		name: '',
		phoneNumber: '',
		email: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Perform any additional processing or validation here
		console.log(formData);
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Name:
				<input
					type="text"
					name="name"
					value={formData.name}
					onChange={handleChange}
				/>
			</label>
			<br />
			<label>
				Phone Number:
				<input
					type="text"
					name="phoneNumber"
					value={formData.phoneNumber}
					onChange={handleChange}
				/>
			</label>
			<br />
			<label>
				Address:
				<input
					type="text"
					name="text"
					value={formData.phoneNumber}
					onChange={handleChange}
				/>
			</label>
			<br />
			<label>
				Email:
				<input
					type="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
				/>
			</label>
			<br />
			<button type="submit">Submit</button>
		</form>
	);
};

export default Form;
