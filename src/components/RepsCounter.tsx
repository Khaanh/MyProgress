import { useEffect, useRef, useState } from "react";
// import styles from "./RepsCounter.module.css";

export default function RepsCounter() {
	const [reps, setReps] = useState<number | string>("");
	const [inputVal, setInputVal] = useState<number | string>(0);
	let totalReps: number = 0;
	const inputEl = useRef<HTMLInputElement>(null);

	const onRepsCounter = (val: number) => {
		setReps(val);
	};

	const handleSave = () => {
		console.log(inputEl.current?.value);
		totalReps = Number(inputEl.current?.value);
		setReps(totalReps);
		console.log("totalReps:", totalReps);
		// setReps(" ");
		// inputEl.current?.value = "";
	};

	const handlePlusRep = () => {
		setReps((curVal) => curVal + 1);
	};

	const handleMinusRep = () => {
		if (!reps) return;
		setReps((curVal) => curVal - 1);
	};

	const inputFocus = () => {
		inputEl.current?.focus();
	};

	const inputBlur = (el) => {
		inputEl.current?.blur();
		console.log(el);
	};

	useEffect(() => {
		inputFocus();
	}, []);

	return (
		<div>
			<form onSubmit={(e) => e.preventDefault()}>
				<h1>
					<p>Pull ups:</p>
					<span>reps: {reps}</span>
				</h1>

				<button onClick={handlePlusRep}>+ 1</button>
				<label>
					<input
						name="repsCounter"
						type="number"
						ref={inputEl}
						placeholder="0"
						value={reps}
						inputMode="numeric"
						pattern="\d*"
						onChange={(e) => onRepsCounter(Number(e.target.value))}
						// onBlur={(e) => inputBlur(Number(e.target.value))}
						min={0}
					/>
				</label>
				<button disabled={reps ? false : true} onClick={handleMinusRep}>
					- 1
				</button>

				<button onClick={handleSave} type="submit">
					Save
				</button>
			</form>
		</div>
	);
}
