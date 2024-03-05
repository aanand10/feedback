import React, { useState } from "react";
import Dropdown from "./formComponents/Dropdown";
import { RxCross2 } from "react-icons/rx";
import TextBoxField from "./formComponents/TextBoxField";
const FabCard = ({}) => {
	const [file, setFile] = useState(null);

	const handleFileChange = (e) => {
		setFile(e.target.files[0]);
	};

	const removeFile = () => {
		setFile(null);
	};
	return (
		<div className='fixed lg:bottom-24 lg:right-8 max-w-[25rem] w-full lg:w-[25rem] flex flex-col justify-center items-center bg-[#F8F8F8] px-4 pt-6 rounded-lg shadow-xl shadow-[#00000029] gap-6 '>
			<div className='flex justify-center w-full items-center border-b-2 border-[#CCCCCC]'>
				<h3 className='text-xl font-Poppins px-9 pb-6 text-center font-semibold text-[#4D4D4D] '>
					Share your <span className='font-bold text-black'>Suggestions</span>{" "}
					with us for a chance to earn rewards!
				</h3>
			</div>
			<div className='w-full '>
				<label className='text-lg font-Poppins font-medium text-[#4D4D4D] '>
					Choose an option
				</label>
				<Dropdown />
			</div>
			{/* <div className='w-full'>
				<label className='text-lg font-Poppins font-medium text-[#4D4D4D] '>
					Describe the issue in detail
				</label>
				<div className='relative'>
					<div className='flex'>
						<textarea
							placeholder='Describe the issue in detail'
							className='w-full h-44 bg-[#E0E0E0] border border-[#CCCCCC] rounded-lg p-4 text-lg font-Poppins font-medium text-[#4D4D4D]'
						/>
						<div className='ml-4 absolute bottom-0 '>
							{file && (
								<div className='flex items-center space-x-2'>
									<img
										src={URL.createObjectURL(file)}
										alt='Selected file'
										className='h-10 w-10 object-cover rounded-lg'
									/>
									<button
										onClick={removeFile}
										className='text-red-600 hover:text-red-800 focus:outline-none'>
										<RxCross2 />
									</button>
								</div>
							)}
							<input
								type='file'
								onChange={handleFileChange}
								className='btn btn-primary'
								placeholder='Attach'
								accept='image/*' // Specify the accepted file types
							/>
						</div>
					</div>
				</div>
			</div> */}
			<TextBoxField label='Describe the issue in detail' />
			<div className='w-full'>
				<label className='text-lg font-Poppins font-medium text-[#4D4D4D]'>
					Enter your email to receive an update
				</label>
				<input
					type='email'
					name='email'
					id='email'
					className='w-full bg-transparent border border-[#CCCCCC] rounded-lg px-4 py-3 text-lg font-Poppins font-medium text-[#808080]'
					placeholder='Enter your email'
				/>
			</div>
		</div>
	);
};

export default FabCard;
