import styles from './CharList.module.scss'
import abyss from '../../resources/img/abyss.jpg'

function CharList() {
	return (
		<div className="list">
			<ul className={styles.cards}>
				<li className={styles.card}>
					<div className={styles.card__img}>
						<img src={abyss} alt="abyss" />
					</div>
					<h3>ABYSS</h3>
				</li>
				<li className={styles.card}>
					<div className={styles.card__img}>
						<img src={abyss} alt="abyss" />
					</div>
					<h3>ABYSS</h3>
				</li>
				<li className={styles.card}>
					<div className={styles.card__img}>
						<img src={abyss} alt="abyss" />
					</div>
					<h3>ABYSS</h3>
				</li>
				<li className={styles.card}>
					<div className={styles.card__img}>
						<img src={abyss} alt="abyss" />
					</div>
					<h3>ABYSS</h3>
				</li>
				<li className={styles.card}>
					<div className={styles.card__img}>
						<img src={abyss} alt="abyss" />
					</div>
					<h3>ABYSS</h3>
				</li>
				<li className={styles.card}>
					<div className={styles.card__img}>
						<img src={abyss} alt="abyss" />
					</div>
					<h3>ABYSS</h3>
				</li>
				<li className={styles.card}>
					<div className={styles.card__img}>
						<img src={abyss} alt="abyss" />
					</div>
					<h3>ABYSS</h3>
				</li>
				<li className={styles.card}>
					<div className={styles.card__img}>
						<img src={abyss} alt="abyss" />
					</div>
					<h3>ABYSS</h3>
				</li>
				<li className={styles.card}>
					<div className={styles.card__img}>
						<img src={abyss} alt="abyss" />
					</div>
					<h3>ABYSS</h3>
				</li>
			</ul>
			<button className="button button__main button__long">
				<div className="inner">load more</div>
			</button>
		</div>
	)
}

export default CharList
