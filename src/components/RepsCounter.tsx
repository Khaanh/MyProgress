import { useEffect, useRef, useState } from "react";
// import styles from "./RepsCounter.module.css";

export default function RepsCounter() {
	const [reps, setReps] = useState<number>(0);
	const inputEl = useRef<HTMLInputElement>(null);
	const onRepsCounter = (val: number) => {
		setReps(val);
	};

	const handlePlusRep = () => {
		setReps((curVal) => curVal + 1);
	};

	const handleMinusRep = () => {
		setReps((curVal) => curVal - 1);
	};

	useEffect(() => {
		if (inputEl.current) {
			inputEl.current.focus();
		}
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
						ref={inputEl}
						value={reps}
						onChange={(e) => onRepsCounter(Number(e.target.value))}
					/>
				</label>
				<button onClick={handleMinusRep}>- 1</button>
			</form>
		</div>
	);
}
