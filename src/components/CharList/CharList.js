import { useState, useEffect } from 'react'

import Spinner from '../Spiner/Spinner'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import MarvelService from '../../services/MarvelService'

import styles from './CharList.module.scss'

const CharList = (props) => {
	const [charList, setCharList] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(false)
	const [newItemLoading, setNewItemLoading] = useState(false)
	const [offset, setOffset] = useState(210)
	const [charEnded, setCharEnded] = useState(false)
	const [visualBtn, setVisualBtn] = useState(false)

	const marvelService = new MarvelService()

	// useEffect(() => {
	// 	onReques()
	// }, [])

	const onReques = (offset) => {
		onCharListLoading()
		marvelService.getAllCharacters(offset).then(onCharListLoaded).catch(onError)
	}

	const onCharListLoading = () => {
		setNewItemLoading(true)
	}

	const onCharListLoaded = (newCharList) => {
		let ended = false
		if (newCharList.length < 9) {
			ended = true
		}

		setCharList((charList) => [...charList, ...newCharList])
		setLoading((loading) => false)
		setNewItemLoading((newItemLoading) => false)
		setOffset((offset) => offset + 9)
		setCharEnded((charEnded) => ended)
		setVisualBtn((visualBtn) => true)
	}

	const onError = () => {
		setError(true)
		setLoading(false)
	}


	// Этот метод создан для оптимизации,
	// чтобы не помещать такую конструкцию в метод render
	function renderItems(arr) {
		const items = arr.map((item) => {
			let imgStyle = { objectFit: 'cover' }
			if (
				item.thumbnail ===
				'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'
			) {
				imgStyle = { objectFit: 'unset' }
			}

			return (
				<li
					className={styles.card}
					tabIndex={0}
					key={item.id}
					onClick={() => {
						props.onCharSelected(item.id)
					}}
				>
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

	const items = renderItems(charList)

	const errorMessage = error ? <ErrorMessage /> : null
	const spinner = loading ? <Spinner /> : null
	const content = !(loading || error) ? items : null

	return (
		<div className="list">
			{errorMessage}
			{spinner}
			{content}
			<h3
				className={styles.textBtn}
				style={{ display: visualBtn ? 'none' : 'block' }}
			>
				Click on the button below
			</h3>
			<button
				className="button button__main button__long"
				disabled={newItemLoading}
				style={{ display: charEnded ? 'none' : 'block' }}
				onClick={() => onReques(offset)}
			>
				<div className="inner">load more</div>
			</button>
		</div>
	)
}

export default CharList
