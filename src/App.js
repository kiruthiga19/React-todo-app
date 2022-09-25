import './App.css';
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';

function App() {
  return (
    <div className="todo-app">
     <TodoList></TodoList>
    </div>
  );
}

export default App;