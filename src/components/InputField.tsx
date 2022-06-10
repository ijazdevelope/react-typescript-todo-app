import { useState } from 'react';
import { Form, Button, InputGroup, FormControl } from 'react-bootstrap';

interface Props {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleAdd: (e: React.FormEvent) => void;
}


const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
    // const counterValue = () => counter === 0 ? 'zero' : counter;
    return (
        <>
            <Form className='mt-3' onSubmit={handleAdd}>
                <InputGroup className="mb-3">
                    <FormControl
                        value={todo}
                        onChange={e => setTodo(e.target.value)}
                        placeholder='Enter a Task....'
                        aria-label="Amount (to the nearest dollar)"
                    />
                    <Button variant="primary" type="submit"> Go </Button>
                </InputGroup>
            </Form>
        </>
    )
}

export default InputField
