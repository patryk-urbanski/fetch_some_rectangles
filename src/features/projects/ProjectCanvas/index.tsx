import React from 'react';

import { IRectangle, IProject } from '../../../types';

import Rectangle from '../../../components/Rectangle';

interface Props {
    project: IProject,
}

const ProjectCanvas = ({
    project,
}: Props) => {
    const containerStyle = {
        width: project.width,
        height: project.height,
        border: '1px solid black',
        margin: '50px auto'
    };

    return (
        <div className='w-100 h-100 align-items-center d-flex flex-column'>
            <div>
                <span className='d-block'><strong>Name: </strong>{project.name}</span>
                <span className='d-block'><strong>ID: </strong>{project.id}</span>
            </div>
            <svg style={containerStyle}>
                {
                    project.items.map((rectangle: IRectangle) => (
                        <Rectangle { ...rectangle } key={`${rectangle.id}--rectangle`}/>
                    ))
                }
            </svg>
        </div>
    );
};

export default ProjectCanvas;