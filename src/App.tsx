import { useState } from "react";
import "./App.css";

function App() {
	const [reps, setReps] = useState(0);

	const handleAddReps = () => {
		setReps((curVal) => curVal + 1);
	};

	return (
		<div>
			<h1>Pull ups:</h1>
			<form onSubmit={(e) => e.preventDefault()}>
				<button onClick={() => handleAddReps()}>+ 1</button>
				<input type="number" />
				<p>
					<span>{reps}</span> reps
				</p>
			</form>
		</div>
	);
}

export default App;
