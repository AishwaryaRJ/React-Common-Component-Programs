import React from "react";

function ChildComponent({ increment ,count}) {


    return (
        <div>
            Increment: {count}
        </div>
    );
}

export default ChildComponent;