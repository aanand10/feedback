import React, { useRef, useState } from "react";
import Dropdown from "../formComponents/Dropdown";
// import TextBoxField from "../formComponents/TextBoxField";
import Cookies from "js-cookie";
import { MdOutlineAttachFile } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const ContactUsCard = () => {
	const isUserLoggedIn = Cookies.get("isUserLoggedIn");
	const [selectedOption, setSelectedOption] = useState("Select");
	const [message, setMessage] = useState("");
	const [email, setEmail] = useState("");
	const [mobile, setMobile] = useState("");
	console.log(message, selectedOption, email, "isUserLoggedIn");
	const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);

	function OnSubmit(e) {
		e.preventDefault();

		console.log({
			selectedOption: selectedOption,
			message: message,
			email: email,
		});

		setIsSubmitEnabled(false);
		setEmail("");
		setMessage("");
		setSelectedOption("");
		setMobile("");
	}

	return (
		<div className='lg:fixed lg:bottom-24 lg:right-8 max-w-[25rem] w-full lg:w-[25rem] flex flex-col justify-center items-center bg-[#F8F8F8] px-4 pt-6 rounded-lg shadow-xl shadow-[#00000029] gap-6 '>
			<div className='flex justify-center w-full items-center border-b-2 border-[#CCCCCC]'>
				<h3 className='text-xl font-Poppins px-4 pb-6 text-center font-semibold text-[#4D4D4D] '>
					Let us know what{" "}
					<span className='font-bold text-black'>your queries</span> are!
				</h3>
			</div>
			<div className='w-full text-[#4D4D4D]  font-medium text-lg  rounded-lg '>
				<label className='block mb-2 text-lg font-Poppins font-medium text-[#4D4D4D]'>
					Your Name
				</label>
				<div className='relative'>
					<input
						type='text'
						name='name'
						id=''
						placeholder='Enter Your Name'
						className='block w-full px-4 text-lg py-2 border bg-[#E0E0E0] border-[#CCCCCC] rounded-lg resize-none focus:outline-none focus:border-blue-500'
					/>
				</div>
			</div>
			{isUserLoggedIn === "false" ? (
				<>
					<div className='w-full'>
						<label className='text-lg font-Poppins font-medium text-[#4D4D4D]'>
							Your Email
						</label>
						<input
							type='email'
							name='email'
							id='email'
							value={email}
							onChange={(e) => {
								setEmail(e.target.value);
							}}
							className='bg-[#E0E0E0] w-full px-4 py-2 text-[#4D4D4D] border flex justify-between font-medium text-lg border-[#CCCCCC] rounded-lg  items-center'
							placeholder='Enter your Email'
						/>
					</div>
					<div className='w-full'>
						<label className='text-lg font-Poppins font-medium text-[#4D4D4D]'>
							Your Mobile Number
						</label>
						<input
							type='number'
							name='number'
							id='number'
							value={mobile}
							onChange={(e) => {
								setMobile(e.target.value);
							}}
							className='bg-[#E0E0E0] w-full px-4 py-2 text-[#4D4D4D] border flex justify-between font-medium text-lg border-[#CCCCCC] rounded-lg  items-center'
							placeholder='Enter your number'
						/>
					</div>
				</>
			) : null}

			<div className='w-full text-[#4D4D4D]  font-medium text-lg  rounded-lg '>
				<label
					className='block mb-2 text-lg font-Poppins font-medium text-[#4D4D4D]'
					htmlFor='textArea'>
					What would you like to ask? <span className='text-red'>*</span>
				</label>
				<div className='relative'>
					<textarea
						id='textArea'
						className='block w-full px-4 text-lg py-2 border bg-[#E0E0E0] border-[#CCCCCC] rounded-lg resize-none focus:outline-none focus:border-blue-500'
						rows={3}
						placeholder='Write here...'
						value={message}
						onChange={(e) => {
							const newText = e.target.value;
							setMessage(newText);
							setIsSubmitEnabled(newText.length > 0);
						}}
						maxLength={1000}
					/>
				</div>
			</div>

			<div className='flex justify-end w-full '>
				<button
					className={`text-lg font-Poppins font-medium text-white bg-[#0F0F0F] px-5 py-2  mb-6 rounded ${
						!isSubmitEnabled && "cursor-not-allowed opacity-50"
					}`}
					disabled={!isSubmitEnabled}
					onClick={OnSubmit}>
					Submit
				</button>
			</div>
		</div>
	);
};

export default ContactUsCard;
