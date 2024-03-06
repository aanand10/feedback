import React, { useState } from "react";
import Dropdown from "../formComponents/Dropdown";
import TextBoxField from "../formComponents/TextBoxField";
import Cookies from "js-cookie";

const FeedbackCard = () => {
  // const [files, setFiles] = useState([]);
  const isUserLoggedIn = Cookies.get("isUserLoggedIn");
  const options = [
    "Concept cards",
    "Interview Questions",
    "Practice Questions",
    "Quizzes",
  ];
  const [selectedOption, setSelectedOption] = useState("Interview Questions");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  console.log(message, selectedOption, email, "isUserLoggedIn");
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);

  function OnSubmit(e) {
    e.preventDefault();

    console.log({
      selectedOption: selectedOption,
      message: message,
      email: email,
    });
    setEmail("");
    setIsSubmitEnabled(false);
    setMessage("");
    setSelectedOption("");
    // setFiles(null);
  }

  return (
    <div className="  !w-full  flex flex-col justify-center items-center bg-[#F8F8F8] px-4 pt-6 rounded-lg shadow-xl shadow-[#00000029] gap-6 ">
      <div className="flex justify-center w-full items-center border-b-2 border-[#CCCCCC]">
        <h3 className="text-xl font-Poppins px-4 pb-6 text-center font-semibold text-[#4D4D4D] ">
          Let us know your{" "}
          <span className="font-bold text-black">Feedback</span> about us!
        </h3>
      </div>
      <div className="w-full ">
        <label className="text-lg font-Poppins font-medium text-[#4D4D4D] ">
          Choose an option
        </label>
        <Dropdown
          options={options}
          setSelectedOption={setSelectedOption}
          selectedOption={selectedOption}
        />
      </div>

      <TextBoxField
        label={`Describe the issue in detail 
					*
				`}
        setIsSubmitEnabled={setIsSubmitEnabled}
        setMessage={setMessage}
        message={message}
      />
      {isUserLoggedIn === "false" ? (
        <div className="w-full">
          <label className="text-lg font-Poppins font-medium text-[#4D4D4D]">
            Enter your email to receive an update
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="bg-transparent w-full px-4 py-2 text-[#4D4D4D] border flex justify-between font-medium text-lg border-[#CCCCCC] rounded-lg  items-center"
            placeholder="Enter your email"
          />
        </div>
      ) : null}
      <div className="flex justify-end w-full ">
        <button
          className={`text-lg font-Poppins font-medium text-white bg-[#0F0F0F] px-5 py-2  mb-6 rounded ${
            !isSubmitEnabled && "cursor-not-allowed opacity-50"
          }`}
          disabled={!isSubmitEnabled}
          onClick={OnSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default FeedbackCard;
