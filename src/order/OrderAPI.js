import API from "../api/API";
import {toast} from "react-toastify";

export class OrderAPI extends API {
    constructor(object) {
        super();
        this.target = object;
    }

    target = null;

    order(persons, go_ticket, back_ticket) {
        this.server().post('/order', "data=" + JSON.stringify(persons) + "&go_ticket_id=" + go_ticket + "&back_ticket_id=" + back_ticket)
            .then(response => {
                    this.target.successfulOrder();
                }
            ).catch( error => {
                toast.error('خطا در ارتباط با سرور');
            });
    }
}

export default OrderAPI;
