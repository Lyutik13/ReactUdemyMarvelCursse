import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from '../Header/Header'
import { MainPage, ComicsPage } from '../pages'

// import SingleComic from '../singleComic/SingleComic'

const App = () => {
	return (
		<Router>
			<div className="app">
				<Header />
				<main>
					<Routes>
						<Route path="/" element={<MainPage />} />
						<Route path="comics" element={<ComicsPage />} />
					</Routes>
				</main>
			</div>
		</Router>
	)
}

export default App
