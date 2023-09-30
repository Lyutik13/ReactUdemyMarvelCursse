import styles from './Header.module.scss'

function Header() {
	return (
		<header>
			<div className={styles.wrapper}>
				<h1 className={styles.h1}>
					<span>Marvel</span> information portal
				</h1>
				<nav>
					<ul className={styles.ul}>
						<li>
							<h2>Characters</h2>
						</li>
						/
						<li>
							<h2>Comics</h2>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Header
