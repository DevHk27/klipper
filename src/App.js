import logo from './logo.svg';
import Home from './pages/home/Home';
import Navigator from './components/navigator/Navigator';
import './app.css';

function App() {
  return (
    <>
      <div className='nav-panel'>
        <Navigator />
      </div>
      <div className='app-body'>
        <Home />
      </div>
    </>
  );
}

export default App;
