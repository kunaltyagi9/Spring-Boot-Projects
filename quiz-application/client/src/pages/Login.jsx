import { useState, useContext } from "react";
import Input from "../components/input/Input";
import { DataContext } from "../context/DataProvider";
import { MESSAGES, loginDefault } from "../constants/constant";
import Button from "../components/button/Button";
import { useNavigate } from "react-router-dom";
import { routePath } from "../constants/route";
import { loginValidation } from "../utils/common-utils";
import { fetchUserData, saveUserData } from "../services/api";

const Login = ({ isUserAuthenticated }) => {
    const [error, setError] = useState(loginDefault);
    const [disabledInput, setDisabledInput] = useState(false);
    const [disabledBtn, setDisabledBtn] = useState(false);

    const { loginDetails, setLoginDetails } = useContext(DataContext);

    const navigate = useNavigate();

    const onValueChange = (e) => {
        setError(loginDefault);

        if (e.target.name === 'phone') {
            setDisabledInput(false);
        }

        setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
    }

    const fetchUser = async (e) => {
        const response = await fetchUserData(loginDetails);

        if (response?.code === 2000) {
            setError(loginDefault);

            setLoginDetails({
                ...loginDetails,
                name: response.data.name,
                email: response.data.email
            })

            setDisabledInput(true);
        } else {
            setDisabledInput(false);
        }
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        setError(loginDefault);

        if (!loginValidation(loginDetails, error, setError)) {
            return;
        }

        setDisabledBtn(true);

        const payload = {
            phone: loginDetails.phone.trim(),
            name: loginDetails.name.trim(),
            email: loginDetails.email.trim()
        }

        const response = await saveUserData(payload);

        if (response.status === "SUCCESS") {
            isUserAuthenticated(true);
            navigate(routePath.quiz);
        } else {
            setError({ ...error, screen: MESSAGES.invalidApi })
        }
        setDisabledBtn(false);
    }

    return (
        <form>
            <Input 
                placeholder="Phone Number"
                autoComplete="off"
                value={loginDetails.phone}
                error={error.phone}
                name="phone"
                onChange={(e) => onValueChange(e)}
                onBlur={fetchUser}
                maxLength={10}
            />
            <Input 
                placeholder="Full Name"
                autoComplete="off"
                value={loginDetails.name}
                error={error.name}
                name="name"
                onChange={(e) => onValueChange(e)}
                disabled={disabledInput}
            />
            <Input 
                placeholder="Email Id"
                autoComplete="off"
                value={loginDetails.email}
                error={error.email}
                name="email"
                onChange={(e) => onValueChange(e)}
                disabled={disabledInput}
            />
            <Button
                label="Submit"
                onClick={(e) => onSubmit(e)}
                disabled={disabledBtn}
            />
        </form>
    )
}

export default Login;