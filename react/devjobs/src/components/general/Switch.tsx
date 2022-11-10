import React, { useEffect, useState } from "react";

const Switch = () => {
    const [isDarkMode, setDarkMode] = useState(false);

    useEffect(() => {
        document.body.classList.toggle("dark", isDarkMode);
    }, [isDarkMode]);

    function toggleSwitch() {
        setDarkMode((prevValue) => !prevValue);
    }

    return (
        <label className="switch mx-4">
            <input type="checkbox" onChange={toggleSwitch} />
            <span className="slider round"></span>
        </label>
    );
};

export default Switch;
