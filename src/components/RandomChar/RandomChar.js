import React, { Component } from 'react'

import styles from './RandomChar.module.scss'
import mjolnir from '../../resources/img/mjolnir.png'
import MarvelService from '../../services/MarvelService'

import Spinner from '../Spiner/Spinner'
import ErrorMessage from '../ErrorMessage/ErrorMessage'

class RandomChar extends Component {
	state = {
		char: {},
		loading: true,
		error: false,
	}

	marvelService = new MarvelService()

  componentDidMount() {
    this.updateChar()
    // setInterval(this.updateChar, 60000)
  }

	onCharLoaded = (char) => {
		this.setState({ char: char, loading: false })
	}

	onError = () => {
		this.setState({ loading: false, error: true })
	}

	onCharLoading = () => {
		this.setState({ loading: true})
	}

	updateChar = () => {
    this.onCharLoading()
		const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000)
		this.marvelService
			.getCharacter(id)
			.then(this.onCharLoaded)
			.catch(this.onError)
		// this.marvelService.getAllCharacters().then((res) => console.log(res))
	}

	render() {
		const { char, loading, error } = this.state
    const errorMessage = error ? <ErrorMessage/> : null
    const spiner = loading ? <Spinner/> : null
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
					<button onClick={this.updateChar} className="button button__main">
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
