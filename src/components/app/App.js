import { useState } from 'react'
import { BrowserRouter as Router, Routes} from 'react-router-dom'

import Header from '../Header/Header'
import RandomChar from '../RandomChar/RandomChar'
import CharList from '../CharList/CharList'
import CharInfo from '../CharInfo/CharInfo'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'

import Banner from '../Banner/Banner'
import ComicsList from '../ComicsList/ComicsList'
// import SingleComic from '../singleComic/SingleComic'

import decoration from '../../resources/img/vision.png'
import styles from './App.module.scss'

const App = () => {
	const [selectedChar, setSelectedChar] = useState(null)

	const onCharSelected = (id) => {
		setSelectedChar(id)
	}

	return (
		<div className="app">
			<Header />
			<main>

      <Banner/>
      <ComicsList/>

				<RandomChar />
				<div className={styles.content}>
					<ErrorBoundary>
						<CharList onCharSelected={onCharSelected} />
					</ErrorBoundary>
					<ErrorBoundary>
						<CharInfo charId={selectedChar} />
					</ErrorBoundary>
				</div>
				<img className="bg-decoration" src={decoration} alt="vision" />
			</main>
		</div>
	)
}

export default App
