import React from 'react';
import './app.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/about';
import Team from './components/team';
import Courses from './components/courses';
import Packages from './components/packages';
import Schedule from './components/schedule';
import Contact from './components/contact';
// import Login from './components/login';
import Home from './components/home';
import Faq from './components/faq';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/about' exact component={About}/>
        <Route path='/team' exact component={Team}/>
        <Route path='/courses' exact component={Courses}/>
        <Route path='/packages' exact component={Packages}/>
        <Route path='/schedule' exact component={Schedule}/>
        <Route path='/contact' exact component={Contact}/>
        <Route path='/faqs' exact component={Faq}/>
        {/* <Route path='/login' exact component={Login}/> */}
      </Switch>
    </Router>
  );
};

export default App;