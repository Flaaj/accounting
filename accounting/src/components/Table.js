import React from "react";

import "./table.scss";

const Table = ({ head, rows, className }) => {
    return (
        <table className={"table" + (className ? ` ${className}` : "")}>
            <thead>
                <tr>
                    {head.map((item) => (
                        <th>{item}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {rows.map((row) => (
                    <tr>
                        {row.map((item) => (
                            <td>{item}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
