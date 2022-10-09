
import './App.css';


function App() {

	let count = 0;

	const onClickPlus = () => {
		count++;
		console.log(count);
	}

  return (
		<>
			<div className='App'>
				<div>
					<h2>Counter</h2>
					<h1>{count}</h1>
					<button className='Minus'>- Minus</button>
					<button onClick={onClickPlus} className='Plus'>+ Plus</button>
				</div>
			</div>
		</>
  );

}

export default App;
