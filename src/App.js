import { Component } from 'react';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import About from './Component/About'
import Skills from './Component/Skills'
import Experience from './Component/Experience'
import Contact from './Component/Contact'
import Header from './Component/Header';



import './App.css';


class App extends Component {
  render(){
    return (
      <div className="App">
        
        <Header />
        <Navbar/>
        <Home/>
        <Routes>
          <Route exact path='/' element = {<Home/>}/>
          <Route path='/About' element = {<About/>} />
          <Route path='/Skills' element = {<Skills/>} />
          <Route path='/Experience' element = {<Experience/>} />
          <Route path='/Contact' element = {<Contact/>} />
        </Routes>
      </div>
    );
  }
}

export default App;
