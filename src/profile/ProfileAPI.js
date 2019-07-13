import API from "../api/API";
import {toast} from "react-toastify";

class ProfileAPI extends API {
    constructor(object) {
        super();
        this.target = object;
    }

    target = null;

    getUserTickets() {
        this.server().get('/profile')
            .then(response => {
                    this.target.setState({tickets: response.data})
                }
            ).catch( error => {
                toast.error('خطا در ارتباط با سرور');
            });
    }

    cancel(id) {
        this.server().get('/cancel?user_ticket_id=' + id)
            .then(response => {
                    this.target.canceled();
                }
            ).catch( error => {
                toast.error('خطا در ارتباط با سرور');
        });
    }
}

export default ProfileAPI;