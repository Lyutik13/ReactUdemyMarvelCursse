import { NavLink, Link } from 'react-router-dom'

import styles from './Header.module.scss'

function Header() {
	return (
		<header>
			<div className={styles.wrapper}>
				<Link to={'/'}>
					<h1 className={styles.h1}>
						<span>Marvel</span> information portal
					</h1>
				</Link>
				<nav>
					<ul className={styles.ul}>
						<NavLink
							to={'/'}
							style={({ isActive }) => ({ color: isActive ? '#9F0013' : '' })}
						>
							<li>
								<h2>Characters</h2>
							</li>
						</NavLink>
						/
						<NavLink
							to={'comics'}
							style={({ isActive }) => ({ color: isActive ? '#9F0013' : '' })}
						>
							<li>
								<h2>Comics</h2>
							</li>
						</NavLink>
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Header
