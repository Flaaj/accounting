import React from "react";
import { Button } from "@material-ui/core";
import { Send as SendIcon } from "@material-ui/icons/";

const SubmitButton = ({ text, className }) => {
    return (
        <Button
            className={"button" + (className ? ` ${className}` : "")}
            variant="contained"
            color="primary"
        >
            <span className="button__text">{text}</span>
            <SendIcon className="button__icon" />
        </Button>
    );
};

export default SubmitButton;
