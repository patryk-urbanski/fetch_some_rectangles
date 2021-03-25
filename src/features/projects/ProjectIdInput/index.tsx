import React, { FormEvent, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { getRandomProjectId, getProjectDetails } from '../../../redux/methods/projects';

import { Label, Input, Button, Form, Row} from 'reactstrap';

const mapDispatch = {
    getRandomProjectId,
    getProjectDetails,
};

const connector = connect(null, mapDispatch);

type ReduxProps = ConnectedProps<typeof connector>

const ProjectIdInput = ({
    getRandomProjectId,
    getProjectDetails,
}: ReduxProps) => {
    const [ projectId, setProjectId ] = useState<string>('');

    const handleOnSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        
        if(!projectId) {
            const { id } = await getRandomProjectId();
            if(id) {
                getProjectDetails(id);
            }
        }
        else {
            getProjectDetails(projectId);
        }
    };

    return (
        <div className='m-3'>
            <Form onSubmit={handleOnSubmit}>
                <Row className='m-0 p-0'>
                    <Label className='my-1'>Project ID:</Label>
                    <Input
                        className='my-1'
                        name='projectId'
                        placeholder={'For random project leave empty'}
                        value={projectId}
                        onChange={e => setProjectId(e.target.value)}
                    />
                    <Button
                        className='my-1'
                        type='submit'
                        color='primary'
                    >
                        <span>Get some rectangles!</span>
                    </Button>
                </Row>
            </Form>
        </div>
    )
};

export default connector(ProjectIdInput);
