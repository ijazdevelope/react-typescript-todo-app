import React, { useEffect, useReducer, useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import { Todo } from '../models/note.model';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { MdOutlineDoneOutline } from 'react-icons/md';
import { Row, Col } from 'react-bootstrap';
import '../App.css';
import TodoList from './TodoList';

type Props = {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {

    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);
    const focusRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        focusRef.current?.focus();
    }, [edit])

    const handleDone = (id: number) => {
        const getUpdatedTodo = todos.map(todo => (
            todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
        ))
        setTodos(getUpdatedTodo);
    }

    const handleDelete = (id: number) => {
        const todoDeleted = todos.filter(todo => todo.id !== id);
        setTodos(todoDeleted);
    }

    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        setTodos(todos.map((todo) => (
            todo.id === id ? { ...todo, todo: editTodo } : todo
        )))
        setEdit(false);
    }

    return (
        <Form onSubmit={e => handleEdit(e, todo.id)}>
            <Row className='ps-2' style={{ width: '92%' }} >
                <Col className='d-flex justify-content-between p-2 rounded bg-success text-white text-capitalize singleList mt-1'>
                    {
                        edit ? (
                            <input
                                value={editTodo}
                                className='w-50'
                                onChange={e => setEditTodo(e.target.value)}
                                ref={focusRef}
                            />
                        ) : (
                            <span className={`${todo.isDone ? 'underlineText bg-white text-dark px-2 rounded' : 'false'}`} >{todo.todo}</span>
                        )
                    }
                    <div className='d-flex'>
                        <AiFillEdit title='Edit Todo' onClick={() => {

                            if (!edit && !todo.isDone) {
                                setEdit(!edit);
                            }

                        }} />
                        <AiFillDelete className='mx-2' title='Delete Todo' onClick={() => handleDelete(todo.id)} />
                        <MdOutlineDoneOutline title='Done/Complete Todo' onClick={() => handleDone(todo.id)} />
                    </div>
                </Col>
            </Row>
        </Form>
    )
}

export default SingleTodo
