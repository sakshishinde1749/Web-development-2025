import React from "react";

function Rows(props) {
    return (
        <tr>
            <td>{props.model}</td>
            <td>{props.speed}</td>
            <td>{props.color}</td>
        </tr>
    );
}

export default Rows;