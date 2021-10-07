
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.css';

import Home from '../src/pages/Home'
import Contact from '../src/pages/Contact'
import About from '../src/pages/About'
import Stores from '../src/pages/Stores'
import Sale from '../src/pages/Sale'


function App() {
  return (
    <>
    <BrowserRouter>
      <div className="App">

    <Switch>
    
      <Route path='/' component={Home} exact/>
      <Route path='/about' component={About} exact/>
      <Route path='/contact' component={Contact} exact/>
      <Route path='/stores' component={Stores} exact/>
      <Route path='/sale' component={Sale} exact/>
    
    </Switch>
      </div>
    </BrowserRouter>

    
    </>
  );
}

export default App;
