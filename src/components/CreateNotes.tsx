import * as React from 'react';
import { Button, Form } from 'react-bootstrap';

interface ICreateNotesProps {
    // notes: Note[],
    // setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

const CreateNotes: React.FunctionComponent<ICreateNotesProps> = (props) => {

    return (
        <>
            <h2>Create Notes</h2>
            <Form className='my-3'>
                <Form.Group className='mb-3' controlId='formBasicTitle'>
                    <Form.Label>Title</Form.Label>
                    <Form.Control type='text' placeholder='Enter Title for the Notes...' />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBasicTitle'>
                    <Form.Label>Text</Form.Label>
                    <Form.Control placeholder='Enter your Notes...' as='textarea' rows={3} />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBasicTitle'>
                    <Form.Label htmlFor='colorInput'>Notes Color</Form.Label>
                    <Form.Control type='color' id='colorInput' defaultValue='#dfdfdf' />
                </Form.Group>
                <Button type='submit' variant='primary'>Submit</Button>
            </Form>
        </>
    );
};

export default CreateNotes;
