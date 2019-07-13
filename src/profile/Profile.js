import React from "react";
import Nav from "../layouts/Nav";
import {toast} from "react-toastify";
import API from "../api/API";
import ProfileAPI from "./ProfileAPI";
import ProfileTicket from "./ProfileTicket"

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tickets: [],
        };
    }

    api = new ProfileAPI(this);
    componentDidMount() {
        if (! API.isLoggedIn()) {
            toast.warn('باید به پنل کاربری خود وارد شوید');
            this.props.history.push("/login");
        }

        this.api.getUserTickets();
    }

    cancel = (id) => {
        this.api.cancel(id);
    };

    canceled = () => {
        toast.success('بلیط با موفقیت کنسل شد');
        this.api.getUserTickets();
    };

    render() {
        return (
            <div className="container-fluid">
                <Nav login={API.isLoggedIn()}/>

                <div className="row no-gutters">
                    <div className="col">
                        <div>
                            <div className="">
                                <div className="row">
                                    <div className="col-lg-6 offset-lg-3">
                                        <div className="raja-box">
                                            <h3 className="text-center green-text">بلیط های خریداری شده</h3>
                                            <table className="table table-bordered table-striped">
                                                <thead>
                                                <tr>
                                                    <th>تاریخ</th>
                                                    <th>مبدا</th>
                                                    <th>مقصد</th>
                                                    <th>تعداد مسافر</th>
                                                    <th>امکانات</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {
                                                    this.state.tickets.map((ticket, i) => {
                                                        return <ProfileTicket ticket={ticket} key={i} f={this.cancel}/>
                                                    })
                                                }
                                                </tbody>
                                            </table>
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

export default Profile;