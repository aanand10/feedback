import { IoMdText } from "react-icons/io";

import React from "react";
export function MobilePost({ rocketIcon, eyeIcon }) {
	return (
		<section className=' max-w-4xl  m-4  bg-[#F8F8F8] border  border-[#717171] rounded-lg'>
			<div className='flex items-center justify-between w-full px-4 py-4'>
				<div className=''>
					<p className='text-[#5d5d5d] text-sm'>Posted on 20 jun 2023</p>
				</div>
				<div className='flex items-center justify-center gap-2'>
					<img src={rocketIcon} className='w-6 h-6' alt='rocket icon' />
					<p className=' text-[#5d5d5d] text-sm'>Startup</p>
				</div>
			</div>
			<div className='px-4'>
				<p className=' text-lg font-Poppins font-normal text-[#0F0F0F]'>
					Lorem ipsum dolor sit amet consectetur. Orci elementum aliquet nec
					viverra tincidunt ? Amet ullamcorper velit tristique scelerisque donec
					sed viverra arcu. Amet arcu vitae sit scelerisque ultrices magna
					cursus se?
				</p>
			</div>
			<div className='flex items-center justify-between px-4 py-2'>
				<div className='flex items-center justify-center gap-2'>
					<p className='px-4 py-1 text-sm font-semibold bg-blue-100 rounded-md'>
						Design
					</p>
					<p className='px-4 py-1 text-sm font-semibold bg-blue-100 rounded-md'>
						UX
					</p>
				</div>
				<p className='px-4 py-1 text-sm font-semibold bg-yellow-200 rounded-md'>
					Easy
				</p>
			</div>
			<div className='flex items-center justify-between px-4 pb-4'>
				<div className='flex items-center gap-2 text-orange-400'>
					<IoMdText className='w-6 h-6 ' />
					<p className='text-sm font-Poppins'> 23 Answers</p>
				</div>
				<div className='flex items-center gap-2'>
					<img src={eyeIcon} className='w-6 h-6 ' alt='eye Icon' />
					<p className=' text-sm font-Poppins  text-[#2A2A2A]'>100 views</p>
				</div>
			</div>
		</section>
	);
}
