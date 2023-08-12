
import styles from '../styles/background.module.css';
import Header from './Header';

const BackgroundCanvas = ({ children }) => {

    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.cover}>
                {children}
            </div>  
        </div>
    )
}

export default BackgroundCanvas