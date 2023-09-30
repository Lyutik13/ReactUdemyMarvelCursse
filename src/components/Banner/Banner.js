import styles from './Banner.module.scss'
import avengers from '../../resources/img/Avengers.png';
import avengersLogo from '../../resources/img/Avengers_logo.png';

const Banner = () => {
    return (
        <div className={styles.banner}>
            <img src={avengers} alt="Avengers"/>
            <div className={styles.text}>
                New comics every week!<br/>
                Stay tuned!
            </div>
            <img src={avengersLogo} alt="Avengers logo"/>
        </div>
    )
}

export default Banner;