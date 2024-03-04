import React, { useState } from "react";
import { FiPlus, FiX } from "react-icons/fi";

const Fab = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState(null);

	const options = [
		{ id: 1, label: "Report an issue" },
		{ id: 2, label: "Share Feedback" },
		{ id: 3, label: "Give Suggestion" },
		{ id: 4, label: "Contact Us" },
	];

	const handleFabClick = () => {
		setIsOpen(!isOpen);
		setSelectedOption(null);
	};

	const handleOptionClick = (option) => {
		setSelectedOption(option);
	};

	const handleCloseClick = () => {
		setSelectedOption(null);
		setIsOpen(false);
	};

	return (
		<div className='fixed bottom-4 right-4 z-10'>
			{isOpen ? (
				<div className='flex flex-col gap-2 p-2 bg-white shadow-lg rounded-lg'>
					{options.map((option) => (
						<button
							key={option.id}
							className={`flex items-center justify-center p-2 rounded-lg ${
								selectedOption?.id === option.id ? "bg-gray-200" : ""
							}`}
							onClick={() => handleOptionClick(option)}>
							{option.label}
						</button>
					))}
				</div>
			) : (
				<></>
			)}
			<button
				className='flex items-center justify-center w-12 h-12 bg-gray-100 text-gray-900 rounded-full shadow-lg'
				onClick={handleFabClick}></button>
		</div>
	);
};

export default Fab;
