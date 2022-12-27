import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import navbar from './componentes/navegacion/Navbar';
import Inicio from './componentes/navegacion/pages/inicio';
import Menu from './componentes/navegacion/pages/menu';
import Contacto from './componentes/navegacion/pages/Contacto';
import SobreNosotros from './componentes/navegacion/pages/SobreNosotos';


function App() {
  return (
    <div className="App">
     <Router>
      <navbar/>
      <Switch>
       <Route path='/' exact componentes=(Inicio) 
       <Route path='/Menu' componentes=(Menu)
       <Route path='/Contacto' componentes=(Contacto)
       <Route path='/SobreNosotors' componentes=(SobreNosotors)
      </Switch>
     </Router>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App;
