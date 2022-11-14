import React, { useEffect, useState } from "react";

const Switch = () => {
    const [isDarkMode, setDarkMode] = useState(false);

    useEffect(() => {
        document.body.classList.toggle("dark", isDarkMode);

        // Tailwind dynamic weirdness
        if (isDarkMode) {
            document.body.classList.add("bg-dj-midnight");
        } else {
            document.body.classList.remove("bg-dj-midnight");
        }
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
