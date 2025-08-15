import { useState } from "react";
// import styles from "./RepsCounter.module.css";

export default function RepsCounter() {
	const [reps, setReps] = useState<number>(0);
	const onRepsCounter = (val: number) => {
		setReps(val);
	};

	const handlePlusRep = () => {
		setReps((curVal) => curVal + 1);
	};

	const handleMinusRep = () => {
		setReps((curVal) => curVal - 1);
	};

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
						value={reps}
						onChange={(e) => onRepsCounter(Number(e.target.value))}
					/>
				</label>
				<button onClick={handleMinusRep}>- 1</button>
			</form>
		</div>
	);
}
