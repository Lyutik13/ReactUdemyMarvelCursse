import styles from './CharInfo.module.scss'
import abyss from '../../resources/img/abyss.jpg'

function CharInfo() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.char}>
				<div className={styles.char__img}>
					<img src={abyss} alt="abyss" />
				</div>
				<div className={styles.about}>
					<h3>LOKI</h3>
					<div className={styles.btn}>
						<a href="#" className="button button__main">
							<div className="inner">homepage</div>
						</a>
						<a href="#" className="button button__secondary">
							<div className="inner">Wiki</div>
						</a>
					</div>
				</div>
			</div>
			<p className={styles.desc}>
				In Norse mythology, Loki is a god or jötunn (or both). Loki is the son
				of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By
				the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the
				world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or
				Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in
				the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki
				is referred to as the father of Váli in the Prose Edda.
			</p>
			<div className={styles.comics}>Comics:</div>
			<ul>
				<li className={styles.item}>
					All-Winners Squad: Band of Heroes (2011) #3
				</li>
				<li className={styles.item}>Alpha Flight (1983) #50</li>
				<li className={styles.item}>Amazing Spider-Man (1999) #503</li>
				<li className={styles.item}>Amazing Spider-Man (1999) #504</li>
				<li className={styles.item}>
					AMAZING SPIDER-MAN VOL. 7: BOOK OF EZEKIEL TPB (Trade Paperback)
				</li>
				<li className={styles.item}>
					Amazing-Spider-Man: Worldwide Vol. 8 (Trade Paperback)
				</li>
				<li className={styles.item}>
					Asgardians Of The Galaxy Vol. 2: War Of The Realms (Trade Paperback)
				</li>
				<li className={styles.item}>Vengeance (2011) #4</li>
				<li className={styles.item}>Avengers (1963) #1</li>
				<li className={styles.item}>Avengers (1996) #1</li>
			</ul>
		</div>
	)
}

export default CharInfo
