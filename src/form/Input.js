import React from "react"
function Input(
    {
    id,
    text},ref) {
    return (
        <div className="control">
            <label htmlFor={id}>{text}</label>
            <input id={id} ref={ref} />
        </div>
    )
}

export default React.forwardRef(Input);