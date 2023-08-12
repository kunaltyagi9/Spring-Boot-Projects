
import { breadcrumbItems as items } from '../constants/constant';
import styles from '../styles/breadcrumb.module.css';

const Breadcrumb = () => {

    const currentUrl = window.location.pathname;

    return (
        <ul className={styles.breadcrumb}>
            {
                items.map(item => (
                    <li 
                        className={styles.breadcrumbItem}
                        style={currentUrl.split('/').pop() === item.label.toLowerCase() ? {
                            fontSize: 18,
                            fontWeight: 600
                        }: null}
                    >
                        <span>{item.label}</span>
                    </li>
                ))
            }
        </ul>
    )
}

export default Breadcrumb;