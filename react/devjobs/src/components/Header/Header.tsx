import React from "react";

import Logo from "../general/Logo";
import SearchBox from "./SearchBox";
import Switch from "../general/Switch";

type HeaderProps = {
    handleTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleLocationChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Header = ({ handleTitleChange, handleLocationChange }: HeaderProps) => {
    return (
        <header className="bg-header-pattern-mobile w-full h-32 sm:bg-header-pattern-tablet  sm:h-40 md:bg-header-pattern-desktop md:bg-no-repeat md:bg-cover">
            <div className="w-full flex justify-between px-6 pt-8">
                <Logo />
                <div className="flex  items-center">
                    <div className="bg-sun bg-no-repeat bg-center h-5 w-4"></div>
                    <Switch />
                    <div className="bg-moon bg-no-repeat bg-center h-5 w-4"></div>
                </div>
            </div>
            <SearchBox
                handleTitleChange={handleTitleChange}
                handleLocationChange={handleLocationChange}
            />
        </header>
    );
};

export default Header;
