// ! Los estilos propios deben ir debajo de bootstrap para que no los pise.
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import TaskList from './components/container/task_list';

function App() {
  return (
    <div className="App">
        {/* Componente de listado de tareas */}
        <TaskList></TaskList>
    </div>
  );
}

export default App;
