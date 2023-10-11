import { Component } from 'react'

import Spinner from '../Spiner/Spinner'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import MarvelService from '../../services/MarvelService'

import styles from './CharList.module.scss'

class CharList extends Component {
	state = {
		charList: [],
		loading: true,
		error: false,
	}

	marvelService = new MarvelService()

	componentDidMount() {
		this.marvelService
			.getAllCharacters()
			.then(this.onCharListLoaded)
			.catch(this.onError)
	}

	onCharListLoaded = (charList) => {
		this.setState({
			charList,
			loading: false,
		})
	}

	onError = () => {
		this.setState({
			error: true,
			loading: false,
		})
	}

	// Этот метод создан для оптимизации,
	// чтобы не помещать такую конструкцию в метод render
	renderItems(arr) {
		const items = arr.map((item) => {
			let imgStyle = { objectFit: 'cover' }
			if (
				item.thumbnail ===
				'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'
			) {
				imgStyle = { objectFit: 'unset' }
			}

			return (
				<li className={styles.card} key={item.id} onClick={() => this.props.onCharSelected(item.id)}>
					<div className={styles.card__img}>
						<img src={item.thumbnail} alt={item.name} style={imgStyle} />
					</div>
					<h3>{item.name}</h3>
				</li>
			)
		})
		// А эта конструкция вынесена для центровки спиннера/ошибки
		return <ul className={styles.cards}>{items}</ul>
	}

	render() {
		const { charList, loading, error } = this.state

		const items = this.renderItems(charList)

		const errorMessage = error ? <ErrorMessage /> : null
		const spinner = loading ? <Spinner /> : null
		const content = !(loading || error) ? items : null

		return (
			<div className="list">
				{errorMessage}
				{spinner}
				{content}
				<button className="button button__main button__long">
					<div className="inner">load more</div>
				</button>
			</div>
		)
	}
}

export default CharList
