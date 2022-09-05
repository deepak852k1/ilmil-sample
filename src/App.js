import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Courses from "./Courses";
import Cart from './Cart';
import Footer from './Footer'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
    <div className="App">
     <Switch>
      <Route path="/Courses">
            <Header />
            <Courses />
            <Footer/>
           
      </Route>
          <Route path="/Footer">
            
            <Footer />
          </Route>
     <Route path="/">
            <Header />
            <Home />
            <Footer/>
      </Route>

      <Route path="/Cart">
            <Header />
            <Cart/>
      </Route>
      </Switch>
    </div>
    </Router>
  );
  
}


export default App;
