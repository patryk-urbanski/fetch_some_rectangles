import React from 'react';

import { IRectangle } from '../../types';

import { generateBoundingBox } from '../../utils/projects';

const Rectangle = ({ color, width, height, x, y, rotation }: IRectangle) => {
    const boundingBox = generateBoundingBox(width, height, rotation);

    return (
        <g>
            <rect
                fill={color}
                width={width}
                height={height}
                transform={`
                    translate(${x}, ${y})
                    rotate(${rotation})
                    translate(-${width/2}, -${height/2})
                `}
            />
            <circle
                cx={x}
                cy={y}
                fill={'#000000'}
                r='4'
            />
            <text
                x={x + 5}
                y={y}
                fill={'#000000'}
            >
                <tspan>{rotation}</tspan>
            </text>
            <rect
                width={boundingBox.width}
                height={boundingBox.height}
                fill='none'
                stroke='#000000'
                transform={`
                    translate(${x - (boundingBox.width / 2)}, ${y - (boundingBox.height / 2)})
                `}
            />
        </g>
    );
};

export default Rectangle;