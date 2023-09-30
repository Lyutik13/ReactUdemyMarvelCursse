import Header from '../Header/Header'
import RandomChar from '../RandomChar/RandomChar'
import CharList from '../CharList/CharList'
import CharInfo from '../CharInfo/CharInfo'

// import Skeleton from '../Skeleton/Skeleton'
// import Banner from '../Banner/Banner'
// import ComicsList from '../ComicsList/ComicsList'
// import SingleComic from '../singleComic/SingleComic'

import decoration from '../../resources/img/vision.png'
import styles from './App.module.scss'

const App = () => {
	return (
		<div className="app">
			<Header />
			<main>
				<RandomChar />
				<div className={styles.content}>
					<CharList />
					<CharInfo />
				</div>
				<img className="bg-decoration" src={decoration} alt="vision" />
			</main>
		</div>
	)
}

export default App
