import React, {Component} from "react";
import PersianNumber from "../utilities/PersianNumber";

export class Ticket extends Component {

    constructor(props) {
        super(props);
        this.selectBtn = this.selectBtn.bind(this);
        this.selectTicket = this.selectTicket.bind(this);
    }

    selectBtn = function (hasCapacity) {
        if (hasCapacity)
            return (
                <button onClick={this.selectTicket} className="btn btn-primary btn-pink">انتخاب بلیط </button>
            );
        else
            return (<p>عدم ظرفیت</p>);
    };

    selectTicket = () => {
        this.props.f(this.props.ticket);
    };


    render() {
        return (
            <div className="search-item">
                <div className="row">
                    <div className="col-lg">
                        <div className="from">از { this.props.ticket.from.name } ساعت {this.props.ticket.from_time}</div>
                        <div className="to">به { this.props.ticket.to.name } ساعت {this.props.ticket.to_time}</div>
                    </div>
                    <div className="col-lg">
                        <div className="price"><PersianNumber number={this.props.ticket.price}/> تومان</div>
                    </div>
                    <div className="col-lg text-right">
                        <div className="remeang">ظرفیت باقیمانده: {this.props.ticket.capacity} نفر</div>
                        {this.selectBtn(this.props.passengerCount <= this.props.ticket.capacity)}
                    </div>
                </div>
            </div>

        );
    }
}

export default Ticket;