import { createContext, useState } from "react";
import { loginDefault } from '../constants/constant';

export const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [loginDetails, setLoginDetails] = useState(loginDefault);

    return (
        <DataContext.Provider value={{
            loginDetails, 
            setLoginDetails
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;