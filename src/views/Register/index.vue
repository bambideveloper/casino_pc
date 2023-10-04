<template>
  <div class="w-full py-5 px-0 bg-[#1c1c1c]">
    <div class="w-[1200px] mx-auto overflow-hidden bg-black rounded-[15px] box-shadow">
      <div class="w-[780px] float-left">
        <div class="flex flex-row">
          <h2 class="text-[28px] text-[#333] h-[85px] leading-[85px] indent-[50px]">
            欢迎注册
          </h2>
          <span class="text-[28px] h-[85px] leading-[85px] text-[#fbe59c]">register</span>
        </div>
        <div class="pb-[20px] pl-[165px]">
          <ul class="list-none m-0 p-0">
            <li class="flex flex-row pt-[18px]">
              <div
                class="flex flex-row w-[308px] h-[42px] overflow-hidden border border-gray-300 rounded-[8px] float-left">
                <div class="w-[45px] h-[40px] bg-[#e9e8e8] relative">
                  <img class="block absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
                    src="@/assets/images/register/user.png" />
                </div>
                <input class="input-style h-full indent-[15px] text-white bg-transparent text-xs" type="text"
                  placeholder="用户名" v-model="loginName" />
              </div>
              <p class="pl-[15px] leading-[42px] text-[#b8b8b8] float-left">
                <span class="text-[red]">*</span>用户名必须是6-15位的字母或数字
              </p>
            </li>
            <li class="flex flex-row pt-[18px]">
              <div
                class="flex flex-row w-[308px] h-[42px] overflow-hidden border border-gray-300 rounded-[8px] float-left">
                <div class="w-[45px] h-[40px] bg-[#e9e8e8] relative">
                  <img class="block absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
                    src="@/assets/images/register/lock.png" />
                </div>
                <input class="input-style h-full indent-[15px] text-white bg-transparent text-xs" type="password"
                  placeholder="密码" v-model="password" />
              </div>
              <p class="pl-[15px] leading-[42px] text-[#b8b8b8] float-left">
                <span class="text-[red]">*</span>请输入8-16位字母和数字
              </p>
            </li>
            <li class="flex flex-row pt-[18px]">
              <div
                class="flex flex-row w-[308px] h-[42px] overflow-hidden border border-gray-300 rounded-[8px] float-left">
                <div class="w-[45px] h-[40px] bg-[#e9e8e8] relative">
                  <img class="block absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
                    src="@/assets/images/register/lock.png" />
                </div>
                <input class="input-style h-full indent-[15px] text-white bg-transparent text-xs" type="password"
                  placeholder="确认密码" v-model="confirmPassword" />
              </div>
              <p class="pl-[15px] leading-[42px] text-[#b8b8b8] float-left">
                <span class="text-[red]">*</span>请再次确认密码
              </p>
            </li>
            <li class="flex flex-row pt-[18px]">
              <div
                class="flex flex-row w-[308px] h-[42px] overflow-hidden border border-gray-300 rounded-[8px] float-left">
                <div class="w-[45px] h-[40px] bg-[#e9e8e8] relative">
                  <img class="block absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
                    src="@/assets/images/register/user.png" />
                </div>
                <input class="input-style h-full indent-[15px] text-white bg-transparent text-xs" type="text"
                  placeholder="姓名" v-model="username" />
              </div>
              <p class="pl-[15px] leading-[42px] text-[#b8b8b8] float-left">
                <span class="text-[red]">*</span>姓名必须是中文
              </p>
            </li>
            <li class="flex flex-row pt-[18px]">
              <div
                class="flex flex-row w-[308px] h-[42px] overflow-hidden border border-gray-300 rounded-[8px] float-left">
                <div class="w-[45px] h-[40px] bg-[#e9e8e8] relative">
                  <img class="block absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
                    src="@/assets/images/register/phone.png" />
                </div>
                <input class="input-style h-full indent-[15px] text-white bg-transparent text-xs" type="text"
                  placeholder="手机号" v-model="phoneNumber" />
              </div>
              <p class="pl-[15px] leading-[42px] text-[#b8b8b8] float-left">
                <span class="text-[red]">*</span>手机号必须是11位数字
              </p>
            </li>
            <li class="flex flex-row pt-[18px]">
              <div
                class="flex flex-row w-[308px] h-[42px] overflow-hidden border border-gray-300 rounded-[8px] float-left">
                <div class="w-[45px] h-[40px] bg-[#e9e8e8] relative">
                  <img class="block absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
                    src="@/assets/images/register/verify.png" />
                </div>
                <input class="input-style h-full indent-[15px] text-white bg-transparent text-xs" type="text"
                  placeholder="验证码" />
              </div>
              <p class="pl-[15px] leading-[42px] text-[#b8b8b8] float-left">
                <span class="text-[red]">*</span>请输入验证码
              </p>
            </li>
            <li class="flex flex-row pt-[18px]">
              <div
                class="flex flex-row w-[308px] h-[42px] overflow-hidden border border-gray-300 rounded-[8px] float-left">
                <div class="w-[45px] h-[40px] bg-[#e9e8e8] relative">
                  <img class="block absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
                    src="@/assets/images/register/user.png" />
                </div>
                <input class="input-style h-full indent-[15px] text-white bg-transparent text-xs" type="text"
                  v-model="referral_code" placeholder="请输入您的邀请码" />
              </div>
              <p class="pl-[15px] leading-[42px] text-[#b8b8b8] float-left">
                <span class="text-[red]">*</span>请输入您的邀请码
              </p>
            </li>
            <button @click="registerSubmit">立即注册</button>
            <h3>
              已经有账号？ 请<span class="text-[#fbe59c] cursor-pointer">立即登录</span>
            </h3>
          </ul>
        </div>
      </div>
      <div class="right-box float-right mt-[22px] border-l-[1px] border-[#e9e9e9] border-solid box-border">
        <div class="w-full text-center">
          <canvas width="145" height="145"
            class="m-auto p-1 bg-white w-[116px] h-[116px] border-2 border-white aspect-auto"></canvas>
        </div>
        <div class="w-full px-0 py-[15px] text-center">
          <p class="text-[#d7d7d7] text-sm leading-7">扫码下载开元棋牌APP</p>
          <span class="text-[#fbe59c] inline-block cursor-pointer text-sm leading-7">（ iOS / Android 通用 ）</span>
        </div>
        <div class="w-full">
          <img src="@/assets/images/register/regPhone.png" alt="" data-xblocker="passed"
            class="block mx-auto w-[253px] h-[226px]" />
        </div>
        <div class="w-full px-0 py-[15px] text-center">
          <p class="text-[#d7d7d7] text-sm leading-7">
            H5页面访问: &nbsp;<span class="text-sm leading-7 text-[#fbe59c]">5t5111.com</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from "../../store/auth";
import { showToast } from "vant";
import { ElLoading } from "element-plus";
import { ElNotification, ElMessageBox } from "element-plus";
export default {
  name: "Header",
  setup() {
    const { signUp } = useAuthStore();
    return {
      signUp,
    };
  },
  data() {
    return {
      username: "",
      loginName: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
      inviter_id: "",
      referral_code: "",
    };
  },
  methods: {
    registerSubmit: async function () {
      const loginNameRegex = /^[0-9a-zA-Z]{6,15}$/;
      // const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,16}$/;
      const passwordRegex = /^[0-9a-zA-Z]{8,16}$/;
      const chineseRegex = /^[\u4e00-\u9fa5]+$/;
      if (!loginNameRegex.test(this.loginName)) {
        showToast("用户名必须是6-15位的字母或数字");
      } else if (this.password.trim() === "") {
        showToast("登录密码不能为空");
      } else if (!passwordRegex.test(this.password)) {
        showToast(
          "密码必须同时包含大写和小写字母、数字组合，且只能是数字和字母，8-16位"
        );
      } else if (this.confirmPassword.trim() === "") {
        showToast("确认密码不能为空");
      } else if (this.password !== this.confirmPassword) {
        showToast("登录密码与确认密码不一致");
      } else if (this.username.trim() === "") {
        showToast("您的姓名不能为空");
      } else if (!chineseRegex.test(this.username)) {
        showToast("姓名必须是中文");
      } else if (this.phoneNumber.trim() === "") {
        showToast("手机号不能为空");
      } 
      // else if (this.referral_code == "") {
      //   showToast("请输入您的邀请码");
      // } 
      else {
        const loading = ElLoading.service({
          lock: true,
          text: "加载中...",
          background: "rgba(0, 0, 0, 0.7)",
        });

        await this.signUp(
          this.username,
          this.password,
          this.inviter_id,
          this.loginName,
          this.phoneNumber,
          this.referral_code,
        );

        loading.close();

        if (this.success) {
          ElNotification({
            title: "成功",
            message: "操作成功。",
            type: "success",
          });
          this.username = "";
          this.password = "";
          this.confirmPassword = "";
          this.loginName = "";
          this.phoneNumber = "";
        } else {
          ElNotification({
            title: "错误",
            message: this.errMessage,
            type: "error",
          });
        }
      }
    },
  },
  computed: {
    success: function () {
      const { getSuccess } = useAuthStore();
      return getSuccess
    },
    errMessage: function () {
      const { getErrMessage } = useAuthStore();
      return getErrMessage
    }
  }
};
</script>

<style scoped>
.box-shadow {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.input-style {
  width: calc(100% - 45px);
}

li p {
  font-size: 12px;
}

ul button {
  width: 308px;
  height: 55px;
  margin-top: 20px;
  border-radius: 26px;
  text-align: center;
  line-height: 55px;
  color: #000;
  font-size: 16px;
  background: linear-gradient(90deg, #fff1c5, #e9d481);
  border: none;
  cursor: pointer;
}

ul h3 {
  padding-top: 25px;
  width: 308px;
  text-align: center;
  color: #999;
  font-size: 14px;
}

.right-box {
  width: calc(100% - 780px);
}
</style>
