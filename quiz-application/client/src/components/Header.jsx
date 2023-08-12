
import styles from '../styles/header.module.css';
import Breadcrumb from './Breadcrumb';

const Header = () => {

    return (
        <div className={styles.container}>
            <p>Quiz Time!</p>
            <Breadcrumb />
        </div>
    )
}

export default Header;