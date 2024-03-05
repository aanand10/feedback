import React from "react";
export function SubmitMassage({ text }) {
	return (
		<div className='fixed lg:bottom-24 lg:right-8 max-w-[28rem]  lg:w-[28rem] flex flex-col justify-center items-center bg-[#F8F8F8]  rounded-t-lg rounded-bl-lg shadow-xl shadow-[#00000029]'>
			<p className='w-full px-2 pt-2 pb-6 text-lg font-Poppins text-center font-semibold text-black'>
				{text}
			</p>
		</div>
	);
}
