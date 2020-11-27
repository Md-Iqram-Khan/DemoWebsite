import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import { Redirect, Route, Switch } from 'react-router-dom';
import Home  from './Home'
import About  from './About'
import Contact  from './Contact'
import Service  from './Service'
import Navbar from './Navbar'
import Footer from './Footer';

const App = () => {
      return(
            <>
            <Navbar/>
            <Switch>
             <Route path='/' exact component={Home}/>
             <Route path='/about' exact component={About}/>
             <Route path='/contact' exact component={Contact}/>
             <Route path='/service' exact component={Service}/>
             <Redirect to='/'exact  />
             </Switch>
             <Footer/>
            </>
      )
}

export default App;