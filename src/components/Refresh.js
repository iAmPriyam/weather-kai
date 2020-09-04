import React from "react";
import error from "../assets/svg/error.svg";
export default function Refresh() {
    return (
        <div className="refresh-main">
            <h1>Hit Refresh</h1>
            <img className="error-icon" src={error} alt="error" />
            <p>Cannot access device location</p>
        </div>
    );
}
