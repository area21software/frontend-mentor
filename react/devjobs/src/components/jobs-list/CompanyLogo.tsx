import React from "react";

type CompanyLogoProps = {
    logoPath: string;
    logoBackground: string;
};

const CompanyLogo = ({ logoPath, logoBackground }: CompanyLogoProps) => {
    return (
        <div
            className={`absolute -top-6 left-8  h-12 w-12 rounded-xl bg-scoot bg-no-repeat bg-center`}
            style={{
                backgroundColor: `${logoBackground}`,
            }}
        ></div>
    );
};

export default CompanyLogo;
