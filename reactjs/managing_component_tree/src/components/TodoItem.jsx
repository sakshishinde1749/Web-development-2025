import React from "react";

function TodoItem(props) {
    
    return(
        <li
         onClick={() => {
            props.onclicked(props.id)
         }}
        >
            {props.item}
        </li>
    )
}

export default TodoItem;