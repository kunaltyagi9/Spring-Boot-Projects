import { MESSAGES } from "../constants/constant";

export const loginValidation = (data, error, setError) => {
    const { phone, name, email } = data;

    const numberRegrExp = /^[0-9]+$/;
    const letterRegrExp = /^[A-Za-z\s]+$/;
    const emailRegrExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    const PHONE_LENGTH = 10;

    if (phone.trim().length !== PHONE_LENGTH) {
        setError({ ...error, phone: MESSAGES.invalidPhone });
        return false;
    } else if (!numberRegrExp.test(phone.trim())) {
        setError({ ...error, phone: MESSAGES.invalidPhone });
        return false;
    } else if (!validateNumberFirstCharacter(phone)) {
        setError({ ...error, phone: MESSAGES.invalidPhone });
        return false;
    }

    if (name.trim().length < 3) {
        setError({ ...error, name: MESSAGES.invalidName });
        return false;
    } else if (!letterRegrExp.test(name.trim())) {
        setError({ ...error, name: MESSAGES.invalidName });
        return false;
    }

    if (!emailRegrExp.test(email.trim())) {
        setError({ ...error, email: MESSAGES.invalidEmail });
        return false;
    }

    return true;
}

const validateNumberFirstCharacter = (phone) => {
    const numFirst = Number(String(phone).charAt(0));
    return (numFirst === 6 || numFirst === 7 || numFirst === 8 || numFirst === 9);
}