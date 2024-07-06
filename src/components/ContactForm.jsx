import React from 'react'
import style from "./ContactForm.module.css"

const ContactForm = () => {
  return (
	<>
		<form className={style.contactForm} action="">
			<h1>Contact us</h1>
			<div className={style.inputTwoColumn}>
				<div>
					<label htmlFor="firstName">First Name<sup>*</sup></label>
					<input type="text" />
				</div>
				<div>
					<label htmlFor="lastName">Last Name <sup>*</sup></label>
					<input type="text" />
				</div>
			</div>

			<div className={style.inputOneColumn}>
				<label htmlFor="email">E-mail Adress:</label>
				<input type="email" />
			</div>

			<label htmlFor="query">Query Type <sup>*</sup></label>
			<div>
				<div>
					<input type="radio" />
					<label htmlFor="generalEnquery">General Enquiry</label>
				</div>
				<div>
					<input type="radio" />
					<label htmlFor="supportRequest">Support Request</label>
				</div>
			</div>

			<div className={style.inputOneColumn}>
				<label htmlFor="message">Message <sup>*</sup></label>
				<textarea name="" id="message"></textarea>
			</div>

			<div>
				<input type="checkbox" />
				<label htmlFor="consent">I consent to being contacted by the team <sup>*</sup></label>
			</div>

			<button>Submit</button>
		</form>
	</>
  )
}

export default ContactForm