import React, { Fragment, useEffect } from "react";
import toast from "react-hot-toast";
import { getMe } from "../../services/api/user";
const arr = [
    {
        title: "DashBoard Analystic",
        description: "A short sentence exphaining the benefit of the analytics feature",
    },
    {
        title: "DashBoard Analystic",
        description: "A short sentence exphaining the benefit of the analytics feature",
    },
    {
        title: "DashBoard Analystic",
        description: "A short sentence exphaining the benefit of the analytics feature",
    },
];
export default function Home() {
    const fetchApi = async () => {
        try {
            await getMe();
        } catch (error) {
            toast.error(error?.response?.data?.message);
        }
    };
    useEffect(() => {
        fetchApi();
    });
    return (
        <Fragment>
            <div className="flex flex-col justify-center items-center my-10 md:my-16 lg:my-28 xl:my-36 space-y-10 text-center">
                <h1 className=" font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl">Welcome to the App</h1>
                <span className="text-sm lg:text-lg text-gray-500">
                    A brief, one-to-two-sentence summary of the application's purpor or value proposition to get you
                    start
                </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mb-10">
                {arr.map((value, index) => (
                    <div key={index} className="shadow-lg rounded-lg border border-gray-100 p-5 space-y-2">
                        <h1 className="font-bold">{value.title}</h1>
                        <p className="text-gray-500 text-sm">{value.description}</p>
                    </div>
                ))}
            </div>
        </Fragment>
    );
}
