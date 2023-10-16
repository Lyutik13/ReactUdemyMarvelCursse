import React, { useState, useEffect } from 'react'

import styles from './RandomChar.module.scss'
import mjolnir from '../../resources/img/mjolnir.png'
import useMarvelService from '../../services/MarvelService'

import Spinner from '../Spiner/Spinner'
import ErrorMessage from '../ErrorMessage/ErrorMessage'

const RandomChar = () => {
	const [char, setChar] = useState([])
	// const [loading, setLoading] = useState(true)
	// const [error, setError] = useState(false)

	const {loading, error, getCharacter, clearError}= useMarvelService()

	useEffect(() => {
		updateChar()
    // eslint-disable-next-line
	}, [])
  

	const onCharLoaded = (char) => {
		setChar(char)
	}

	const updateChar = () => {
    clearError()
		const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000)
		getCharacter(id).then(onCharLoaded)
		// this.marvelService.getAllCharacters().then((res) => console.log(res))
	}

	const errorMessage = error ? <ErrorMessage /> : null
	const spiner = loading ? <Spinner /> : null
	const content = !(loading || error) ? <View char={char} /> : null

	return (
		<div className={styles.wrapper}>
			{/* {loading ? <Spinner /> : <View char={char} />} */}
			{errorMessage}
			{spiner}
			{content}
			<div className={styles.question}>
				<p>
					Random character for today! Do you want to get to know him better?
				</p>
				<p>Or choose another one</p>
				<button onClick={updateChar} className="button button__main">
					<div className="inner">try it</div>
				</button>
				<img
					className={styles.question__decoration}
					src={mjolnir}
					alt="mjolnir"
				/>
			</div>
		</div>
	)
}

const View = ({ char }) => {
	const { name, description, thumbnail, homepage, wiki } = char

	return (
		<div className={styles.character}>
			<div className={styles.character__img}>
				<img src={thumbnail} alt="Random character" />
			</div>
			<div className={styles.content}>
				<h3>{name}</h3>
				<p className="descr">{description}</p>
				<div className={styles.content__btns}>
					<a href={homepage} className="button button__main">
						<div className="inner">homepage</div>
					</a>
					<a href={wiki} className="button button__secondary">
						<div className="inner">Wiki</div>
					</a>
				</div>
			</div>
		</div>
	)
}

export default RandomChar
