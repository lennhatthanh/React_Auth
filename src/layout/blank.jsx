import React from "react";
import { Outlet } from "react-router-dom";

function LayoutBlank() {
    return (
        <div className="w-screen h-screen flex justify-between items-center bg-[#f7f7f7]">
            <div className="mx-auto w-full max-w-96 space-y-5">
                <Outlet />
            </div>
        </div>
    );
}

export default LayoutBlank;
