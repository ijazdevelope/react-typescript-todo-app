import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import CreateNotes from './components/CreateNotes';
import Header from './components/Header';
import InputField from './components/InputField';
import NotesList from './components/NotesList';
import TodoList from './components/TodoList';
import { Note, Todo } from './models/note.model'

const App: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([{
    id: (new Date).toString(),
    title: 'Meetings',
    text: 'Schedule meeting with React-Js Team',
    color: '#f2f2f2',
    date: (new Date).toString()
  }]);

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo('')
    }

  }

  return (
    <>
      <Header />
      <Container className='mt-5 d-flex justify-content-center'>
        <Row className='md-w-50'>
          <Col>
            {/* <NotesList notes={notes} setNotes={setNotes} /> */}
            <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
            <TodoList todos={todos} setTodos={setTodos} />
          </Col>
        </Row>
        <Row>
          <Col>
            {/* <CreateNotes /> */}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
