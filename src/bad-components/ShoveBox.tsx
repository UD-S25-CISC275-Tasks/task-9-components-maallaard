import React, { useState } from "react";
import { Button } from "react-bootstrap";

function ShoveBoxButton({
    position,
    setPosition,
}: {
    position: number;
    setPosition: (newPosition: number) => void;
}) {
    return (
        <Button
            onClick={() => {
                setPosition(4 + position);
            }}
        >
            Shove the Box
        </Button>
    );
}

function MoveableBox({ position }: { position: number }): React.JSX.Element {
    return (
        <div
            style={{
                marginLeft: position.toString() + "px",
                border: "1px solid blue",
                verticalAlign: "bottom",
                display: "inline-block",
                backgroundColor: "blue",
                height: "100px",
                width: "100px",
            }}
            data-testid="moveable-box"
        ></div>
    );
}

export function ShoveBox(): React.JSX.Element {
    const [position, setPosition] = useState<number>(10);

    return (
        <div>
            <h3>ShoveBox</h3>
            <span>The box is currently located at: {position}</span>
            <div>
                <ShoveBoxButton
                    position={position}
                    setPosition={setPosition}
                ></ShoveBoxButton>
                <MoveableBox position={position}></MoveableBox>
            </div>
        </div>
    );
}
