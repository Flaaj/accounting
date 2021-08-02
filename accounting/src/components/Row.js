import React from "react";

import "./row.scss";

const Row = ({ children, className }) => {
    return <div className={"row" + (className ? ` ${className}` : "")}>{children}</div>;
};

export default Row;
