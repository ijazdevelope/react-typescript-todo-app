import * as React from 'react';
import { Todo } from '../models/note.model';
import SingleTodo from './SingleTodo';

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {

    return (
        <>
            <div>
                {todos.length === 0 ?
                    (
                        <>
                            <h6>Todo Not Found!</h6>
                            <img className='w-75' src='https://www.wpbeginner.com/wp-content/uploads/2013/04/wp404error.jpg' alt='todo-not-found' />
                        </>
                    )
                    :
                    todos.map(todo => (
                        < SingleTodo
                            todo={todo}
                            key={todo.id}
                            todos={todos}
                            setTodos={setTodos}
                        />
                    ))}
            </div>
        </>
    )
};

export default TodoList;
