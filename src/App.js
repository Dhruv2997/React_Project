import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Main from './pages/Main';
import About from './pages/About';
import Imageg from './pages/Imageg';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Register from './pages/Register'

function App() {
  return (
    <>
      <Router>
      <Header />
        <Sidebar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/main'  component={Main} />
          <Route path='/quit'  component={About} />
          <Route path='/register'  component={Register} />
          <Route path='/imageg'  component={Imageg} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;