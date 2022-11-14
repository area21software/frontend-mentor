import React, { useState } from "react";

type SearchBoxProps = {
    handleTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleLocationChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = ({
    handleTitleChange,
    handleLocationChange,
}: SearchBoxProps) => {
    return (
        <div className="absolute left-7 right-7 top-24 bg-dj-white dark:bg-dj-very-dark-blue p-3 rounded-md">
            <div className="hidden md:flex items-center justify-between h-full">
                <div className="flex justify-evenly h-full w-full border-r border-b-dj-light-gray">
                    <div className="bg-search h-6 w-6"></div>
                    <input
                        className="text-dj-gray text-md  dark:bg-dj-very-dark-blue"
                        placeholder="Filter by title..."
                        onChange={handleTitleChange}
                    />
                </div>
                <div className="flex justify-evenly w-full border-r border-b-dj-light-gray">
                    <div className="bg-location bg-no-repeat h-6 w-6 "></div>
                    <input
                        className="text-dj-gray dark:bg-dj-very-dark-blue text-md"
                        type="text"
                        placeholder="Filter by location..."
                        onChange={handleLocationChange}
                    />
                </div>
                <div className="flex items-center w-full justify-evenly">
                    <input
                        className="h-6 w-6 accent-dj-violet cursor-pointer"
                        type="checkbox"
                    />
                    <p className="text-dj-very-dark-blue dark:text-dj-white font-bold text-md">
                        Full Time
                    </p>
                    <button className="bg-dj-violet active:bg-dj-light-violet active:scale-95 ml-5 p-3 w-1/3 rounded-md text-dj-white text-md">
                        Search
                    </button>
                </div>
            </div>
            {/* Mobile Layout */}
            <div className="md:hidden flex items-center justify-between">
                <input
                    className="dark:bg-dj-very-dark-blue text-dj-gray text-md"
                    placeholder="Filter by title..."
                />
                <div className="bg-filter ml-auto h-5 w-5"></div>
                <button className="bg-dj-violet active:bg-dj-light-violet active:scale-95 ml-5 p-3 rounded-md">
                    <div className="bg-search-white h-6 w-6"></div>
                </button>
            </div>
            {/* Mobile Layout */}
        </div>
    );
};

export default SearchBox;
