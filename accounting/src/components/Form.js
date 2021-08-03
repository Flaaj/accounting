import React from "react";

import "./form.scss";

const Form = ({ children, className }) => {
    return (
        <form className={"form" + (className ? ` ${className}` : "")}>
            {children}
        </form>
    );
};

export default Form;
