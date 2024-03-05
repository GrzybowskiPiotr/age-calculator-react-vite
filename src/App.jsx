import { Button } from "./Components/Button/button";
import { Input } from "./Components/Input/input";
import { Paragraph } from "./Components/Paragraph/paragraph";
import "./App.css";
import { useState } from "react";
import { ageCalc } from "./utilis/ageCalc";
import { objValAnimation } from "./utilis/valAnimation";
import { dayInputCheck } from "./utilis/dayInputCheck";
import { monthInputCheck } from "./utilis/monthInputCheck";
import { yearInputCheck } from "./utilis/yearInputCheck";
import BUTTON_ICON from "./assets/images/icon-arrow.svg";
const errorObj = {
	state: false,
	msg: "",
	empty: false,
	valid: true,
};

export function App() {
	const [calcDate, setCalcDate] = useState({
		years: "--",
		months: "--",
		days: "--",
	});
	const [inputDate, setInputDate] = useState({ day: 0, month: 0, year: 0 });
	const [error, setError] = useState({
		errorDay: errorObj,
		errorMonth: errorObj,
		errorYear: errorObj,
	});

	function onInputChange(e) {
		let value = e.target.value;
		let field = e.target.id;
		switch (field) {
			case "Month": {
				setInputDate({ ...inputDate, month: Number(value) });
				break;
			}
			case "Day": {
				setInputDate({ ...inputDate, day: Number(value) });

				break;
			}
			case "Year": {
				setInputDate({ ...inputDate, year: Number(value) });
				break;
			}
		}
	}

	function inputCheck({ day, month, year }) {
		const d = dayInputCheck(setError, day, errorObj);
		const m = monthInputCheck(setError, month, errorObj);
		const y = yearInputCheck(setError, year, errorObj);

		if (d & m & y) {
			const br1 = new Date(`${year}/${month}/${day}`);
			const dayTest = inputDate.day == br1.getDate();
			if (!dayTest) {
				setError((prev) => {
					return {
						...prev,
						errorDay: { ...errorObj, state: true, msg: "Must by a valid date" },
						errorMonth: { ...errorObj, state: true, msg: "" },
						errorYear: { ...errorObj, state: true, msg: "" },
					};
				});
			} else {
				let calcDays = ageCalc({ day, month, year }).days;
				let calcMonths = ageCalc({ day, month, year }).months;
				let calcYears = ageCalc({ day, month, year }).years;

				objValAnimation(calcDays, setCalcDate, "days");
				objValAnimation(calcMonths, setCalcDate, "months");
				objValAnimation(calcYears, setCalcDate, "years");
			}
		}
	}
	function onButtonClickHnadler() {
		inputCheck(inputDate);
	}

	return (
		<div className="appContainer">
			<header className="inputsContainer">
				<Input
					label="Day"
					onChange={onInputChange}
					error={error.errorDay.state}
					errorMsg={error.errorDay.msg}
					placeholder="DD"
				/>
				<Input
					label="Month"
					onChange={onInputChange}
					error={error.errorMonth.state}
					errorMsg={error.errorMonth.msg}
					placeholder="MM"
				/>
				<Input
					label="Year"
					onChange={onInputChange}
					error={error.errorYear.state}
					errorMsg={error.errorYear.msg}
					placeholder="YYYY"
				/>
			</header>
			<div className="buttonContainer" onClick={onButtonClickHnadler}>
				<hr className="hrline" />
				<Button>
					<img
						src={BUTTON_ICON}
						alt="arrow iscon"
						aria-hidden="true"
						className="btn-arrow"
					/>
				</Button>
			</div>
			<Paragraph date={calcDate.years} desc={"years"}></Paragraph>
			<Paragraph date={calcDate.months} desc={"months"}></Paragraph>
			<Paragraph date={calcDate.days} desc={"days"}></Paragraph>
		</div>
	);
}
