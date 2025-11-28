import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function Layout() {
    return (
        <div>
            <Header />
            <div className="px-6">
                <Outlet />
            </div>
        </div>
    );
}
