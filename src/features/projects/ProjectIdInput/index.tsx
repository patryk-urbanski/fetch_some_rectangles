import React, { FormEvent, useState } from 'react';

import { Label, Input, Button, Form, Row} from 'reactstrap';

const ProjectIdInput = () => {
    const [ projectId, setProjectId ] = useState<string>('');

    const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(projectId)
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

export default ProjectIdInput;
