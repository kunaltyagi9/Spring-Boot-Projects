
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material"

const Dropdown = ({
    id,
    value,
    handleChange,
    name,
    label,
    options,
    ...props
}) => {
    return (
        <FormControl>
            <InputLabel id={id}>{label}</InputLabel>
            <Select
                value={value}
                onChange={handleChange}
                name={name}
                labelId={id}
                id={id}
                {...props}
            >
                {
                    options.map(option => (
                        <MenuItem value={option}>{option}</MenuItem>
                    ))
                }
            </Select>
        </FormControl>
    )
}

export default Dropdown