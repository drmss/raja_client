import React from "react";
import Nav from "../layouts/Nav";
import API from "../api/API";
import TicketApi from "./TicketAPI";
import Tickets from "./Tickets";

class GoTickets extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tickets: [],
        }
    }

    api = new TicketApi(this);

    componentDidMount() {
        this.api.searchTicket(
            localStorage.getItem("from_id"),
            localStorage.getItem("to_id"),
            localStorage.getItem("date_go")
        );
    }


    getDate = () => {
        return localStorage.getItem("date_go");
    };

    getPassengerCount = () => {
        return localStorage.getItem("passenger_count");
    };

    selectTicket = (ticket) => {
        localStorage.setItem("go_ticket", ticket.id);
        this.props.history.push("back_tickets");
    };

    render() {
        return (
            <div className="container-fluid">
                <Nav login={API.isLoggedIn()}/>
                <div className="row no-gutters">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="content">
                            <div className="page-title">
                                انتخاب بلیط رفت در تاریخ <span>{ this.getDate() }</span>
                            </div>
                            <div className="search-list">

                                <Tickets tickets={this.state.tickets} passengerCount={this.getPassengerCount() } f={this.selectTicket} />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default GoTickets;