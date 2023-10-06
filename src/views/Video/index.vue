<script setup>
</script>
<template>
  <div class="w-full qp-box h-[835px] relative flex flex-wrap overflow-hidden">
    <div class="flex justify-center w-full h-full relative">
      <div class="w-full h-full overflow-hidden">
        <carousel :items-to-show="1" :wrap-around="true" :modelValue="typeId - 1">
          <slide v-for="item in list" :key="item" class="w-full cursor-pointer select-none">
            <div class="qp-box w-full bg-cover bg-no-repeat bg-top">
              <div class="w-[1200px] mx-auto relative h-[835px]">
                <div :class="item.id === typeId
                  ? 'animate-fadeInLeft float-left w-1/2 h-full relative'
                  : 'float-left w-1/2 h-full relative'
                  ">
                  <img :src="item.leftImage" alt="banner" class="bottom-0 block absolute left-[50%] translate-x-[-50%]" />
                </div>
                <div class="animate-fadeInTop relative h-full float-right w-1/2">
                  <span @click="redirectRealGame(item.redirect)"
                    class="block absolute left-[50%] translate-x-[-50%] cursor-pointer bottom-[450px] w-[230px] h-[60px] rounded-[30px] text-center leading-[60px] text-black font-bold text-2xl animate-abcAnimate btn-bg">
                    进入游戏
                  </span>
                </div>
              </div>
            </div>
          </slide>

          <template #addons>
            <navigation />
            <pagination />
          </template>
        </carousel>

        <ul class="z-10 w-full absolute bottom-[265px] text-center">
          <li v-for="item in btnList" :key="item" :class="{
            'btn-list text-[#fbe59c] hover:text-black text-base inline-block w-[105px] h-[44px] mx-2 text-center leading-[44px] rounded-[10px] cursor-pointer': true,
            active: item.id === typeId,
          }" @click="() => handleType(item.id)">
            {{ item.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { useAuthStore } from "../../store/auth";
import { ElLoading } from "element-plus";
import { ElNotification, ElMessageBox } from "element-plus";
import { ogGameStore } from "../../store/og_game";
import { agGameStore } from "../../store/ag_game";
import { bbinGameStore } from "../../store/bbin_game";
import { useSysConfigStore } from "../../store/sysConfig";
import {showToast} from 'vant'

export default {
  name: "Video",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      btnList: [
        { id: 1, name: "OG东方馆" },
        { id: 2, name: "AG国际厅" },
        { id: 3, name: "AG旗舰厅" },
        { id: 4, name: "AGVIP厅" },
        { id: 5, name: "BBIN馆" },
      ],
      list: [
        {
          id: 1,
          leftImage: new URL(
            "@/assets/images/video/peoDG.png",
            import.meta.url
          ),
          rightImage: new URL(
            "@/assets/images/video/wdDG.png",
            import.meta.url
          ),
          redirect: 'OG_GAME',
        },
        {
          id: 2,
          leftImage: new URL(
            "@/assets/images/video/peoBBIN.png",
            import.meta.url
          ),
          rightImage: new URL(
            "@/assets/images/video/wdBBIN.png",
            import.meta.url
          ),
          redirect: 'AG_GAME_2',
        },
        {
          id: 3,
          leftImage: new URL(
            "@/assets/images/video/peoHJ.png",
            import.meta.url
          ),
          rightImage: new URL(
            "@/assets/images/video/wdHJ.png",
            import.meta.url
          ),
          redirect: 'AG_GAME_1',
        },
        {
          id: 4,
          leftImage: new URL(
            "@/assets/images/video/peoBGZR.png",
            import.meta.url
          ),
          rightImage: new URL(
            "@/assets/images/video/wdBGZR.png",
            import.meta.url
          ),
          redirect: 'AG_GAME_4',
        },
        {
          id: 5,
          leftImage: new URL(
            "@/assets/images/video/peoIGZR.png",
            import.meta.url
          ),
          rightImage: new URL(
            "@/assets/images/video/wdOBG.png",
            import.meta.url
          ),
          redirect: 'BBIN_GAME_1',
        },
      ],
      typeId: 1,
    };
  },
  methods: {
    handleType(id) {
      this.typeId = id;
    },
    redirectRealGame: async function (redirect) {
      if (this.user.id == undefined) {
        showToast("您还没有登录或登录超时，请重新登录......");
        return;
      }
      if ((this.user.OG == 0 || this.sysConfigItem.OG == 0 || this.sysConfigItem.OG_Repair == 1) && redirect == "OG_GAME") {
        showToast("开元棋牌维护中，请稍候再试......");
        return;
      }
      if ((this.user.AG == 0 || this.sysConfigItem.AG == 0 || this.sysConfigItem.AG_Repair == 1) && (redirect == "AG_GAME_2" || redirect == "AG_GAME_1" || redirect == "AG_GAME_4")) {
        showToast("开元棋牌维护中，请稍候再试......");
        return;
      }
      if ((this.user.BBIN == 0 || this.sysConfigItem.BBIN == 0 || this.sysConfigItem.BBIN_Repair == 1) && redirect == "BBIN_GAME_1") {
        showToast("开元棋牌维护中，请稍候再试......");
        return;
      }
      const loading = ElLoading.service({
        lock: true,
        text: "加载中...",
        background: "rgba(0, 0, 0, 0.7)",
      });

      if (redirect == "OG_GAME") {
        const { dispatchRedirectOGUrl } = ogGameStore();
        await dispatchRedirectOGUrl({}, this.token)
        if (this.ogSuccess && this.redirectOGUrl != "") {
          window.open(this.redirectOGUrl, '_blank');
        } else {
          showToast(this.ogErrMessage);
        }
      } else if (redirect == "AG_GAME_2") {
        const { dispatchRedirectAGUrl } = agGameStore();
        await dispatchRedirectAGUrl({ game_type: 2 }, this.token);
        console.log(this.agSuccess, this.redirectAGUrl);
        if (this.agSuccess && this.redirectAGUrl != "") {
          window.open(this.redirectAGUrl, '_blank');
        } else {
          showToast(this.agErrMessage);
        }
      } else if (redirect == "AG_GAME_1") {
        const { dispatchRedirectAGUrl } = agGameStore();
        await dispatchRedirectAGUrl({ game_type: 1 }, this.token);
        if (this.agSuccess && this.redirectAGUrl != "") {
          window.open(this.redirectAGUrl, '_blank');
        } else {
          showToast(this.agErrMessage);
        }
      } else if (redirect == "AG_GAME_4") {
        const { dispatchRedirectAGUrl } = agGameStore();
        await dispatchRedirectAGUrl({ game_type: 4 }, this.token);
        if (this.agSuccess && this.redirectAGUrl != "") {
          window.open(this.redirectAGUrl, '_blank');
        } else {
          showToast(this.agErrMessage);
        }
      } else if (redirect == "BBIN_GAME_1") {
        const { dispatchRedirectBBINUrl } = bbinGameStore();
        await dispatchRedirectBBINUrl({ game_type: 1 }, this.token);
        if (this.bbinSuccess && this.redirectBBINUrl != "") {
          window.open(this.redirectBBINUrl, '_blank');
        } else {
          showToast(this.bbinErrMessage);
        }
      }

      loading.close();
    },
  },
  computed: {
    user: function () {
      const { getUser } = useAuthStore();
      this.user = getUser;
      return getUser;
    },
    token: function () {
      const { getToken } = useAuthStore();
      return getToken
    },
    sysConfigItem: function () {
      const { getSysConfig } = useSysConfigStore();
      return getSysConfig
    },
    redirectOGUrl() {
      const { getRedirectOGUrl } = ogGameStore();
      return getRedirectOGUrl;
    },
    redirectAGUrl() {
      const { getRedirectAGUrl } = agGameStore();
      return getRedirectAGUrl;
    },
    redirectBBINUrl() {
      const { getRedirectBBINUrl } = bbinGameStore();
      return getRedirectBBINUrl;
    },
    agSuccess() {
      const { getSuccess } = agGameStore();
      return getSuccess
    },
    agErrMessage: function () {
      const { getErrMessage } = agGameStore();
      return getErrMessage
    },
    bbinSuccess() {
      const { getSuccess } = bbinGameStore();
      return getSuccess
    },
    bbinErrMessage: function () {
      const { getErrMessage } = bbinGameStore();
      return getErrMessage
    },
    ogSuccess() {
      const { getSuccess } = ogGameStore();
      return getSuccess
    },
    ogErrMessage: function () {
      const { getErrMessage } = ogGameStore();
      return getErrMessage
    },
  },
  async mounted() {    
    const { getSysConfigValue } = useSysConfigStore();
    await getSysConfigValue();
  }
};
</script>

<style scoped>
.qp-box {
  background: url("@/assets/images/video/video-banner.png");
}

.qp-box.bg-top {
  background-position: top;
}

.btn-bg {
  background: linear-gradient(90deg, #fff1c5, #e9d481);
  -webkit-box-shadow: 0 0 15px #fff1c5;
  box-shadow: 0 0 15px #fff1c5;
}

.carousel__slide {
  width: 100% !important;
}

.btn-list {
  background: -webkit-gradient(linear,
      left top,
      left bottom,
      from(#fff),
      to(#000));
  background: -o-linear-gradient(#fff, #000);
  background: linear-gradient(#fff, #000);
  -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.btn-list:hover,
.btn-list.active {
  background: -webkit-gradient(linear,
      left top,
      left bottom,
      from(#fff1c5),
      to(#e9d481));
  background: -o-linear-gradient(#fff1c5, #e9d481);
  background: linear-gradient(#fff1c5, #e9d481);
  color: black;
}
</style>