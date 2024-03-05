import React, { useState, useRef } from "react";
import { MdOutlineAttachFile } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const TextBoxField = ({ label }) => {
	const [text, setText] = useState("");
	const [files, setFiles] = useState([]);
	const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);
	const fileInputRef = useRef(null);

	return (
		<div className='w-full text-[#4D4D4D]  font-medium text-lg  rounded-lg '>
			<label
				className='block mb-2 text-lg font-Poppins font-medium text-[#4D4D4D]'
				htmlFor='textArea'>
				{label}
			</label>
			<div className='relative'>
				<textarea
					id='textArea'
					className='block w-full px-4 text-lg py-2 border bg-[#E0E0E0] border-[#CCCCCC] rounded-lg resize-none focus:outline-none focus:border-blue-500'
					rows={5}
					placeholder='Write here...'
					value={text}
					onChange={(e) => {
						const newText = e.target.value;
						setText(newText);
						setIsSubmitEnabled(newText.length > 0);
					}}
					maxLength={1000}
				/>
				<div className='absolute left-2 bottom-2'>
					<button
						className={`py-1 px-2 bg-[#C7C7C7] text-[19px] flex justify-between items-center  rounded-md ${
							files.length === 2 && "cursor-not-allowed"
						}`}
						onClick={() => fileInputRef.current.click()}
						disabled={files.length === 2}>
						<MdOutlineAttachFile />
						Attach
					</button>
					<input
						ref={fileInputRef}
						type='file'
						className='hidden'
						accept='image/*'
						onChange={(e) => {
							const newFiles = Array.from(e.target.files);
							if (files.length + newFiles.length <= 2) {
								setFiles([...files, ...newFiles]);
							}
						}}
						multiple
					/>
				</div>
				<div className='absolute right-2 bottom-2 flex  justify-center items-center'>
					{files.map((file, index) => (
						<div key={index} className='relative '>
							<img
								src={URL.createObjectURL(file)}
								alt={`Attached file ${index}`}
								className='w-12 h-12 mr-2 object-cover rounded-md'
							/>
							<button
								className='bg-[#00000062] rounded-full  font-bold absolute right-0 top-[-.5rem] text-white'
								onClick={(index) => {
									const newFiles = [...files];
									newFiles.splice(index, 1);
									setFiles(newFiles);
								}}>
								<RxCross2 />
							</button>
						</div>
					))}
				</div>
			</div>
			<div className=' mt-5 flex justify-end'>
				<button
					className={`text-lg font-Poppins font-medium text-white bg-[#0F0F0F] px-5 py-2  mb-6 rounded ${
						!isSubmitEnabled && "cursor-not-allowed opacity-50"
					}`}
					disabled={!isSubmitEnabled}>
					Submit
				</button>
			</div>
		</div>
	);
};

export default TextBoxField;
