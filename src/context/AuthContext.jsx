import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMe, login, signup } from "../services/api/user";
import toast from "react-hot-toast";
export const AuthContext = createContext();
export default function AuthContextProvider({ children }) {
    const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem("userInfo")) || null);
    const [role, setRole] = useState(userInfo?.user?.role);
    const navigate = useNavigate();
    useEffect(() => {
        console.log(userInfo?.data.role);

        setRole(userInfo?.data?.role);
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
    }, [userInfo]);
    const logoutAccount = () => {
        setUserInfo(localStorage.removeItem("userInfo") || null);
    };
    const loginUser = async (payload) => {
        try {
            const res = await login(payload);
            if (res.status === 200) {
                localStorage.setItem("userInfo", JSON.stringify({ ...res.data.data }));
                try {
                    const me = await getMe();
                    if (me.status === 200) {
                        setUserInfo({ ...res.data.data, ...me.data });
                        toast.success("Login compelete!");
                        navigate("/");
                    }
                } catch (error) {
                    toast.error(error?.response?.data?.message);
                }
            }
        } catch (error) {
            toast.error(error?.response?.data?.message);
        }
    };
    const signUpUser = async (payload) => {
        try {
            const res = await signup(payload);
            toast.success("Register successful");
            navigate("/login");
        } catch (error) {
            toast.error(error.response?.data?.message || "Sign Up failed");
        }
    };
    return (
        <AuthContext.Provider value={{ userInfo, role, loginUser, signUpUser, logoutAccount }}>
            {children}
        </AuthContext.Provider>
    );
}
