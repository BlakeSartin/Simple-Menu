import './App.css';
import NavbarComponent from './components/Navbar';
import Burgers from './components/Burgers';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div className="App">
      <NavbarComponent/>
      <Burgers/>
    </div>
  );
}

export default App;
