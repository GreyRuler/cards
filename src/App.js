import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import Card from './components/Card';

function App() {
	return (
		<div className='app'>
			<Card title={'title'} content={'content'}/>
			<Card title={'title'} content={'content'}>
				<svg className="bd-placeholder-img card-img-top" width="100%"
					 height="180" xmlns="http://www.w3.org/2000/svg" role="img"
					 aria-label="Placeholder: Image cap"
					 preserveAspectRatio="xMidYMid slice" focusable="false">
					<title>Placeholder</title>
					<rect width="100%" height="100%" fill="#868e96"></rect>
					<text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text>
				</svg>
			</Card>
		</div>
	);
}

export default App;
