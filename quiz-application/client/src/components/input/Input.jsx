
import styles from '../../styles/input.module.css';

const Input = ({
    placeholder="",
    type="text",
    id,
    className,
    error,
    background="transparent",
    disabled=false,
    ...props
}) => {
    return (
        <div>
            <input
                type={type}
                id={id}
                // className={}
                placeholder={placeholder}
                disabled={disabled}
                className={styles.inputText}
                {...props}
            />
            <label>{error}</label>
        </div>
    )
}

export default Input