/* eslint-disable prettier/prettier */
import Vue from "vue";
import axios from "axios";
const api = axios.create({
    headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    },
    auth: {
        username: "2533",
        password: "d84694f2a9ef9163bfc5e4faac17afcb278445bc"
    },
    withCredentials : true,
    crossDomain: true,
});

Vue.prototype.$api = api;