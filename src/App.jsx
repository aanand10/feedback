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
  const isFabOpen = useSelector((state) => state.user.isFabOpen);

  useEffect(() => {
    /**
     * cookie description : added cookie for storing the login status of user
     */
    Cookies.remove("isUserLogedIn");
    Cookies.set("isUserLogedIn", "false");
  });
  const [size, setSize] = useState("");
  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (size > 400) {
    return (
      <main className="bg-black h-full relative">
        <Navbar />
        <BackToQuestions />
        <div className="max-w-4xl mx-auto py-10 flex flex-col justify-center items-center gap-6">
          <Post />
          <FilterBar />
          <UserComments />
        </div>
        {isFabOpen && (
          <div className="lg:hidden  fixed inset-0 bg-black bg-opacity-70 " />
        )}
        <Fab />
        {/* <FabCard /> */}
      </main>
    );
  } else {
    return <h1 className="text-red-500">hi</h1>;
  }
}

export default App;
