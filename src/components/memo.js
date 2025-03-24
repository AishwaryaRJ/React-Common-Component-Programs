import React, { useState, useMemo } from "react";

function ExpensiceCalculation({ num }) {
    const computedValue = useMemo(() => {
        return num * 10;
    }, [num]);

    return <div>Computed Value: {computedValue}</div>
}
