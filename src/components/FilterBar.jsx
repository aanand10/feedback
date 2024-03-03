import React from "react";
export function FilterBar({}) {
	return (
		<div className='w-full flex justify-between items-center'>
			<h3 className=' text-2xl  font-Poppins font-bold text-[#F8F8F8] '>
				Answers (23){" "}
			</h3>

			<p className=' text-lg font-Poppins font-medium text-[#F8F8F8]  flex justify-start items-center gap-4'>
				Sorted By :
				<div class='relative'>
					<button class='bg-[#F8F8F8] px-4 py-2 rounded inline-flex items-center'>
						Popular
						<svg
							width='21'
							height='9'
							viewBox='0 0 21 9'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M0.919067 0.231445L10.9596 8.76876L21 0.231445H0.919067Z'
								fill='#2A2A2A'
							/>
						</svg>
					</button>
					<div class='absolute z-10 bg-white mt-2 py-2 w-48 rounded-md shadow-lg hidden'>
						<a href='#' class='block px-4 py-2 text-gray-800 hover:bg-gray-300'>
							Option 1
						</a>
					</div>
				</div>
			</p>
		</div>
	);
}
