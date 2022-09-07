import React, {useEffect} from "react";
import "./App.css";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Courses from "./Courses";
import Footer from './Footer/Footer';
import  Checkout from './Checkout/Checkout';


import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/Courses">
                        <Header/>
                        <Courses/>
                        <Footer/>

                    </Route>
                    <Route path="/Footer">

                        <Footer/>
                    </Route>
                    <Route path="/Checkout">
                      <Header/>
                           <Checkout/>
                           <Footer/>
                        
                    </Route>
                   

                    <Route path="/">
                        <Header/>
                        <Home/>
                        <Footer/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );

}

export default App;
