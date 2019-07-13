import API from "../api/API";
import {toast} from "react-toastify";
import base64url from "base64url";

class RegisterAPI extends API {
    constructor(object) {
        super();
        this.target = object;
    }

    target = null;

    register(user) {
        let data = this.prepareData(user);
        this.server().post('/register', data)
            .then(response => {
                    if (response.data === 'username is exist.') {
                        toast.warn('نام کاربری وارد شده در سیستم موجود است.');
                    }
                    else {
                        let token = response.data;
                        let data = this.parseJwt(token);
                        localStorage.setItem('raja_token', token);
                        localStorage.setItem('raja_user_id', data.userId);
                        this.target.registered();
                    }
                }
            );
    }

    parseJwt(input) {
        input = input.split('.')[1];
        input = base64url.decode(input);
        return JSON.parse(input);
    }

    prepareData(user) {
        let str = "";
        str += "name=" + user.name + "&";
        str += "username=" + user.username + "&";
        str += "password=" + user.password;
        return str;
    }
}

export default RegisterAPI;
