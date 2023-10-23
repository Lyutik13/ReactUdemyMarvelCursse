import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from '../Header/Header'
import Spinner from '../Spiner/Spinner'

const Page404 = lazy(() => import('../pages/Page404'))
const MainPage = lazy(() => import('../pages/MainPage'))
const ComicsPage = lazy(() => import('../pages/ComicsPage'))
const SingleComicPage = lazy(() => import('../pages/SingleComicPage'))

const App = () => {
	return (
		<Router>
			<div className="app">
				<Header />
				<main>
					<Suspense fallback={<Spinner/>}>
						<Routes>
							<Route exact path="/" element={<MainPage />} />
							<Route path="/comics" element={<ComicsPage />} />
							<Route path="comics/:comicId" element={<SingleComicPage />} />
							<Route path="*" element={<Page404 />} />
						</Routes>
					</Suspense>
				</main>
			</div>
		</Router>
	)
}

export default App

// 15:11
