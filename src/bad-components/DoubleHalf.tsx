import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface DoubleHalfProps {
    dhValue: number;
    setDhValue: (newValue: number) => void;
}

function Halver({ dhValue, setDhValue }: DoubleHalfProps): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setDhValue(0.5 * dhValue);
            }}
        >
            Halve
        </Button>
    );
}

function Doubler({ dhValue, setDhValue }: DoubleHalfProps): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setDhValue(2 * dhValue);
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
            <h3>DoubleHalf</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Halver dhValue={dhValue} setDhValue={setDhValue}></Halver>
            <Doubler dhValue={dhValue} setDhValue={setDhValue}></Doubler>
        </div>
    );
}
