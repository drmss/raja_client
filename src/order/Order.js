import React, {Component} from "react";
import API from "../api/API";
import OrderAPI from "./OrderAPI";
import Nav from "../layouts/Nav";
import PersonDetail from "./PersonDetail";
import {toast} from "react-toastify";

export class Order extends Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: [],
        };

        for (let i = 0; i < localStorage.getItem('passenger_count'); i++) {
            this.state.persons.push({
                first_name: '',
                last_name: '',
                code_melli: '',
                age: 0,
            });
        }

        this.inputPerson = this.inputPerson.bind(this);
    }

    api = new OrderAPI(this);
    componentDidMount() {
        if (! API.isLoggedIn()) {
            toast.warn('باید به پنل کاربری خود وارد شوید');
            this.props.history.push("/login");
        }
    }

    personTable = () => {
        let table = [];

        for (let i = 0; i < localStorage.getItem('passenger_count'); i++) {
            table.push(
                <PersonDetail f={this.inputPerson} number={i} key={i} />
            );
        }
        return table;
    };

    submitForm = (e) => {
        e.preventDefault();
        this.api.order(this.state.persons, localStorage.getItem("go_ticket"), localStorage.getItem("back_ticket"));
    };

    successfulOrder = (e) => {
        toast.success('بلیط های مورد نظر با موفقیت خریداری شد.');
        this.props.history.push("/");
    };

    inputPerson = (number, field, value) => {
        let persons = this.state.persons;
        persons[number][field] = value;
        this.setState({persons: persons});
    };

    render() {
        return (
            <div className="container-fluid">
                <Nav login={API.isLoggedIn()}/>
                <div className="row no-gutters">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="content">
                            <div className="page-title">ورود مشخصات مسافران</div>
                            <div className="search-list">
                                <form onSubmit={this.submitForm}>
                                    {this.personTable()}
                                    <div className="text-center">
                                        <button className="btn btn-primary btn-pink">ثبت اطلاعات و خرید نهایی بلیط</button>
                                        <br/><br/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Order;