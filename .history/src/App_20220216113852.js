import './App.css';
import TaskList from './components/container/task_list';
import LoginForm from './components/pure/forms/loginForm';
import RegisterForm from './components/pure/forms/registerForm';

function App() {
  return (
    <div className="App">
        {/* Componente de listado de tareas */}
        <LoginForm></LoginForm>
    </div>
  );
}

export default App;
