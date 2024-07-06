import { useCallback } from "react";
import style from "./ContactForm.module.css";
import { useForm } from "react-hook-form";

const ContactForm = () => {
	const { register, handleSubmit, formState: {errors}} = useForm({
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			query: "",
			message: "",
			consent: false,
		}
	})

	const onSubmit = useCallback((data)=> {
		console.log(data);
		}
	)

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)} className={style.contactForm} action="">
				<h1>Contact us</h1>
				<div className={style.nameContainer}>
					<div className={style.inputLabelPair}>
						<label htmlFor="firstName">
							First Name<sup>*</sup>
						</label>
						<input {...register("firstName", { required: "First name is required"})} type="text" />
						<p>{errors.firstName?.message}</p>
					</div>
					<div className={style.inputLabelPair}>
						<label htmlFor="lastName">
							Last Name <sup>*</sup>
						</label>
						<input {...register("lastName", { required: "Last name is required"})} type="text" />
						<p>{errors.lastName?.message}</p>
					</div>
				</div>

				<div className={style.inputLabelPair}>
					<label htmlFor="email">E-mail Adress:</label>
					<input {...register("email", {
						required: {
							value: true,
							message: "Email is required", 
						},
						pattern: "Please enter a valid e-mail adress",
					})} type="email" />
					<p>{errors.email?.message}</p>
				</div>

				<div>
					<label className={style.queryMainLabel} htmlFor="query">
						Query Type <sup>*</sup>
					</label>
					<div
						className={`${style.inputLabelPair} ${style.queryContainer}`}
					>
						<div className={style.radioAndLabel}>
							<input {...register("query")} type="radio" value="general" id="generalEnquery" checked />
							<label htmlFor="generalEnquery">
								General Enquiry
							</label>
						</div>
						<div className={style.radioAndLabel}>
							<input {...register("query")} type="radio" value="support" id="supportRequest"/>
							<label htmlFor="supportRequest">
								Support Request
							</label>
						</div>
					</div>
				</div>

				<div className={style.inputLabelPair}>
					<label htmlFor="message">
						Message <sup>*</sup>
					</label>
					<textarea {...register("message", {required: "Please enter a message"})} id="message" rows={6}></textarea>
					<p>{errors.message?.message}</p>
				</div>

				<div className={style.checkboxContainer}>
					<input {...register("consent", { required: "Please agree to being contacted"})} type="checkbox" />
					<label htmlFor="consent">
						I consent to being contacted by the team <sup>*</sup>
					</label>
				</div>
				<p>{errors.consent?.message}</p>

				<button>Submit</button>
			</form>
		</>
	);
};

export default ContactForm;
