import React from "react";


class ProfileTicket extends React.Component {

    cancel = () => {
        this.props.f(this.props.ticket.id);
    };

    render() {
        return (<tr>
                <td>{this.props.ticket.date}</td>
                <td>{this.props.ticket.from.name}</td>
                <td>{this.props.ticket.to.name}</td>
                <td>{this.props.ticket.passenger_count}</td>
                <td>
                    <button className="btn btn-sm btn-danger" onClick={this.cancel}>کنسل</button>
                </td>
            </tr>
        );
    }
}

export default ProfileTicket;