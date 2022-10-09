
import React from 'react'; 
import './index.css';

function App() {
	const [count, setCount] = React.useState(0);
	// let count = 0;

	const onClickPlus = () => {
		setCount(count + 1);
		// count++;
		// console.log(count);
	};

	const onClickMinus = () => {
		setCount(count - 1);
	};

  return (
		<>
			<div className="app">
				<div>
					<h2>Counter:</h2>
					<h1>{count}</h1>
					<button onClick={onClickMinus} className="minus">- Minus</button>
					<button onClick={onClickPlus} className="plus">Plus +</button>
				</div>
			</div>
		</>
  );
};

export default App;
