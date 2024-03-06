import React, { useState } from "react";
import Dropdown from "./formComponents/Dropdown";
import { RxCross2 } from "react-icons/rx";
import TextBoxField from "./formComponents/TextBoxField";
import Cookies from "js-cookie";
import cardConfig from "../data/feedbackCard.json";
import SuggestionCard from "./cards/SuggestionCard";
import ReportAnIssueCard from "./cards/ReportAnIssueCard";
import FeedbackCard from "./cards/FeedbackCard";
import ContactUsCard from "./cards/ContactUsCard";

const FabCard = ({ selectedOption }) => {
	const isUserLogedIn = Cookies.get("isUserLogedIn");

	const card = cardConfig.find((option) => option.id === selectedOption?.id);

	console.log(card, "card");

	const [file, setFile] = useState(null);
	const handleFileChange = (e) => {
		setFile(e.target.files[0]);
	};

	const removeFile = () => {
		setFile(null);
	};

	switch (selectedOption.id) {
		case 1:
			return <ReportAnIssueCard />;
			break;
		case 2:
			return <FeedbackCard />;
			break;
		case 3:
			return <SuggestionCard />;
			break;
		case 4:
			return <ContactUsCard />;
			break;

		default:
			return null;
			break;
	}
};

export default FabCard;
