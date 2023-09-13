import { defineStore } from "pinia";
import axios from "axios";
import config from "../config"
import router from "../router";
import { showToast } from 'vant';
import { GET_PROFILE } from "../config"
import { BASE_URL } from "../config"
import { PASSWORD_CHANGE } from "../config"
import socket from "../utils/socket";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    token: localStorage.getItem("token"),
    success: false,
    errMessage: "",
    user: {
      UserName: "" as string,
      Money: 0 as number | string
    },
  }),
  getters: {
    getToken: (state) => state.token,
    getUser: (state) => state.user,
    getSuccess: (state) => state.success,
    getErrMessage: (state) => state.errMessage,
  },
  actions: {
    logout() {
      this.user = {
        UserName: "",
        Money: 0
      };
      this.token = "";
    },
    setToken(token: string) {
      this.token = token;
    },
    setUser(user: any) {
      this.user = user;
    },
    setMoney(money: number) {
      this.user["Money"] = money;
    },
    setUserMoney(money: number) {
      this.user["Money"] = Number(this.user["Money"]) - money;
    },
    setSuccess(success: boolean) {
      this.success = success;
    },
    setErrMessage(errMessage: string) {
      this.errMessage = errMessage;
    },
    async signIn(login_name: string, password: string) {
      try {
        this.setSuccess(false);
        let url = config.api.SIGN_IN;
        let data = {
          LoginName: login_name,
          password: password
        };
        const response = await axios.post(url, data);
        console.log("reponese: ", response.data.data)
        if (response.status === 200) {
          this.setSuccess(true);
          this.setToken(response.data.data.access_token as string);
          localStorage.setItem("token", (response.data.data.access_token));
          this.setUser(response.data.data as any)
          socket.io.emit("join", response.data.data.UserName);
          // setInterval(async () => {
          //   await this.getProfile(this.token);
          // }, 10000)
        }
      } catch (error: any) {
        console.log(error);
        if (error.response.data.message === "Please enter valid registered UserName.") {
          showToast('用户名不匹配')
        } else if (error.response.data.message === "Incorrect name or password") {
          showToast('密码不匹配!')
        } else if (error.response.data.message === "Due to too many wrong passwords, your account has been locked!") {
          showToast('由于密码错误次数过多,您的帐号已经被锁定。请联系在线客服解锁!!!')
        } else if (error.response.data.message === "The password must be at least 6 characters.") {
          showToast('密码必须至少为 6 个字符。')
        } else if (error.response.data.message === "account suspended") {
          showToast('您的帐户已禁用。')
        }
      }
    },
    async signUp(username: string, password: string, inviter_id: string, login_name: string, phone_number: any) {
      try {
        this.setSuccess(false);
        let url = config.api.SIGN_UP;
        let data = {
          UserName: username,
          password: password,
          inviter_id: inviter_id,
          phone_number: phone_number,
          login_name: login_name
        };
        const response = (await axios.post(url, data));
        if (response.status == 200) {
          this.setSuccess(true);
          this.signIn(login_name, password);
        }
      } catch (e: any) {
        console.log(e.response);
        if (e.response.status == 400)  {
          this.setErrMessage(e.response.data.message);
        }
      }
    },
    dispatchUserMoney(money: number) {
      this.setUserMoney(money);
    },
    async getProfile(token: any) {
      try {
        const config = {
          headers: {
            "Authorization": `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*"
          },
        };
        const response = await axios.post(`${BASE_URL}${GET_PROFILE}`, {}, config);
        if (response.status === 200) {
          this.setUser(response.data.data);
        }
      } catch (e) {
        return e;
      }
    },
    async dispatchChangePassword (data: any, token: string) {      
      this.setSuccess(false);
      try {
        const config = {
          headers: {
            "Authorization": `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*"
          },
        };
        const response = await axios.post(`${BASE_URL}${PASSWORD_CHANGE}`, data, config);
        if (response.status === 200) {
          this.setSuccess(true);
        }
      } catch (e) {
        return e;
      }
    },
    dispatchSetMoney(money: number) {
      this.setMoney(money);
    },
    dispatchLogout() {
      this.logout();
    }
  },
});
