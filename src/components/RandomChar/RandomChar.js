import styles from './RandomChar.module.scss'
import thor from '../../resources/img/thor.jpeg'
import mjolnir from '../../resources/img/mjolnir.png'

function RandomChar() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.character}>
				<div className={styles.character__img}>
					<img src={thor} alt="Random character" />
				</div>
				<div className={styles.content}>
					<h3>THOR</h3>
					<p className="descr">
						As the Norse God of thunder and lightning, Thor wields one of the
						greatest weapons ever made, the enchanted hammer Mjolnir. While
						others have described Thor as an over-muscled, oafish imbecile, he's
						quite smart and compassionate...
					</p>
					<div className={styles.content__btns}>
						<a href="#" className="button button__main">
							<div className="inner">homepage</div>
						</a>
						<a href="#" className="button button__secondary">
							<div className="inner">Wiki</div>
						</a>
					</div>
				</div>
			</div>

			<div className={styles.question}>
				<p>
					Random character for today! Do you want to get to know him better?
				</p>
				<p>Or choose another one</p>
				<button className="button button__main">
					<div className="inner">try it</div>
				</button>
				<img className={styles.question__decoration} src={mjolnir} alt="mjolnir" />
			</div>
		</div>
	)
}

export default RandomChar
