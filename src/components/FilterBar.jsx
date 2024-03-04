import React from "react";
import Dropdown from "./formComponents/Dropdown";
export function FilterBar({}) {
	return (
		<div className='w-full flex justify-between items-center'>
			<h3 className=' text-2xl  font-Poppins font-bold text-[#F8F8F8] '>
				Answers (23){" "}
			</h3>

			<p className=' text-lg font-Poppins font-medium text-[#F8F8F8]  flex justify-start items-center gap-4'>
				Sorted By :
				<Dropdown />
			</p>
		</div>
	);
}
