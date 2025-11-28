import { Fragment, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthContext";

export default function SignUp() {
    const [form, setForm] = useState(null);
    const { signUpUser } = useContext(AuthContext);
    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            await signUpUser(form);
        } catch (error) {
            toast.error(error?.response?.data?.message);
        }
    };
    return (
        <Fragment>
            <form className="flex flex-col gap-4 shadow-2xl p-6 items-center rounded-lg" onSubmit={handleSignup}>
                <span className="font-bold text-xl">Create Account</span>
                <div className="space-y-4 w-full">
                    <div className="flex flex-col gap-3 text-sm">
                        <label htmlFor="">Name</label>{" "}
                        <input
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            type="text"
                            placeholder="Enter your full name"
                            className="border border-gray-200 rounded-xl px-4 py-2 outline-none"
                            required
                        />
                    </div>
                    <div className="flex flex-col gap-3 text-sm">
                        <label htmlFor="">Email</label>{" "}
                        <input
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            type="email"
                            placeholder="name@example.com"
                            className="border border-gray-200 rounded-xl px-4 py-2 outline-none"
                            required
                        />
                    </div>
                    <div className="flex flex-col gap-3 text-sm">
                        <label htmlFor="">Password</label>{" "}
                        <input
                            onChange={(e) => setForm({ ...form, password: e.target.value })}
                            type="password"
                            placeholder="Enter your password"
                            className="border border-gray-200 rounded-xl px-4 py-2 outline-none"
                            required
                        />
                    </div>
                </div>
                <button type="submit" className="bg-blue-600 rounded-lg w-full p-2 text-white font-bold">Sign Up</button>
            </form>
            <div className="text-[13px] text-center ">
                Already have an account?{" "}
                <Link to={"/login"} className="text-blue-500 font-bold cursor-pointer">
                    Login
                </Link>
            </div>
        </Fragment>
    );
}
