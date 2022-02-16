import './App.css';
import TaskList from './components/container/task_list';
import RegisterForm from './components/pure/forms/registerForm';

function App() {
  return (
    <div className="App">
        {/* Componente de listado de tareas */}
        <TaskList></TaskList>
    </div>
  );
}

export default App;
