import './App.css';

import Hero from './assets/hero.png'
import Form from './components/form/Form';

function App() {
	return (
		<div className='app-container'>
			<div className='right-abs-back'></div>
			<div className='left-sec'>
				<img src={Hero} alt='Hero' />
			</div>
			<div className='right-sec'>
				<Form />
			</div>
		</div>
  	);
}

export default App;
