import logo from './img/freecodecamp-logo.png';
import './App.css';
import TasksList from './components/TasksList';

function App() {
  
  return (
    <div className='App'>
      <div className='freecodecamp-logo-container'>
        <img 
          src={ logo } 
          className='freecodecamp-logo' alt='' 
        />
      </div>
      <div className='task-list-main'>
        <h1>MyTask!</h1>
        <TasksList/>
      </div>
    </div>
  );
}

export default App;
