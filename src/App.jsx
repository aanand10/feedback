import { MobilePost } from "./components/MobilePost";
import { UserComments } from "./components/UserComments";
import { FilterBar } from "./components/FilterBar";
import { Post } from "./components/Post";
import { BackToQuestions } from "./components/BackToQuestions";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Fab from "./components/Fab";
import { useSelector } from "react-redux";
import FabCard from "./components/FabCard";
import Cookies from "js-cookie";
import { FaFilter } from "react-icons/fa6";
import { BsFilterLeft } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";

function App() {
	const [size, setSize] = useState("");
	const isFabOpen = useSelector((state) => state.user.isFabOpen);

	useEffect(() => {
		/**
		 * cookie description : added cookie for storing the login status of user
		 */
		Cookies.remove("isUserLoggedIn");
		Cookies.set("isUserLoggedIn", "false");
	});
	useEffect(() => {
		const handleResize = () => {
			setSize(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);
	console.log(size);

	if (size > 425) {
		return (
			<main className='relative h-full bg-black'>
				<Navbar />
				<BackToQuestions />
				<div className='flex flex-col items-center justify-center max-w-4xl gap-6 py-10 mx-auto'>
					<Post />
					<FilterBar />
					<UserComments />
				</div>

				<Fab />
			</main>
		);
	} else {
		return (
			<main className='h-full bg-black '>
				<Navbar />
				<div className='flex flex-col items-center justify-center w-full max-w-4xl gap-6 px-4 pt-4 mx-auto text-4xl text-white'>
					<h1>Practice interview Question</h1>
				</div>
				<div className='flex items-center justify-center w-full max-w-4xl gap-6 px-4 pt-4 mx-auto text-white'>
					<h3 className='text-xl font-normal text-Inter'>
						Embark on an Exploration: 800 Questions Await!
					</h3>
					<div className='flex justify-center gap-2 items-center bg-[#E0E0E0] px-2 rounded py-1 text-black'>
						<FaFilter />
						<p>filter</p>
					</div>
				</div>
				<div className='flex flex-col items-center justify-center w-full max-w-4xl gap-1 p-4 mx-auto text-white'>
					<div className='w-full relative bg-[#E0E0E0] flex justify-center items-center p-2'>
						<div className='flex items-center justify-center gap-3 p-2'>
							<BsFilterLeft className='w-5 h-5 text-black' />
							<p className='font-light text-black text-Montserrat'>Popular</p>
						</div>
						<IoMdArrowDropdown className='absolute w-6 h-6 text-black top-4 right-6 ' />
					</div>
					<div className='w-full relative bg-[#E0E0E0] flex justify-center items-center p-2'>
						<div className='flex items-center justify-center gap-3 p-2'>
							<p className='font-light text-black text-Montserrat'>
								Complexity
							</p>
						</div>
						<IoMdArrowDropdown className='absolute w-6 h-6 text-black top-4 right-6 ' />
					</div>
					<div className='w-full relative bg-[#E0E0E0] flex justify-center items-center p-2'>
						<div className='flex items-center justify-center gap-3 p-2'>
							<p className='font-light text-black text-Montserrat'>
								Industry Type
							</p>
						</div>
						<IoMdArrowDropdown className='absolute w-6 h-6 text-black top-4 right-6 ' />
					</div>
					<div className='w-full relative bg-[#E0E0E0] flex justify-center items-center p-2'>
						<div className='flex items-center justify-center gap-3 p-2'>
							<p className='font-light text-black text-Montserrat'>Industry</p>
						</div>
						<IoMdArrowDropdown className='absolute w-6 h-6 text-black top-4 right-6 ' />
					</div>
					<div className='w-full relative bg-[#E0E0E0] flex justify-center items-center p-2'>
						<div className='flex items-center justify-center gap-3 p-2'>
							<p className='font-light text-black '>Company Type</p>
						</div>
						<IoMdArrowDropdown className='absolute w-6 h-6 text-black top-4 right-6 ' />
					</div>
				</div>
				<div className=' mx-4 h-[1px] bg-slate-100'></div>
				<MobilePost />
				<MobilePost />
				{isFabOpen && (
					<div className='fixed inset-0 bg-black lg:hidden bg-opacity-70 ' />
				)}
				<Fab />
			</main>
		);
	}
}

export default App;
