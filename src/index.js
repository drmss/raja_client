import React from 'react';
import {render} from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Profile from "./profile/Profile";
import Home from "./home/Home";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Register from "./register/Register";
import Login from "./login/Login";
import GoTickets from "./tickets/GoTickets";
import BackTickets from "./tickets/BackTickets";
import Order from "./order/Order";

toast.configure({
    position: "top-left",
    autoClose: 5000,
    hideProgressBar: false,
    newestOnTop: true,
    closeOnClick: true,
    rtl: true,
    pauseOnVisibilityChange: true,
    draggable: true,
    pauseOnHover: true,
});



render((
    <Router>

        <Route exact path="/" component={Home}/>
        <Route path="/profile" component={Profile}/>

        <Route path="/go_tickets" component={GoTickets}/>
        <Route path="/back_tickets" component={BackTickets}/>

        <Route path="/order" component={Order}/>

        <Route path="/register" component={Register}/>
        <Route path="/login" component={Login}/>
    </Router>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
