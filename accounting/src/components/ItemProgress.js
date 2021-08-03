import { LinearProgress } from "@material-ui/core";
import React from "react";
import Row from "./Row";

import "./itemProgress.scss";

const ItemProgress = ({ itemName, currentAmount, targetAmount }) => {
    return (
        <div className="item-progress">
            <Row className="symmetric-margin">
                <span className="item-progress__name">{itemName}:</span>
                <span className="item-progress__value">
                    {`${currentAmount.toLocaleString()} from ${targetAmount.toLocaleString()}`}
                </span>
            </Row>
            <LinearProgress
                className="item-progress__bar"
                variant="determinate"
                value={(currentAmount / targetAmount) * 100}
            />
        </div>
    );
};

export default ItemProgress;
