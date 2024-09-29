
import { useState } from 'react';
import './App.css';
import { TodoList } from './components/TodoList';

function App() {
  const [value, setValue] = useState('')
  const [todos, setTodos] = useState([])

  const addTodo = () => {
    if (value !== '') {
      setTodos([...todos, {
        id: Date.now(),
        title: value,
        isComplete: false
      }])
      setValue('');
    } else alert('У вас пустая строка')
  }

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const onHandleChange = (e) => {
    setValue(e.target.value)
  }

  const editTodo = (id, editValue) => {
    setTodos(todos.map(todo => {
      if(todo.id !== id) return todo;
      return {
        ...todo,
        title: editValue
      }
    }))
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => {
      if(todo.id !== id) return todo;
      return {
        ...todo,
        isComplete: !todo.isComplete
      }
    }))
  }


  return (
    <div className="App">
      <div>
        <input value={value} onChange={(e) => onHandleChange(e)} />
        <button onClick={addTodo}>Добавить</button>
      </div>
      <TodoList todos={todos} removeTodo={removeTodo} editTodo={editTodo} toggleTodo={toggleTodo} />
      

    </div>
  );
}

export default App;
