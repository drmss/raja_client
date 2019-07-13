import React from "react";
import Nav from "../layouts/Nav";
import {toast} from "react-toastify";
import API from "../api/API";
import HomeAPI from "./HomeAPI";
// import {ProjectListItem} from "./ProjectListItem";
// import { DatePicker} from 'react-persian-datepicker';
// import 'react-persian-datepicker/lib/styles/basic.css';



class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: [],
            from_id: localStorage.getItem('from_id') ? localStorage.getItem('from_id') : 0,
            to_id: localStorage.getItem('to_id') ? localStorage.getItem('to_id') : 0,
            passenger_count: localStorage.getItem('passenger_count') ? localStorage.getItem('passenger_count') : 1,
            date_go: localStorage.getItem('date_go') ? localStorage.getItem('date_go') : '1398-01-10',
            date_back: localStorage.getItem('date_back') ? localStorage.getItem('date_back') : '1398-01-20',
        };
        this.searchTickets = this.searchTickets.bind(this);
    };

    api = new HomeAPI(this);

    componentDidMount() {
        this.api.getCities();
    }


    searchTickets() {

        if (this.state.from_id === 0) {
            toast.error('مبدا انتخاب نشده است');
            return;
        }

        if (this.state.to_id === 0) {
            toast.error('مقصد انتخاب نشده است');
            return;
        }

        if (this.state.to_id === this.state.from_id) {
            toast.error('مبدا و مقصد یکسان است');
            return;
        }

        if (this.state.date_go > this.state.date_back) {
            toast.error('تاریخ رفت زود تر از تاریخ برگشت است');
            return;
        }

        localStorage.setItem('from_id', this.state.from_id);
        localStorage.setItem('to_id', this.state.to_id);
        localStorage.setItem('passenger_count', this.state.passenger_count);
        localStorage.setItem('date_go', this.state.date_go);
        localStorage.setItem('date_back', this.state.date_back);

        localStorage.removeItem("go_ticket");
        localStorage.removeItem("back_ticket");

        this.props.history.push("go_tickets");
    }

    handleInput(e, inputName) {
        this.setState({[inputName]: e.target.value});
    }

    render() {
        return (
            <div className="container-fluid">
                <Nav login={API.isLoggedIn()}/>

                <div className="row no-gutters">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="content">
                            <div className="search-box">
                                <div className="row">
                                    <div className="col-lg">
                                        <div className="form-group">
                                            <label htmlFor="from">مبدا</label>
                                            <select className="form-control" id="from" value={this.state.from_id} onChange={e => this.handleInput(e, 'from_id')}>
                                                <option value="0" disabled>انتخاب کنید</option>
                                                {
                                                    this.state.cities.map((city, i) => {
                                                        return <option value={city.id} key={i}>{city.name}</option>
                                                    })
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg">
                                        <div className="form-group">
                                            <label htmlFor="to">مقصد</label>
                                            <select className="form-control" id="to" value={this.state.to_id} onChange={e => this.handleInput(e, 'to_id')}>
                                                <option value="0" disabled>انتخاب کنید</option>
                                                {
                                                    this.state.cities.map((city, i) => {
                                                        return <option value={city.id} key={i}>{city.name}</option>
                                                    })
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg">
                                        <div className="form-group">
                                            <label htmlFor="pc">تعداد مسافران</label>
                                            <select className="form-control" id="pc" defaultValue={this.state.passenger_count} onChange={e => this.handleInput(e, 'passenger_count')}>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                <option>6</option>
                                                <option>7</option>
                                                <option>8</option>
                                                <option>9</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg">
                                        <div className="form-group">
                                            <label htmlFor="date_go">تاریخ رفت</label>
                                            <input type="text" className="form-control" id="date_go" value={this.state.date_go} onChange={e => this.handleInput(e, 'date_go')}/>
                                        </div>
                                    </div>
                                    <div className="col-lg">
                                        <div className="form-group">
                                            <label htmlFor="date_back">تاریخ برگشت</label>
                                            <input type="text" className="form-control" id="date_back" value={this.state.date_back} onChange={e => this.handleInput(e, 'date_back')}/>
                                        </div>
                                    </div>
                                    <div className="col-lg">
                                        <button className="btn btn-primary btn-pink" onClick={this.searchTickets}>جستجو بلیط...</button>
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

export default Home;