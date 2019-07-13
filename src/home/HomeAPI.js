import API from "../api/API";
import {toast} from "react-toastify";

class HomeAPI extends API {
    constructor(object) {
        super();
        this.target = object;
    }

    target = null;

    getCities() {
        this.server().get('/cities')
            .then(response => {
                    this.target.setState({cities: response.data})
                }
            ).catch(error => {
                if (typeof error.response === "undefined") {
                    toast.error('خطا در ارتباط با سرور');
                    return;
                }
                let code = error.response.status;
                if (code === 401 || code === 403)
                    this.target.redirectLogin();
                else
                    toast.error('خطا در ارتباط با سرور');
            });
    }

    searchUsers(searchFor) {
        this.server().get('/user/search?searchFor=' + searchFor)
            .then(response => {
                    this.target.setState({users: response.data})
                }
            ).catch( error => {
                if (typeof error.response === "undefined") {
                    toast.error('خطا در ارتباط با سرور');
                    return;
                }
                let code = error.response.status;
                if (code === 401 || code === 403)
                    this.target.redirectLogin();
                else
                    toast.error('خطا در ارتباط با سرور');
            });
    }

    getProjects() {
        this.server().get('/project')
            .then(response => {
                    this.target.setState({projects: response.data});
                }
            ).catch( error => {
                if (typeof error.response === "undefined") {
                    toast.error('خطا در ارتباط با سرور');
                    return;
                }
                let code = error.response.status;
                if (code === 401 || code === 403)
                    this.target.redirectLogin();
                else
                    toast.error('خطا در ارتباط با سرور');
            });
    }

    searchProjects(searchFor) {
        this.server().get('/project/search?searchFor=' + searchFor)
            .then(response => {
                    this.target.setState({projects: response.data})
                }
            ).catch( error => {
                if (error.response === null) {
                    toast.error('خطا در ارتباط با سرور');
                    return;
                }
                let code = error.response.status;
                if (code === 401 || code === 403)
                    this.target.redirectLogin();
                else
                    toast.error('خطا در ارتباط با سرور');
            });
    }
}

export default HomeAPI;