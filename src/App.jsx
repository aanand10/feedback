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
				{isFabOpen && (
					<div className='fixed inset-0 bg-black lg:hidden bg-opacity-70 ' />
				)}
				<Fab />
			</main>
		);
	}
}

export default App;
