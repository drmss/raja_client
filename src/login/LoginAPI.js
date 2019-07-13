import API from "../api/API";
import {toast} from "react-toastify";
import base64url from "base64url";

class LoginAPI extends API {
    constructor(object) {
        super();
        this.target = object;
    }

    target = null;

    login(user) {
        let data = this.prepareData(user);
        this.server().post('/login', data)
            .then(response => {
                    if (response.data === 'invalid login') {
                        toast.error('اطلاعات ورود صحیح نیست');
                    } else {
                        let token = response.data;
                        let data = this.parseJwt(token);
                        localStorage.setItem('raja_token', token);
                        localStorage.setItem('raja_user_id', data.userId);
                        this.target.loggedIn();
                    }
                }
            ).catch(error => {
                if (error.response.status === 403)
                    toast.error('اطلاعات ورود صحیح نیست');
                else
                    toast.error('خطا در ارتباط با سرور');
            });
    }

    parseJwt(input) {
        input = input.split('.')[1];
        input = base64url.decode(input);
        return JSON.parse(input);
    }

    prepareData(user) {
        var str = "";
        str += "username=" + user.username + "&";
        str += "password=" + user.password;
        return str;
    }
}

export default LoginAPI;
