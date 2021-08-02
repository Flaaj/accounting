import React from "react";

import "./heading.scss";

const Heading = ({ children, level = "h1", className }) => {
    const HeadingLevel = level;

    return (
        <HeadingLevel className={`title ${level}` + (className ? ` ${className}` : "")}>
            {children}
        </HeadingLevel>
    );
};

export default Heading;
