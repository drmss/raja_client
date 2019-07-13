import React from "react";
import Nav from "../layouts/Nav";
import RegisterAPI from "./RegisterAPI";
import {toast} from "react-toastify";
import API from "../api/API";
import {Link} from "react-router-dom";

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.submitRegister = this.submitRegister.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    api = new RegisterAPI(this);
    componentDidMount() {
        if (API.isLoggedIn())
            this.props.history.push("/");
    }

    checkPassword() {
        if (this.state.password !== this.state.password_confirmation){
            toast.error("تکرار کلمه عبور صحیح نیست!");
            return false;
        }
        return true;
    }

    submitRegister(e) {
        e.preventDefault();
        if(!this.checkPassword())
            return;
        this.api.register(this.state);
    }

    handleInput(e, inputName) {
        this.setState({[inputName]: e.target.value});
    }

    registered() {
        toast.success('با موفقیت عضو شدید!');
        if (localStorage.getItem("back_ticket"))
            this.props.history.push("/order");
        else
            this.props.history.push("/");
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
                                            <h3 className="text-center green-text">عضویت در سایت</h3>
                                            <form className="register-form" onSubmit={this.submitRegister}>

                                                <div>
                                                    <label>نام و نام خانوادگی</label>
                                                    <input type="text" className="form-control" required onChange={e => this.handleInput(e, 'name')} />
                                                </div>

                                                <br/>

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

                                                <div>
                                                    <label>تکرار کلمه عبور</label>
                                                    <input type="password" className="form-control" required onChange={e => this.handleInput(e, 'password_confirmation')} />
                                                </div>

                                                <br/>

                                                <div className="text-center">
                                                    <button type="submit" className="btn btn-primary btn-pink">عضویت در سایت</button>
                                                    <br/><br/>
                                                    <Link to="/login">قبلا عضو شده اید؟</Link>
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

export default Register;