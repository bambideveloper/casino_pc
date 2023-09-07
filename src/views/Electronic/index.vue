<script setup>
const electronicBtnList = [
  { name: "AG电子", type: 1, href: "/hall/electronic/1" },
  { name: "BBIN电子", type: 2, href: "/hall/electronic/2" },
  { name: "PT电子", type: 3, href: "/hall/electronic/3" },
  { name: "MG电子", type: 4, href: "/hall/electronic/4" },
];
</script>

<template>
  <div class="qp-box w-full bg-[#efefef] pb-[50px] pt-[270px] box-border">
    <div class="max-w-[1200px] mx-auto bg-black rounded-[35px] px-[70px] pb-[50px] box-border overflow-hidden">
      <ul class="flex flex-wrap pt-[35px] px-[15px] pb-0 border-b border-solid border-[#e5e5e5]">
        <li :class="{
          'w-[90px] cursor-pointer h-[30px] text-center leading-[30px] mt-0 mr-6 mb-[30px] ml-0 overflow-hidden rounded-[15px] transition-[.4s] text-sm text-[#fbe59c] electronic-btn hover:bg-[#fbe59c] hover:text-black': true,
          active: parseInt(typeId) === parseInt(item.type),
        }" v-for="item in electronicBtnList" :key="item">
          <router-link :to="item.href">
            {{ item.name }}
          </router-link>
        </li>
      </ul>
      <div class="w-full py-[15px] overflow-hidden flex justify-between items-center">
        <ul class="flex flex-wrap">
          <li :class="{
            'flex justify-center items-center w-[142px] h-[48px] mr-3 cursor-pointer text-base text-white image-button': true,
            active: filterId === 0,
          }" @click="changeFilterId(0)">
            全部游戏
          </li>
          <li :class="{
            'flex justify-center items-center w-[142px] h-[48px] mr-3 cursor-pointer text-base text-white image-button': true,
            active: filterId === 1,
          }" @click="changeFilterId(1)">
            热门游戏
          </li>
          <li :class="{
            'flex justify-center items-center w-[142px] h-[48px] mr-3 cursor-pointer text-base text-white image-button': true,
            active: filterId === 2,
          }" @click="changeFilterId(2)">
            收藏游戏
          </li>
        </ul>
        <div class="float-right w-[240px] h-[48px] relative box-border bg-[#fbe59c]" v-if="filterId === 0">
          <input type="text" placeholder="请输入游戏名称"
            class="w-[200px] h-full indent-[20px] text-[15px] outline-none border-none pr-10 bg-[#fbe59c]" />
          <div class="cursor-pointer absolute right-0 top-0 w-[46px] h-[46px] search-icon border-none outline-none"></div>
        </div>
      </div>
      <ul :class="changeTabRightClass" v-if="gameList.length > 0" ref="gameList">
        <li
          class="relative flex w-[165px] h-[185px] p-[5px] mt-[10px] mr-[11px] cursor-pointer overflow-hidden border-x-[1px] border-t-[1px] border-solid border-[#fbe59c] game-item"
          v-for="item in gameList" :key="item">
          <div class="relative w-[155px] h-[175px]">
            <div>
              <img :src="item.ZH_Logo_File" :alt="item.GameName" class="w-full" />
            </div>
            <div
              class="game-item-img absolute w-full h-[150px] text-sm pt-[10px] left-0 top-0 text-center z-10 text-white"
              @click="goDetail(item.GameType ? item.GameType : 5, typeId)">
              <img src="@/assets/images/chess/enter-game.png" alt="enter game" class="mt-[35px] mx-auto mb-[10px]" />
              进入游戏
            </div>
          </div>
          <p
            class="left-0 right-0 bottom-0 h-[35px] justify-around text-sm bg-[#fbe59c] text-black absolute flex items-center game-title z-20">
            {{ item.GameName }}
          </p>
        </li>
      </ul>
      <div v-else
        class="flex justify-center items-end w-full h-[418px] text-[#e6e6e6] text-2xl font-bold no-data changeTabRight">
        暂无数据
      </div>
    </div>
  </div>
</template>

<script>
import { ref, defineComponent } from 'vue'
import { agGameStore } from "../../store/ag_game";
import { bbinGameStore } from '../../store/bbin_game';
import { ptGameStore } from '../../store/pt_game';
import { mgGameStore } from '../../store/mg_game';
import { useAuthStore } from "../../store/auth";
import { storeToRefs } from "pinia";
import { ElLoading } from "element-plus";
import { showToast } from "vant";
import { useRoute } from 'vue-router';
const games1 = [
  {
    id: 1,
    name: "十倍牛牛",
    image: new URL("@/assets/images/fish/fish-game-1.png", import.meta.url),
  },
  {
    id: 2,
    name: "看牌抢庄三公",
    image: new URL("@/assets/images/fish/fish-game-2.png", import.meta.url),
  },
  {
    id: 3,
    name: "金球银球",
    image: new URL("@/assets/images/fish/fish-game-3.png", import.meta.url),
  },
  {
    id: 4,
    name: "极速百家乐",
    image: new URL("@/assets/images/fish/fish-game-4.png", import.meta.url),
  },
  {
    id: 5,
    name: "21 点",
    image: new URL("@/assets/images/fish/fish-game-5.png", import.meta.url),
  },
  {
    id: 6,
    name: "梭哈德州扑克",
    image: new URL("@/assets/images/fish/fish-game-6.png", import.meta.url),
  },
  {
    id: 7,
    name: "十倍牛牛",
    image: new URL("@/assets/images/fish/fish-game-1.png", import.meta.url),
  },
  {
    id: 8,
    name: "看牌抢庄三公",
    image: new URL("@/assets/images/fish/fish-game-1.png", import.meta.url),
  },
  {
    id: 9,
    name: "金球银球",
    image: new URL("@/assets/images/fish/fish-game-1.png", import.meta.url),
  },
  {
    id: 10,
    name: "极速百家乐",
    image: new URL("@/assets/images/fish/fish-game-1.png", import.meta.url),
  },
  {
    id: 11,
    name: "21 点",
    image: new URL("@/assets/images/fish/fish-game-1.png", import.meta.url),
  },
  {
    id: 12,
    name: "梭哈德州扑克",
    image: new URL("@/assets/images/fish/fish-game-1.png", import.meta.url),
  },
  {
    id: 13,
    name: "极速百家乐",
    image: new URL("@/assets/images/fish/fish-game-1.png", import.meta.url),
  },
  {
    id: 14,
    name: "21 点",
    image: new URL("@/assets/images/fish/fish-game-1.png", import.meta.url),
  },
  {
    id: 15,
    name: "梭哈德州扑克",
    image: new URL("@/assets/images/fish/fish-game-1.png", import.meta.url),
  },
];
const games2 = [
  {
    id: 1,
    name: "金球银球",
    image: new URL("@/assets/images/fish/fish-game-1.png", import.meta.url),
  },
  {
    id: 2,
    name: "极速百家乐",
    image: new URL("@/assets/images/fish/fish-game-2.png", import.meta.url),
  },
  {
    id: 3,
    name: "21 点",
    image: new URL("@/assets/images/fish/fish-game-3.png", import.meta.url),
  },
  {
    id: 4,
    name: "梭哈德州扑克",
    image: new URL("@/assets/images/fish/fish-game-4.png", import.meta.url),
  },
  {
    id: 5,
    name: "十倍牛牛",
    image: new URL("@/assets/images/fish/fish-game-5.png", import.meta.url),
  },
  {
    id: 6,
    name: "看牌抢庄三公",
    image: new URL("@/assets/images/fish/fish-game-6.png", import.meta.url),
  },
  {
    id: 7,
    name: "金球银球",
    image: new URL("@/assets/images/fish/fish-game-1.png", import.meta.url),
  },
  {
    id: 8,
    name: "极速百家乐",
    image: new URL("@/assets/images/fish/fish-game-1.png", import.meta.url),
  },
  {
    id: 9,
    name: "21 点",
    image: new URL("@/assets/images/fish/fish-game-1.png", import.meta.url),
  },
  {
    id: 10,
    name: "梭哈德州扑克",
    image: new URL("@/assets/images/fish/fish-game-1.png", import.meta.url),
  },
];
const game3 = [];

export default {
  data() {
    return {
      typeId: this.$route.params.typeId,
      filterId: 0,
      gameList: [],
      changeTabRightClass: "w-full min-h-[398px] flex flex-wrap",
    };
  },
  watch: {
    "$route.params.typeId"(newValue, oldValue) {
      this.typeId = newValue;
      var clsName = "";
      if (newValue < oldValue) {
        clsName = " changeTabLeft";
      } else {
        clsName = " changeTabRight";
      }
      this.getGameList(newValue, clsName);
    },
  },
  async mounted() {
    const route = useRoute();
    this.typeId = route.params.typeId;
    var clsName = " changeTabRight";
    await this.getGameList(this.typeId, clsName);
  },
  methods: {
    async getGameList(typeId, clsName) {
      this.changeTabRightClass = "w-full min-h-[398px] flex flex-wrap";
      if (parseInt(typeId) === 1) {
        const { dispatchAGGameAll } = agGameStore();
        await dispatchAGGameAll({});
        this.gameList = this.agGameList;
      } else if (parseInt(typeId) === 2) {
        const { dispatchBBINGameAll } = bbinGameStore();
        await dispatchBBINGameAll({});
        this.gameList = this.bbinGameList;
      } else if (parseInt(typeId) === 3) {
        const { dispatchPTGameAll } = ptGameStore();
        await dispatchPTGameAll({});
        this.gameList = this.ptGameList;
      } else if (parseInt(typeId) === 4) {
        const { dispatchMGGameAll } = mgGameStore();
        await dispatchMGGameAll({});
        this.gameList = this.mgGameList;
      }
      this.changeTabRightClass += clsName;
    },
    async goDetail(game_type, type_id) {
      if (this.user.id == undefined) {
        showToast("您还没有登录或登录超时，请重新登录......");
        return;
      }
      if (this.user.KY == 0) {
        showToast("开元棋牌维护中，请稍候再试......");
        return;
      }
      const loading = ElLoading.service({
        lock: true,
        text: "加载中...",
        background: "rgba(0, 0, 0, 0.7)",
      });
      if (type_id == 1) {
        const { dispatchRedirectAGUrl } = agGameStore();
        await dispatchRedirectAGUrl({ game_type }, this.token);
        loading.close();
        if (this.success) {
          if (this.redirectAGUrl != "") {
            window.open(this.redirectAGUrl, '_blank');
          }
        } else {
          showToast(this.errMessage)
        }
      } else if (type_id == 2) {
        const { dispatchRedirectBBINUrl } = bbinGameStore();
        await dispatchRedirectBBINUrl({ game_type }, this.token);
        loading.close();
        if (this.bbinSuccess) {
          if (this.redirectBBINUrl != "") {
            window.open(this.redirectBBINUrl, '_blank');
          }
        } else {
          showToast(this.bbinErrMessage)
        }
      } else if (type_id == 3) {
        const { dispatchRedirectPTUrl } = ptGameStore();
        await dispatchRedirectPTUrl({ game_type }, this.token);
        loading.close();
        if (this.ptSuccess) {
          if (this.redirectPTUrl != "") {
            window.open(this.redirectPTUrl, '_blank');
          }
        } else {
          showToast(this.ptErrMessage)
        }
      } else if (type_id == 4) {
        const { dispatchRedirectMGUrl } = mgGameStore();
        await dispatchRedirectMGUrl({ game_type }, this.token);
        loading.close();
        if (this.mgSuccess) {
          if (this.redirectMGUrl != "") {
            window.open(this.redirectMGUrl, '_blank');
          }
        } else {
          showToast(this.mgErrMessage)
        }
      }
    },
    async changeTypeId(id) {
      var clsName = "";
      if (this.typeId < id) {
        clsName = " changeTabRight";
      } else {
        clsName = " changeTabLeft";
      }
      this.typeId = id;
      await this.getGameList(id, clsName);
    },
    changeFilterId(id) {
      this.filterId = id;
      var clsName = " changeTabRight";
      this.getGameList(id, clsName);
    },
  },
  computed: {
    shouldApplyClass() {
      return this.gameList.length > 0;
    },
    agGameList() {
      const { getAGGameList } = storeToRefs(agGameStore());
      return getAGGameList.value
    },
    bbinGameList() {
      const { getBBINGameList } = storeToRefs(bbinGameStore());
      return getBBINGameList.value
    },
    ptGameList() {
      const { getPTGameList } = storeToRefs(ptGameStore());
      return getPTGameList.value
    },
    mgGameList() {
      const { getMGGameList } = storeToRefs(mgGameStore());
      return getMGGameList.value
    },
    redirectAGUrl() {
      const { getRedirectAGUrl } = storeToRefs(agGameStore());
      return getRedirectAGUrl.value;
    },
    redirectBBINUrl() {
      const { getRedirectBBINUrl } = storeToRefs(bbinGameStore());
      return getRedirectBBINUrl.value;
    },
    redirectPTUrl() {
      const { getRedirectPTUrl } = storeToRefs(ptGameStore());
      return getRedirectPTUrl.value;
    },
    redirectMGUrl() {
      const { getRedirectMGUrl } = storeToRefs(mgGameStore());
      return getRedirectMGUrl.value;
    },
    success() {
      const { getSuccess } = storeToRefs(agGameStore());
      return getSuccess.value
    },
    errMessage: function () {
      const { getErrMessage } = storeToRefs(agGameStore());
      return getErrMessage.value
    },
    bbinSuccess() {
      const { getSuccess } = storeToRefs(bbinGameStore());
      return getSuccess.value
    },
    bbinErrMessage: function () {
      const { getErrMessage } = storeToRefs(bbinGameStore());
      return getErrMessage.value
    },
    ptSuccess() {
      const { getSuccess } = storeToRefs(ptGameStore());
      return getSuccess.value
    },
    ptErrMessage: function () {
      const { getErrMessage } = storeToRefs(ptGameStore());
      return getErrMessage.value
    },
    mgSuccess() {
      const { getSuccess } = storeToRefs(mgGameStore());
      return getSuccess.value
    },
    mgErrMessage: function () {
      const { getErrMessage } = storeToRefs(mgGameStore());
      return getErrMessage.value
    },
    user: function () {
      const { getUser } = useAuthStore();
      this.user = getUser;
      return getUser;
    },
    token: function () {
      const { getToken } = storeToRefs(useAuthStore());
      return getToken.value
    }
  },
};
</script>

<style scoped>
.box-shadow {
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
}

.qp-box {
  background: url("@/assets/images/electronic/qp-box.png") no-repeat;
  background-size: 100% auto;
}

.electronic-btn {
  -webkit-box-shadow: 0 5px 10px #fff1c5;
  box-shadow: 0 5px 10px #fff1c5;
}

.electronic-btn.active {
  background: #fbe59c;
  color: #000;
}

.game-menu:hover img {
  -webkit-transform: translate(-50%, -50%) scale(1.1);
  -ms-transform: translate(-50%, -50%) scale(1.1);
  transform: translate(-50%, -50%) scale(1.1);
}

.changeTabRight {
  animation: changeTabRight linear both 0.4s;
}

.game-item::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.game-item:hover::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}

.game-title::after {
  content: "";
  width: 20px;
  height: 20px;
  margin: 5px 0px;
  background: url("@/assets/images/fish/love-icon.png") 0% 0% / 100% 100%;
}

.game-item-img {
  display: none;
}

.game-item:hover .game-item-img {
  display: block;
}

.no-data {
  background: url("@/assets/images/chess/no_data.png") no-repeat center 24px;
}

.search-icon {
  background: url("@/assets/images/fish/search-icon.png") 50% center no-repeat;
}

.image-button.active {
  background: url("@/assets/images/fish/btn-1.png");
}

.image-button {
  background: url("@/assets/images/fish/btn-2.png");
  transition: all 0.5s ease 0s;
}
</style>
