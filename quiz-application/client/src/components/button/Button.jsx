


const Button = ({
    label="",
    className="",
    disabled=false,
    id,
    onClick = () => {
        console.log('Please provide the onClick property')
    }
}) => {
    return (
        <button
            onClick={onClick}
            id={id}
            disabled={disabled}
        >
            {label}
        </button>
    )
}

export default Button;