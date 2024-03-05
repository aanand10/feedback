import React, { useState } from "react";
import Dropdown from "./formComponents/Dropdown";
import { RxCross2 } from "react-icons/rx";
import TextBoxField from "./formComponents/TextBoxField";
import Cookies from "js-cookie";
import cardConfig from "../data/feedbackCard.json";
import SuggestionCard from "./cards/SuggestionCard";

const FabCard = ({ selectedOption }) => {
  const [file, setFile] = useState(null);
  const isUserLogedIn = Cookies.get("isUserLogedIn");

  const card = cardConfig.find((option) => option.id === selectedOption?.id);

  console.log(card, "card");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const removeFile = () => {
    setFile(null);
  };

  switch (selectedOption.id) {
    case 2:
      return <SuggestionCard />;
      break;

    default:
      return null;
      break;
  }
};

export default FabCard;
