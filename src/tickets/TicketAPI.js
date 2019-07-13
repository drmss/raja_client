import API from "../api/API";
import {toast} from "react-toastify";

export class TicketAPI extends API {
    constructor(object) {
        super();
        this.target = object;
    }

    target = null;

    searchTicket(fromId, toId, date) {
        this.server().get('/search?from_id=' + fromId + '&to_id=' + toId + '&date=' + date)
            .then(response => {
                    this.target.setState({tickets: response.data})
                }
            ).catch( error => {
                toast.error('خطا در ارتباط با سرور');
            });
    }
}

export default TicketAPI;
