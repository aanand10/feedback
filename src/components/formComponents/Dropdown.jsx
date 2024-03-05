import React, { useState } from "react";

const Dropdown = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState("Select");

	const handleButtonClick = () => {
		setIsOpen(!isOpen);
	};

	const handleOptionClick = (option) => {
		setSelectedOption(option);
		setIsOpen(false);
	};

	return (
		<div className='relative'>
			<button
				className='bg-[#E0E0E0] w-full px-4 py-2 text-[#4D4D4D] border flex justify-between font-medium text-lg border-[#CCCCCC] rounded-lg  items-center'
				onClick={handleButtonClick}>
				{selectedOption}
				<svg
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M20.5735 7.03341C20.6689 6.94319 20.7812 6.87266 20.904 6.82585C21.0267 6.77903 21.1574 6.75685 21.2887 6.76056C21.42 6.76427 21.5493 6.79381 21.6692 6.84749C21.7891 6.90117 21.8972 6.97794 21.9875 7.07341C22.0777 7.16888 22.1482 7.28119 22.195 7.40392C22.2418 7.52664 22.264 7.65739 22.2603 7.78869C22.2566 7.92 22.2271 8.04928 22.1734 8.16917C22.1197 8.28905 22.0429 8.39719 21.9475 8.48741L12.9475 16.9874C12.7618 17.1629 12.516 17.2608 12.2605 17.2608C12.005 17.2608 11.7591 17.1629 11.5735 16.9874L2.57246 8.48741C2.4749 8.39779 2.39612 8.28967 2.34069 8.16934C2.28527 8.04902 2.25431 7.91888 2.2496 7.78648C2.2449 7.65409 2.26655 7.52208 2.3133 7.39812C2.36004 7.27417 2.43095 7.16073 2.5219 7.06441C2.61286 6.96809 2.72205 6.8908 2.84312 6.83704C2.9642 6.78327 3.09475 6.7541 3.2272 6.75121C3.35965 6.74833 3.49135 6.77179 3.61465 6.82023C3.73795 6.86868 3.8504 6.94114 3.94546 7.03341L12.2605 14.8854L20.5735 7.03341Z'
						fill='#333333'
					/>
				</svg>
			</button>
			{isOpen && (
				<div className='absolute z-10 bg-[#E0E0E0] mt-2 py-2 w-full text-[#4D4D4D] border border-[#CCCCCC] font-medium text-lg rounded-md shadow-lg'>
					<a
						href='#'
						className={`block px-4 py-2 text-center  hover:bg-gray-300 ${
							selectedOption === "Concept cards" ? "bg-gray-300" : ""
						}`}
						onClick={() => handleOptionClick("Concept cards")}>
						Concept cards
					</a>
					<a
						href='#'
						className={`block px-4 py-2 text-center  hover:bg-gray-300 ${
							selectedOption === "Interview Questions" ? "bg-gray-300" : ""
						}`}
						onClick={() => handleOptionClick("Interview Questions")}>
						Interview Questions
					</a>
					<a
						href='#'
						className={`block px-4 py-2 text-center  hover:bg-gray-300 ${
							selectedOption === "Practice Questions" ? "bg-gray-300" : ""
						}`}
						onClick={() => handleOptionClick("Practice Questions")}>
						Practice Questions
					</a>
					<a
						href='#'
						className={`block px-4 py-2 text-center  hover:bg-gray-300 ${
							selectedOption === "Quizzes" ? "bg-gray-300" : ""
						}`}
						onClick={() => handleOptionClick("Quizzes")}>
						Quizzes
					</a>
				</div>
			)}
		</div>
	);
};

export default Dropdown;
