import React, {Component} from 'react'
import './App.css'
import {BrowserRouter as Router, Route} from "react-router-dom";
import NavBar from "./utility/NavBar/NavBar";
import Home from "./pages/Home/Home";
import SingleFullVenue from "./pages/SingleFullVenue/SingleFullVenue";
import Modal from "./utility/Modal/Modal";

class App extends Component{

    render() {
        return(
            <Router>
             <Route path={'/'} component={NavBar}/>
             <Route path={'/'} exact component={Home}/>
             <Route path={'/venue/:vid'} exact component={SingleFullVenue}/>
             <Route path={'/'} component={Modal}/>
            </Router>

        )
    }

}
export default App