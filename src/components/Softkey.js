import React, { useEffect } from "react";

export default function Softkey({
    left,
    onKeyLeft,
    center,
    onKeyCenter,
    right,
    onKeyRight,
}) {
    // useEffect(() => {
    //     document.addEventListener("keydown", handleKeyDown);

    //     return () => document.removeEventListener("keydown", handleKeyDown);
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // });

    // const handleKeyDown = (evt) => {
    //     switch (evt.key) {
    //         case "SoftLeft":
    //             return onKeyLeft && onKeyLeft(evt);
    //         case "Enter":
    //             console.log("buttn-pressed");
    //             return onKeyCenter && onKeyCenter(evt);
    //         case "SoftRight":
    //             return onKeyRight && onKeyRight(evt);
    //         default:
    //             return;
    //     }
    // };

    return (
        <div className={"softkey"}>
            <label className={"left"}>{left}</label>
            <label className={"center"}>{center}</label>
            <label className={"right"}>{right}</label>
        </div>
    );
}
