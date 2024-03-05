import { UserComments } from "./components/UserComments";
import { FilterBar } from "./components/FilterBar";
import { Post } from "./components/Post";
import { BackToQuestions } from "./components/BackToQuestions";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Fab from "./components/Fab";
import { useSelector } from "react-redux";
import FabCard from "./components/FabCard";

function App() {
	const isFabOpen = useSelector((state) => state.user.isFabOpen);
	return (
		<main className='bg-black h-full relative'>
			<Navbar />
			<BackToQuestions />
			<div className='max-w-4xl mx-auto py-10 flex flex-col justify-center items-center gap-6'>
				<Post />
				<FilterBar />
				<UserComments />
			</div>
			{isFabOpen && (
				<div className='lg:hidden  fixed inset-0 bg-black bg-opacity-70 ' />
			)}
			<Fab />
			{/* <FabCard /> */}
		</main>
	);
}

export default App;
