import { useState } from 'react'

import RandomChar from '../RandomChar/RandomChar'
import CharList from '../CharList/CharList'
import CharInfo from '../CharInfo/CharInfo'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'

import decoration from '../../resources/img/vision.png'
import styles from '../app/App.module.scss'
import CharSearchForm from '../charSearchForm/CharSearchForm'

const MainPage = () => {
	const [selectedChar, setSelectedChar] = useState(null)

	const onCharSelected = (id) => {
		setSelectedChar(id)
	}

	return (
		<>
			<RandomChar />
			<div className={styles.content}>
				<ErrorBoundary>
					<CharList onCharSelected={onCharSelected} />
				</ErrorBoundary>
				<div>
					<ErrorBoundary>
						<CharInfo charId={selectedChar} />
					</ErrorBoundary>
					<ErrorBoundary>
						<CharSearchForm />
					</ErrorBoundary>
				</div>
			</div>
			<img className="bg-decoration" src={decoration} alt="vision" />
		</>
	)
}

export default MainPage
