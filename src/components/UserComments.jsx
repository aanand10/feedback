import React from "react";
import { like } from "../assets/Icons/icons";
export function UserComments({}) {
	return (
		<section className=' max-w-4xl mx-auto   bg-[#DEE7FF] border  border-[#717171] rounded-lg'>
			<div className=' pt-5 px-12 flex justify-start items-center gap-4'>
				<img src='/image.png' className=' w-14 h-14' alt='' />
				<div className='flex flex-col justify-center items-center py-2 gap-2'>
					<p className='text-xl font-Poppins font-bold text-[#0F0F0F]'>
						Neha Bhat <span className=' text-xl font-medium '>(You)</span>
					</p>
					<p className='text-lg font-Poppins font-normal text-[#0F0F0F]'>
						27 Jan, 2023
					</p>
				</div>
			</div>
			<div className='px-12 py-3 gap-2'>
				<p className='text-lg  font-Poppins font-normal text-[#0F0F0F]'>
					Lorem ipsum dolor sit amet consectetur. Elit et ut at vestibulum enim
					ornare feugi vitae. Eget proin aliquam blandit eget vitae erat
					fermentum lacus. Dignissim done mi vel fermentum. Id ultrices risus
					sit pel sit elit morbi. Mi sed mauris aenean odio egestas ullamcorper.
					Dignissim in vel fusce id. Sit blandit diam ridiculus Lorem elit.
					Dolor, perferendis.
					<span className='text-[#0f0f0f71]'>
						ipsum interdum ut velit quam. Bibendum amet mi....
					</span>{" "}
					<span className='font-bold'>Show more</span>
				</p>
			</div>
			<div className='px-10 w-full pb-5 flex justify-center items-center '>
				<div className=' w-1/4 flex  justify-center items-center gap-2'>
					<img src={like} alt='likes icon' />
					<p className='text-xl font-Poppins font-medium text-[#0F0F0F]'>
						Like
					</p>
				</div>

				<div className='w-3/4 flex justify-center items-center gap-3'>
					<svg
						width='27'
						height='26'
						viewBox='0 0 27 26'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M9.70683 25.5C9.37154 25.5 9.04997 25.3683 8.81288 25.1339C8.57579 24.8995 8.4426 24.5815 8.4426 24.25V20.5H3.38565C2.71506 20.5 2.07193 20.2366 1.59775 19.7678C1.12357 19.2989 0.857178 18.663 0.857178 18V3C0.857178 1.6125 1.99499 0.5 3.38565 0.5H23.6134C24.284 0.5 24.9271 0.763392 25.4013 1.23223C25.8755 1.70107 26.1419 2.33696 26.1419 3V18C26.1419 18.663 25.8755 19.2989 25.4013 19.7678C24.9271 20.2366 24.284 20.5 23.6134 20.5H15.9016L11.2239 25.1375C10.9711 25.375 10.655 25.5 10.3389 25.5H9.70683ZM10.9711 18V21.85L14.8649 18H23.6134V3H3.38565V18H10.9711ZM19.8207 11.75H17.2922V9.25H19.8207V11.75ZM14.7638 11.75H12.2353V9.25H14.7638V11.75ZM9.70683 11.75H7.17836V9.25H9.70683V11.75Z'
							fill='#0F0F0F'
						/>
					</svg>
					<input
						type='text'
						placeholder='Add a comment'
						className='border bg-transparent border-black w-3/4 rounded-md py-2 px-4'
					/>
					<button className=' border border-black bg-[#f5f5f57e] rounded-md py-2 px-4 text-Poppins font-bold text-[#00000081]'>
						Post
					</button>
				</div>
			</div>
		</section>
	);
}
