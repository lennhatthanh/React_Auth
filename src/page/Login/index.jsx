import React, { Fragment, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthContext";
export default function Login() {
    const [form, setForm] = useState(null);
    const { loginUser } = useContext(AuthContext);
    const handleLogin = async () => {
        try {
            await loginUser(form);
        } catch (error) {
            toast.error(error?.response?.data?.message);
        }
    };
    return (
        <Fragment>
            <div className="flex flex-col gap-4 shadow-2xl p-6 items-center rounded-lg">
                <span className="font-bold text-3xl">Login</span>
                <div className="space-y-4 w-full">
                    <div className="flex flex-col gap-3 text-sm">
                        <label htmlFor="">Email</label>{" "}
                        <input
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            type="email"
                            placeholder="name@example.com"
                            className="border border-gray-200 rounded-xl px-4 py-2 outline-none"
                        />
                    </div>
                    <div className="flex flex-col gap-3 text-sm">
                        <label htmlFor="">Password</label>{" "}
                        <input
                            onChange={(e) => setForm({ ...form, password: e.target.value })}
                            type="password"
                            placeholder="Enter your password"
                            className="border border-gray-200 rounded-xl px-4 py-2 outline-none"
                        />
                    </div>
                    <div className="text-[13px] text-center ">
                        Don't have an account?{" "}
                        <Link to={"/signup"} className="text-blue-500 font-bold cursor-pointer">
                            Sign up
                        </Link>
                    </div>
                </div>
                <button onClick={handleLogin} className="bg-blue-600 rounded-lg w-full p-2 text-white font-bold">
                    Sign Up
                </button>
            </div>
        </Fragment>
    );
}
