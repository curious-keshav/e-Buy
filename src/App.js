import React, { useEffect } from "react"
import './App.css';

import Header from './Header.js'
import Home from './Home.js'
import Checkout from './Checkout.js'
import Login from './Login.js'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {auth} from './firebase'
import { useStateValue } from "./StateProvider";


function App() {
  const[{},dispatch] = useStateValue();
useEffect(()=>{
  //will only run when the app component loads.
  auth.onAuthStateChanged(authUser =>{
    console.log('THE USER IS >>>',authUser);

    if(authUser){
      //the user just logged in/ the user was logged in
      dispatch({
        type:'SET_USER',
        user:authUser
      })
    }else{
      //the user is logged out
      dispatch({
        type:'SET_USER',
        user:null
      })
    }
  })
},[])

  return (
    <Router>    
        <div className="App">
      
          <Routes>
            <Route path="/login" element={[<Login/>]}/>
            <Route path="/checkout" element={[<Header/>,<Checkout/>]}/>
            <Route path="/"  element={[<Header/>,<Home/>]}/>
          </Routes> 
        </div>
    </Router>
  );
}

export default App;
