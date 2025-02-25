import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];

function ChangeColor({
    colorIndex,
    setColorIndex,
}: {
    colorIndex: number;
    setColorIndex: (newColorIndex: number) => void;
}): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setColorIndex((colorIndex + 1) % COLORS.length);
            }}
        >
            ChangeColor
        </Button>
    );
}

function ColorPreview({
    colorIndex,
}: {
    colorIndex: number;
}): React.JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{ backgroundColor: COLORS[colorIndex] }}
        ></div>
    );
}

export function ColoredBox(): React.JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(0);
    return (
        <div>
            <h2>ColoredBox</h2>
            <span>The displayed color is currently: {COLORS[colorIndex]}</span>
            <div>
                <ChangeColor
                    colorIndex={colorIndex}
                    setColorIndex={setColorIndex}
                ></ChangeColor>
                <ColorPreview colorIndex={colorIndex}></ColorPreview>
            </div>
        </div>
    );
}
