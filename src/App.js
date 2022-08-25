import { Component } from 'react';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import About from './Component/About'
import Skills from './Component/Skills'
import Works from './Component/Works'
import Contact from './Component/Contact'
import Header from './Component/Header';



import './App.css';


class App extends Component {
  render(){
    return (
      <div className="App">
        
        <Header />
        <Navbar/>
        
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/About' element = {<About/>} />
          <Route path='/Skills' element = {<Skills/>} />
          <Route path='/Works' element = {<Works/>} />
          <Route path='/Contact' element = {<Contact/>} />
        </Routes>
      </div>
    );
  }
}

export default App;
