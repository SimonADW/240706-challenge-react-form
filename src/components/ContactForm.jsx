import React from 'react'
import style from "./ContactForm.module.css"

const ContactForm = () => {
  return (
	<>
		<form className={style.contactForm} action="">
			<h1>Contact us</h1>
			<div className={style.nameContainer}>
				<div className={style.inputLabelPair}>
					<label htmlFor="firstName">First Name<sup>*</sup></label>
					<input type="text" />
				</div>
				<div className={style.inputLabelPair}>
					<label htmlFor="lastName">Last Name <sup>*</sup></label>
					<input type="text" />
				</div>
			</div>

			<div className={style.inputLabelPair}>
				<label htmlFor="email">E-mail Adress:</label>
				<input type="email" />
			</div>

			<div className={`${style.inputLabelPair} ${style.queryContainer}`}>
			<label htmlFor="query">Query Type <sup>*</sup></label>
				<div className={style.radioAndLabel}>
					<input type="radio" name="query" />
					<label htmlFor="generalEnquery">General Enquiry</label>
				</div>
				<div className={style.radioAndLabel}>
					<input type="radio" name="query" />
					<label htmlFor="supportRequest">Support Request</label>
				</div>
			</div>

			<div className={style.inputLabelPair}>
				<label htmlFor="message">Message <sup>*</sup></label>
				<textarea name="" id="message" rows={6}></textarea>
			</div>

			<div className={style.checkboxContainer}>
				<input type="checkbox" />
				<label htmlFor="consent">I consent to being contacted by the team <sup>*</sup></label>
			</div>

			<button>Submit</button>
		</form>
	</>
  )
}

export default ContactForm