import React, { useState } from 'react';
import { Stage, Layer, Line, Text } from 'react-konva';
import "../styles/styles-planeTrusses.css";

const PlaneTrusses = () => {
    // Default points
    const [points, setPoints] = useState({
        vertical1: [100, 100, 100, 500],
        vertical2: [500, 100, 500, 500],
        horizontal1: [100, 100, 500, 100],
        horizontal2: [100, 500, 500, 500],
        diagonal1: [100, 100, 500, 500],
        diagonal2: [100, 500, 500, 100],
    });

    // Update points dynamically
    const handleInputChange = (e, lineName) => {
        const newPoints = e.target.value.split(",").map(Number);
        setPoints((prevPoints) => ({
            ...prevPoints,
            [lineName]: newPoints,
        }));
    };

    return (
        <div>
            <h1>Welcome to the Plane Trusses Page</h1>
            <div className="stage-container">
                <Stage width={600} height={600}>
                    <Layer>
                        {/* Draw the lines dynamically based on points */}
                        <Line points={points.vertical1} stroke="black" strokeWidth={2} />
                        <Line points={points.vertical2} stroke="black" strokeWidth={2} />
                        <Line points={points.horizontal1} stroke="black" strokeWidth={2} />
                        <Line points={points.horizontal2} stroke="black" strokeWidth={2} />
                        <Line points={points.diagonal1} stroke="black" strokeWidth={2} />
                        <Line points={points.diagonal2} stroke="black" strokeWidth={2} />

                    </Layer>
                </Stage>
            </div>

            {/* Input fields for coordinates */}
            <div className="input-container">
                <label>
                    Vertical Line 1 (x1, y1, x2, y2):
                    <input
                        type="text"
                        defaultValue="100,100,100,500"
                        onChange={(e) => handleInputChange(e, "vertical1")}
                    />
                </label>
                <br />
                <label>
                    Vertical Line 2 (x1, y1, x2, y2):
                    <input
                        type="text"
                        defaultValue="500,100,500,500"
                        onChange={(e) => handleInputChange(e, "vertical2")}
                    />
                </label>
                <br />
                <label>
                    Horizontal Line 1 (x1, y1, x2, y2):
                    <input
                        type="text"
                        defaultValue="100,100,500,100"
                        onChange={(e) => handleInputChange(e, "horizontal1")}
                    />
                </label>
                <br />
                <label>
                    Horizontal Line 2 (x1, y1, x2, y2):
                    <input
                        type="text"
                        defaultValue="100,500,500,500"
                        onChange={(e) => handleInputChange(e, "horizontal2")}
                    />
                </label>
                <br />
                <label>
                    Diagonal Line 1 (x1, y1, x2, y2):
                    <input
                        type="text"
                        defaultValue="100,100,500,500"
                        onChange={(e) => handleInputChange(e, "diagonal1")}
                    />
                </label>
                <br />
                <label>
                    Diagonal Line 2 (x1, y1, x2, y2):
                    <input
                        type="text"
                        defaultValue="100,500,500,100"
                        onChange={(e) => handleInputChange(e, "diagonal2")}
                    />
                </label>
            </div>
        </div>
    );
};

export default PlaneTrusses;
