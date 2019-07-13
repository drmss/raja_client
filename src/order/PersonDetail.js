import React, {Component} from "react";

export class PersonDetail extends Component {

    handleInput(e, inputName, number) {
        this.props.f(number, inputName, e.target.value);
    }

    render() {
        return (
            <div className="person-detail">
                <span className="num">{this.props.number + 1}</span>
                <div className="row">
                    <div className="col-lg-3">
                        <div className="form-group">
                            <label>نام</label>
                            <input className="form-control" required onChange={e => this.handleInput(e, 'first_name', this.props.number)} />
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="form-group">
                            <label>نام خانوادگی</label>
                            <input className="form-control" required onChange={e => this.handleInput(e, 'last_name', this.props.number)}/>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="form-group">
                            <label>کد ملی</label>
                            <input type="number" className="form-control" required onChange={e => this.handleInput(e, 'code_melli', this.props.number)}/>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="form-group">
                            <label>سن</label>
                            <input type="number" className="form-control" required onChange={e => this.handleInput(e, 'age', this.props.number)}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PersonDetail;