import React from 'react'
import { HashRouter, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Main from './pages/Main';
import Splash from './pages/Splash';


const App = () => {
  return (
    <HashRouter>
      <Route exact path="/" component={ Splash }/>
      <Route path="/main" component={ Main }/>
    </HashRouter>
  );
}

export default App;
