import React, { useState } from "react";
import Dropdown from "../formComponents/Dropdown";
import TextBoxField from "../formComponents/TextBoxField";
import Cookies from "js-cookie";

const SuggestionCard = () => {
  const isUserLogedIn = Cookies.get("isUserLogedIn");
  const options = ["a", "b", "c"];
  const [selectedOption, setSelectedOption] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  console.log(message, selectedOption, email, "isUserLogedIn");
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);

  function OnSubmit() {
    console.log({
      selectedOption: selectedOption,
      message: message,
      email: email,
    });
    setEmail("");
    setIsSubmitEnabled(false);
    setMessage("");
    setSelectedOption("");
  }

  return (
    <div className="fixed lg:bottom-24 lg:right-8 max-w-[25rem] w-full lg:w-[25rem] flex flex-col justify-center items-center bg-[#F8F8F8] px-4 pt-6 rounded-lg shadow-xl shadow-[#00000029] gap-6 ">
      <div className="flex justify-center w-full items-center border-b-2 border-[#CCCCCC]">
        <h3 className="text-xl font-Poppins px-4 pb-6 text-center font-semibold text-[#4D4D4D] ">
          Share your <span className="font-bold text-black">Suggestions</span>{" "}
          with us for a chance to earn rewards!
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
        label="Describe the issue in detail"
        setIsSubmitEnabled={setIsSubmitEnabled}
        setMessage={setMessage}
        message={message}
      />
      {isUserLogedIn}
      {isUserLogedIn === false ? (
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
            className="w-full bg-transparent border border-[#CCCCCC] rounded-lg px-4 py-3 text-lg font-Poppins font-medium text-[#808080]"
            placeholder="Enter your email"
          />
        </div>
      ) : null}
      <div className=" mt-5 flex justify-end">
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

export default SuggestionCard;
