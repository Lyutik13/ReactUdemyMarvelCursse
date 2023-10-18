// import { BrowserRouter as Router, Routes } from 'react-router-dom'

import { MainPage, ComicsPage } from '../pages'

import Header from '../Header/Header'

// import SingleComic from '../singleComic/SingleComic'

const App = () => {
	return (
		<div className="app">
			<Header />
			<main>
				<MainPage />
				<ComicsPage />
			</main>
		</div>
	)
}

export default App
