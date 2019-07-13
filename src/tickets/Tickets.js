import React, {Component} from "react";
import Ticket from "./Ticket";

export class Tickets extends Component {
    render() {
        return (
            <div>
                {
                    this.props.tickets.map((ticket, i) => {
                        return <Ticket key={i} ticket={ticket} passengerCount={this.props.passengerCount} f={this.props.f} />
                    })
                }
            </div>
        );
    }
}

export default Tickets;