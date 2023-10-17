import { useState, useEffect } from 'react'

import Spinner from '../Spiner/Spinner'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import useMarvelService from '../../services/MarvelService'

import './ComicsList.scss'

const ComicsList = () => {
	const [charList, setCharList] = useState([])
	const [newItemLoading, setNewItemLoading] = useState(false)
	const [offset, setOffset] = useState(310)
	const [limit, setLimit] = useState(8)
	const [charEnded, setCharEnded] = useState(false)
  const [visualBtn, setVisualBtn] = useState(false)

	const { loading, error, getAllCharacters } = useMarvelService()

	useEffect(() => {
		// onReques(offset, true)
	}, [])

	const onReques = (offset, limit,  initial) => {
		initial ? setNewItemLoading(false) : setNewItemLoading(true)
		getAllCharacters(offset, limit = 8).then(onCharListLoaded)
	}

	const onCharListLoaded = (newCharList) => {
		let ended = false
		if (newCharList.length < 8) {
			ended = true
		}

		setCharList((charList) => [...charList, ...newCharList])
		setNewItemLoading((newItemLoading) => false)
		setOffset((offset) => offset + 8)
    setLimit(limit)
		setCharEnded((charEnded) => ended)
    setVisualBtn((visualBtn) => true)
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

      function randomPrise() {
        return Math.floor(Math.random() * (20 - 5 + 1)) + 5
      } 

			return (
				<li className="comics__item">
					<a href="#">
						<img
							className="comics__item-img"
							src={item.thumbnail}
							alt={item.name}
							style={imgStyle}
						/>
						<div className="comics__item-name">{item.name}</div>
						<div className="comics__item-price">{randomPrise()}$</div>
					</a>
				</li>
			)
		})
		// А эта конструкция вынесена для центровки спиннера/ошибки
		return <ul className="comics__grid">{items}</ul>
	}

	const items = renderItems(charList)

	const errorMessage = error ? <ErrorMessage /> : null
	const spinner = loading ? <Spinner /> : null

	return (
		<div className="comics__list">
			{errorMessage}
			{spinner}
			{items}
      <h3
				className='textBtn'
				style={{ display: visualBtn ? 'none' : 'block' }}
			>
				Click on the button below
			</h3>

			<button
				className="button button__main button__long"
				disabled={newItemLoading}
				style={{ display: charEnded ? 'none' : 'block' }}
				onClick={() => onReques(offset, limit)}
			>
				<div className="inner">load more</div>
			</button>
		</div>
	)
}

export default ComicsList
