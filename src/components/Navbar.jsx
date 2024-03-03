import React from "react";

const Navbar = () => {
	return (
		<nav className='py-4 px-5 shadow-md shadow-[#ffffff52]'>
			<div className='flex justify-between items-center'>
				<div className='text-white font-semibold uppercase leading-4 text-xl lg:text-2xl'>
					The{" "}
					<span className='text-black font-Montserrat p-1 bg-white'>
						Product
					</span>{" "}
					Platform
				</div>
				<div className='flex items-center space-x-4'>
					<button className='hidden  text-[#fefefe7f] font-Inter lg:flex justify-center gap-2 text-2xl items-center'>
						Learn{" "}
						<svg
							width='21'
							height='13'
							viewBox='0 0 21 13'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M2.7395 2L10.4034 10L18.3698 2'
								stroke='#FEFEFE'
								strokeOpacity='0.5'
								strokeWidth='4'
								strokeLinecap='round'
							/>
						</svg>
					</button>

					<button className='hidden  text-[#fefefe7f] font-Inter lg:flex justify-center gap-2 px-5 py-4 text-2xl items-center '>
						Practice{" "}
						<svg
							width='21'
							height='13'
							viewBox='0 0 21 13'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M2.7395 2L10.4034 10L18.3698 2'
								stroke='#FEFEFE'
								strokeOpacity='0.5'
								strokeWidth='4'
								strokeLinecap='round'
							/>
						</svg>
					</button>

					<div className='relative'>
						<img src='./image.png' className='w-12 rounded-full' alt='' />
						<div className='absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg hidden lg:block'>
							{/* <!-- User profile content --> */}
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
