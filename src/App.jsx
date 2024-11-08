// import logo from './logo.svg';
// import './App.css';
// import Navbar from './Componets/Navbar';
// import {Outlet} from "react-router-dom"
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// function App() {
//   return (
//    <>
// <Navbar/>
// <Outlet/>
//    </>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Search from './pages/Search';
import Notifications from './pages/Notifications';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/profile" component={Profile} />
          <Route path="/search" component={Search} />
          <Route path="/notifications" component={Notifications} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

