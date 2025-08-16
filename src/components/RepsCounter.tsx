import { useEffect, useRef, useState } from "react";
// import styles from "./RepsCounter.module.css";

export default function RepsCounter() {
	const [reps, setReps] = useState<number>(0);
	const inputEl = useRef<HTMLInputElement>(null);

	const onRepsCounter = (val: number) => {
		// setReps(val ? (curVal) => curVal + val : val);
		setReps(val);
	};

	const handleSave = () => {};

	const handlePlusRep = () => {
		setReps((curVal) => curVal + 1);
	};

	const handleMinusRep = () => {
		if (!reps) return;
		setReps((curVal) => curVal - 1);
	};

	const inputFocus = () => {
		if (inputEl.current) {
			inputEl.current.focus();
		}
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
						// value={reps}
						onChange={(e) => onRepsCounter(Number(e.target.value))}
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
