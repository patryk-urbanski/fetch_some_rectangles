import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { RootState } from '../../redux/store';
import { clearError } from '../../redux/methods/generic';

import ErrorModal from '../../features/globalStates/ErrorModal';
import ProjectCanvas from '../../features/projects/ProjectCanvas';
import ProjectIdInput from '../../features/projects/ProjectIdInput';

const mapStateToProps = (state: RootState) => ({
    error: state.global.error,
});

const mapDispatch = {
    clearError,
};

const connector = connect(mapStateToProps, mapDispatch);

type ReduxProps = ConnectedProps<typeof connector>

const Home = ({
    clearError,
    error
}: ReduxProps) => {
    return (
        <div className='w-100 h-100'>
            <ErrorModal error={error} clearErrorHandler={clearError}/>
            <ProjectIdInput />
            <ProjectCanvas />
        </div>
    );
};

export default connector(Home);