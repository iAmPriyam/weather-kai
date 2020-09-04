import React from "react";

export default function Header({ title }) {
    return (
        <header className={"header"}>
            <span>{title}</span>
        </header>
    );
}
