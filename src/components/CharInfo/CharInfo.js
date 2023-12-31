import { useEffect, useState } from 'react'

import Spinner from '../Spiner/Spinner'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import useMarvelService from '../../services/MarvelService'
import Skeleton from '../Skeleton/Skeleton'

import styles from './CharInfo.module.scss'

const CharInfo = (props) => {
	const [char, setChar] = useState(null)
	const {loading, error, getCharacter, clearError} = useMarvelService()

	useEffect(() => {
		updateChar()
    // eslint-disable-next-line
	}, [props.charId])

	const updateChar = () => {
		const { charId } = props
		if (!charId) {
			return
		}

    clearError()
		getCharacter(charId).then(onCharLoaded)
	}

	const onCharLoaded = (char) => {
    setChar(char)
	}

	const skeleton = char || loading || error ? null : <Skeleton />
	const errorMessage = error ? <ErrorMessage /> : null
	const spiner = loading ? <Spinner /> : null
	const content = !(loading || error || !char) ? <View char={char} /> : null

	return (
		// <div className={styles.wrapper}>
		<>
			{skeleton}
			{errorMessage}
			{spiner}
			{content}
		</>
	)
}

const View = ({ char }) => {
	const { name, description, thumbnail, homepage, wiki, comics } = char
	return (
		<div className={styles.wrapper}>
			<div className={styles.char}>
				<div className={styles.char__img}>
					<img src={thumbnail} alt={name} />
				</div>
				<div className={styles.about}>
					<h3>{name}</h3>
					<div className={styles.btn}>
						<a href={homepage} className="button button__main">
							<div className="inner">homepage</div>
						</a>
						<a href={wiki} className="button button__secondary">
							<div className="inner">Wiki</div>
						</a>
					</div>
				</div>
			</div>
			<p className={styles.desc}>{description}</p>
			<div className={styles.comics}>Comics:</div>
			<ul>
				{comics.length > 0 ? null : 'No comics'}
				{comics.map((item, i) => {
					// eslint-disable-next-line
					if (i > 19) return
					return (
						<li key={i} className={styles.item}>
							{item.name}
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default CharInfo
