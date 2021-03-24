import React from 'react';
import ProjectCanvas from '../../features/projects/ProjectCanvas';
import ProjectIdInput from '../../features/projects/ProjectIdInput';

const Home = () => {
    return (
        <div>
            <ProjectIdInput />
            <ProjectCanvas project={}/>
        </div>
    );
};

export default Home;