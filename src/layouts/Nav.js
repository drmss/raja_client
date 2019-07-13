import React from "react";
import '../assets/css/style.css'
// import 'react-persian-datepicker/lib/styles/basic.css';
import {Link} from "react-router-dom";
import {toast} from "react-toastify";

class Nav extends React.Component{
    logout () {
        localStorage.removeItem('raja_token');
        toast.success("با موفقیت خارج شدید");
    }

    getContent = function (login) {
        if (login)
            return (
                <div className="nav-links">
                    <Link to="/profile">حساب کاربری</Link>
                    <Link onClick={this.logout} to="/login">خروج</Link>
                </div>
            );
        else
            return (
                <div className="nav-links">
                    <Link to="/login">ورود</Link>
                    <Link to="/register">عضویت</Link>
                </div>
            );
    };

    render() {
        return (
            <div className="top-bar row">
                <div className="col">
                    <Link to="/">سامانه خرید آنلاین بلیط قطار</Link>
                </div>
                <div className="col-auto">
                    {this.getContent(this.props.login)}
                </div>
            </div>
        )
    }

    static defaultProps = {
        login: true
    };
}
export default Nav;