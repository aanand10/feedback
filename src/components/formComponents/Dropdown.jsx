import React, { useState } from "react";

const Dropdown = ({ options, setSelectedOption, selectedOption }) => {
	//   const [selectedOption, setSelectedOption] = useState(null);

	return (
		<div className='relative'>
			<select
				className='bg-[#E0E0E0] w-full px-4 py-2 text-[#4D4D4D] border flex justify-between font-medium text-lg border-[#CCCCCC] rounded-lg  items-center'
				onChange={(e) => setSelectedOption(e.target.value)}
				value={selectedOption}>
				<option
					value={selectedOption}
					disabled
					selected
					className={`bg-[#E0E0E0] w-full text-[#4D4D4D] border border-[#CCCCCC] font-medium text-lg rounded-md shadow-lg px-4 py-2  hover:bg-gray-300 ${
						selectedOption ? "bg-gray-300" : ""
					}`}>
					{selectedOption}
				</option>
				{options?.map((option) => (
					<option
						key={option}
						className={`bg-[#E0E0E0] w-full text-[#4D4D4D] border border-[#CCCCCC] font-medium text-lg rounded-md shadow-lg px-4 py-2  hover:bg-gray-300 ${
							selectedOption ? "bg-gray-300" : ""
						}`}>
						{option}
					</option>
				))}
			</select>
		</div>
	);
};

export default Dropdown;
