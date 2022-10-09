
import './App.css';
import React from 'react'; 

function App() {
	const [count, setCount] = React.useState(0);
	// let count = 0;

	const onClickPlus = () => {
		setCount(count + 1);
		// count++;
		// console.log(count);
	}

	const onClickMinus = () => {
		setCount(count - 1);
	}

  return (
		<>
			<div className='App'>
				<div>
					<h2>Counter</h2>
					<h1>{count}</h1>
					<button onClick={onClickMinus} className='Minus'>- Minus</button>
					<button onClick={onClickPlus} className='Plus'>+ Plus</button>
				</div>
			</div>
		</>
  );

}

export default App;
