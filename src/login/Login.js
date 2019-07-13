import React from "react";
import Nav from "../layouts/Nav";
import LoginAPI from "./LoginAPI";
import {toast} from "react-toastify";
import API from "../api/API";
import {Link} from "react-router-dom";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.submitLogin = this.submitLogin.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.loggedIn = this.loggedIn.bind(this);
    }

    api = new LoginAPI(this);
    componentDidMount() {
        if (API.isLoggedIn())
            this.props.history.push("/");
    }

    loggedIn() {
        toast.success('با موفقیت وارد شدید!');
        if (localStorage.getItem("back_ticket"))
            this.props.history.push("/order");
        else
            this.props.history.push("/");
    }

    submitLogin(e) {
        e.preventDefault();
        this.api.login(this.state);
    }

    handleInput(e, inputName) {
        this.setState({[inputName]: e.target.value});
    }

    render() {
        return (

            <div className="container-fluid">
                <Nav login={API.isLoggedIn()}/>
                <div className="row no-gutters">
                    <div className="col">
                        <div>
                            <div className="">
                                <div className="row">
                                    <div className="col-lg-4 offset-lg-4">
                                        <div className="raja-box">
                                            <h3 className="text-center green-text">ورود به سایت</h3>
                                            <form className="register-form" onSubmit={this.submitLogin}>

                                                <div>
                                                    <label>نام کاربری</label>
                                                    <input type="text" className="form-control" required onChange={e => this.handleInput(e, 'username')} />
                                                </div>

                                                <br/>

                                                <div>
                                                    <label>کلمه عبور</label>
                                                    <input type="password" className="form-control" required onChange={e => this.handleInput(e, 'password')} />
                                                </div>

                                                <br/>

                                                <div className="text-center">
                                                    <button type="submit" className="btn btn-primary btn-pink">ورود به سایت</button>
                                                    <br/><br/>
                                                    <Link to="/register">هنوز عضو نشده اید ؟</Link>
                                                </div>

                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;