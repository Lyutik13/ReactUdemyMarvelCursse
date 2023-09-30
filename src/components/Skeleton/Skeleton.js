import styles from './skeleton.module.scss'

const Skeleton = () => {
	return (
		<div className={styles.wrapper}>
			<p>Please select a character to see information</p>
			<div className={styles.blocks}>
				<div className={`${styles.cerk} pulse`}></div>
				<div className={`${styles.text} pulse`}></div>
			</div>
			<div className={`${styles.blok} pulse`}></div>
			<div className={`${styles.blok} pulse`}></div>
			<div className={`${styles.blok} pulse`}></div>
		</div>
	)
}

export default Skeleton
