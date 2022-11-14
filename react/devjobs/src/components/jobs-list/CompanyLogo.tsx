import React from "react";

type CompanyLogoProps = {
    bgLogo: string;
    logoBackground: string;
};

const CompanyLogo = ({ bgLogo, logoBackground }: CompanyLogoProps) => {
    return (
        <div
            className={`absolute -top-6 left-8  h-12 w-12 rounded-xl bg-no-repeat bg-center ${bgLogo}`}
            style={{
                backgroundColor: `${logoBackground}`,
            }}
        ></div>
    );
};

export default CompanyLogo;
