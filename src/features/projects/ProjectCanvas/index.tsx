import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { RootState } from '../../../redux/store';
import { IRectangle } from '../../../types';

import Rectangle from '../../../components/Rectangle';
import { Spinner } from 'reactstrap';

const mapStateToProps = (state: RootState) => ({
    project: state.projects.selectedProject?.project,
    isLoading: state.global.isLoading,
});

const connector = connect(mapStateToProps);

type ReduxProps = ConnectedProps<typeof connector>

const ProjectCanvas = ({
    project,
    isLoading,
}: ReduxProps) => {
    const containerStyle = {
        maxWidth: project?.width,
        maxHeight: project?.height,
        border: '1px solid black',
        margin: '50px auto'
    };

    return !isLoading ? (
        <div className='w-100 h-100 align-items-center d-flex flex-column'>
            {
                project
                ? <>
                    <div>
                        <span className='d-block'><strong>Name: </strong>{project.name}</span>
                        <span className='d-block'><strong>ID: </strong>{project.id}</span>
                    </div>
                    <svg style={containerStyle} viewBox={`0 0 ${project.width} ${project.height}`} preserveAspectRatio="xMidYMid meet">
                        {
                            project.items.map((rectangle: IRectangle) => (
                                <Rectangle { ...rectangle } key={`${rectangle.id}--rectangle`}/>
                            ))
                        }
                    </svg>
                </>
                : <span className='text-monospace'>Place for your rectangles</span>
            }
            
        </div>
    ) : ( 
        <div className='w-100 d-flex justify-content-center'>
            <Spinner size='lg' color='dark' />    
        </div>
    )
};

export default connector(ProjectCanvas);