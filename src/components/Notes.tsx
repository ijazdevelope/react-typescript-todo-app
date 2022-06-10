import * as React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Note } from '../models/note.model'

interface INotesProps {
    note: Note,
    handleDelete: (id: string) => void
}

const Notes: React.FC<INotesProps> = ({ note, handleDelete }) => {
    const { title, text, date, color, id } = note;

    return (
        <div className='mb-3'>
            <Card style={{ backgroundColor: '#f2f2f2' }} > {/* throws an eroor with dynamically values*/}
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{text}</Card.Text>
                    <Card.Subtitle className='text-mutes'>{date}</Card.Subtitle>
                    <Button className='mt-3' variant='danger' onClick={() => handleDelete(id)}>Delete</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Notes;
