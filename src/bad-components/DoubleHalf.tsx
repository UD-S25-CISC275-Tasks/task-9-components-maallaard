import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface DoubleHalfProps {
    dhValue: number;
    setDhValue: (newValue: number) => void;
}

function Half({ dhValue, setDhValue }: DoubleHalfProps): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setDhValue(dhValue * 0.5);
            }}
        >
            Half
        </Button>
    );
}

function Double({ dhValue, setDhValue }: DoubleHalfProps): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setDhValue(dhValue * 2);
            }}
        >
            Double
        </Button>
    );
}

export function DoubleHalf(): React.JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    return (
        <div>
            <h2>DoubleHalf</h2>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Half dhValue={dhValue} setDhValue={setDhValue}></Half>
            <Double dhValue={dhValue} setDhValue={setDhValue}></Double>
        </div>
    );
}
