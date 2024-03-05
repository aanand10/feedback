import React, { useState } from "react";
import { FiPlus, FiX } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { setIsFabOpen } from "../features/user/userSlice";
import FabCard from "./FabCard";
import { feedbackOptions } from "../data/staticData";

const Fab = () => {
  const isFabOpen = useSelector((state) => state.user.isFabOpen);
  const [selectedOption, setSelectedOption] = useState(null);
  const dispatch = useDispatch();

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  // const handleCardClose = () => {
  // 	setSelectedOption(null);
  // };

  return (
    <>
      <div
        className={`fixed ${
          selectedOption !== null ? "bottom-8 right-24" : "bottom-24 right-8"
        }`}
      >
        {selectedOption ? <FabCard selectedOption={selectedOption} /> : null}
        {isFabOpen || selectedOption ? (
          <div
            className={`flex ${
              selectedOption !== null ? "flex-row" : "flex-col"
            }  gap-2 w-full`}
          >
            {feedbackOptions.map((option) => (
              <div
                key={option.id}
                className="flex items-center justify-end w-full gap-2"
              >
                {selectedOption === null ? (
                  <div
                    className={`flex items-center px-3 py-1 rounded-t-lg rounded-bl-lg shadow-lg ${
                      selectedOption === option
                        ? "bg-gray-800 text-white"
                        : "bg-white text-gray-900"
                    }`}
                    onClick={() => handleOptionClick(option)}
                  >
                    <span>{option.label}</span>
                  </div>
                ) : null}
                <button
                  className={`flex items-center justify-center w-12 h-12 p-2 rounded-full shadow-lg ${
                    selectedOption === option
                      ? "bg-gray-800 text-white"
                      : "bg-gray-100 text-gray-900"
                  }`}
                  onClick={() => handleOptionClick(option)}
                >
                  <img src={option.logo} alt={option.label} srcset="" />
                </button>
              </div>
            ))}
          </div>
        ) : null}
      </div>
      <button
        className="fixed bottom-6 right-6 lg:bottom-8 lg:right-8 z-10 flex items-center justify-center w-12 h-12 bg-[#F8F8F8] text-gray-900 rounded-full shadow-lg"
        style={{
          boxShadow: "1px 1px 8px rgba(0, 0, 0, 0.5)", // Shadow for icon and text
          borderColor: isFabOpen ? "#808080" : "transparent", // Border color for ellipse
          overflow: "hidden", // Ensure overflow doesn't show when ellipse is applied
        }}
        onClick={() => {
          dispatch(setIsFabOpen(!isFabOpen));
          selectedOption ? setSelectedOption(null) : null;
        }}
      >
        {isFabOpen ? (
          <FiX className="w-8 h-8" style={{ color: "#0F0F0F" }} /> // Icon color change
        ) : (
          <img
            src="/writer.png"
            className="w-6 h-6 absolute"
            alt=""
            style={{ color: "#F8F8F8" }}
          /> // Icon color change
        )}
      </button>
    </>
  );
};

export default Fab;
