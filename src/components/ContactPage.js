import React from 'react';
//import {startAddEnquiry} from '../actions/enquiries';


class ContactPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			message: '',
			error: ''
		};
	};

	onEmailChange = (e) => {
		const email = e.target.value;
		this.setState(() => ({email}));
	};
	onMessageChange = (e) => {
		const message = e.target.value;
		this.setState(() => ({message}));
	};
	onSubmit = (e) => {
		e.preventDefault();
		
		if(!this.state.email || !this.state.message) {
			this.setState(() => ({
				error: true
			}));
		} else {
			this.setState(() => ({
				error: false
			}));
			
			/*this.props.startAddEnquiry({
				email: this.state.email,
				name: this.state.message
			});*/
			this.props.history.push('/');
		}
	};

	render() {
		return (
			<div className="content-container">
				<div className="page-header">
					<h1 className="page-header__title">Contact</h1>
				</div>
				<form className="form">
					<div className="input-body">
						<div className="input-item">
							<h3 className="input-item__sub-title">Your Email</h3>
							<input 
								type="text"
								autoFocus
								className="text-input"
								value={this.state.email}
								onChange={this.onEmailChange}
							/>
							{this.state.error && !this.state.email ? <p className="form__error">*Please provde an email.</p> : ""}
						</div>
						<div className="input-item">
							<h3 className="input-item__sub-title">Message</h3>
							<textarea 
								className="textarea"
								value={this.state.message}
								onChange={this.onMessageChange}
							/>
							{this.state.error && !this.state.message ? <p className="form__error">*Please provde a message.</p> : ""}
						</div>
						<div className="input-item">
							<button className="button" onClick={this.onSubmit}>Send Message</button>
						</div>
					</div>
				</form>
			</div>
		);
	};
};

export default ContactPage;