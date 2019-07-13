import React from "react";
import axios from "axios";

class API extends React.Component {
    server() {
        return axios.create({
            baseURL: 'http://127.0.0.1:8080/',
            headers: {
                'Authorization': API.getToken()
            }
        });
    }

    static getCurrentUserId() {
        return localStorage.getItem("raja_user_id");
    }

    static getToken() {
        return localStorage.getItem("raja_token");
    }

    static isLoggedIn() {
        return localStorage.getItem("raja_token") !== null && localStorage.getItem("raja_token") !== "";
    }
}

export default API;