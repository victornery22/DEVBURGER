import { useContext, createContext, useState, useEffect } from "react";

const UserContext = createContext({});

export const UserProvider = ({ children }) => {

    const [userInfo, setUserInfo] = useState({});
    const putUserData = (userInfo) => {
        setUserInfo(userInfo);
      localStorage.setItem("devburger:data", JSON.stringify(userInfo));  
    }
    const logout = () => {
        localStorage.removeItem("devburger:data");
        setUserInfo({});
    }

    useEffect(() => {
        const userInfoLocalStorage = localStorage.getItem("devburger:data");
        if (userInfoLocalStorage) {
            setUserInfo(JSON.parse(userInfoLocalStorage));
        }
    }, [])

    return (
        <UserContext.Provider value={{userInfo, putUserData, logout }}>{children}</UserContext.Provider>
    )
};

export const useUser = () => {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error("useUser must be used within an UserProvider");
    }

    return context;
}