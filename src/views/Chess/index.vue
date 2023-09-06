<template>
  <div class="qp-box w-full bg-[#efefef] pb-[50px] pt-[230px] box-border">
    <div class="w-[1200px] mx-auto overflow-hidden bg-[#1c1c1c] rounded-[10px] box-shadow">
      <ul class="flex justify-between">
        <li v-for="item in ChessGameList" v-bind:key="item" class="cursor-pointer w-[109px] h-[80px] divider game-menu">
          <router-link :to="item.href">
            <div class="w-full h-[55px] relative">
              <img :src="item.image" :alt="item.name"
                class="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] h-[60px] w-auto transition-[.5s]" />
            </div>
            <p :class="parseInt(item.type) === parseInt(typeId)
              ? 'text-center text-xs text-[#fbe59c] font-bold game-menu'
              : 'text-center text-[#999] text-xs'
              ">
              {{ item.name }}
            </p>
          </router-link>
        </li>
      </ul>
    </div>
    <div
      class="max-w-[1200px] mx-auto my-4 bg-black rounded-[15px] py-[30px] px-[10px] box-border box-shadow overflow-hidden">
      <ul :class="changeTabRightClass" v-if="gameList.length > 0" ref="gameList">
        <li
          class="inline-block w-[184px] h-[224px] relative text-center m-[5px] rounded cursor-pointer overflow-hidden game-item"
          v-for="item in gameList" :key="item">
          <div class="relative">
            <div>
              <img :src="item.ZH_Logo_File" :alt="item.GameName" class="w-full" />
            </div>
            <div @click="goDetail(item.GameType)"
              class="game-item-img absolute w-full h-[185px] text-sm pt-[10px] left-0 top-0 text-center z-10 text-white">
              <img src="@/assets/images/chess/enter-game.png" alt="enter game" class="mt-[75px] mx-auto mb-[10px]" />
              进入游戏
            </div>
          </div>
          <p class="bg-[#fbe59c] absolute bottom-0 h-[40px] w-full flex items-center text-black text-base game-title">
            {{ item.GameName }}
          </p>
        </li>
      </ul>
      <div v-else class="flex justify-center items-end w-full h-[418px] text-[#e6e6e6] text-2xl font-bold no-data">
        暂无数据
      </div>
    </div>
  </div>
</template>

<script setup>
import ChessGameList from "@/utils/Constant";
</script>

<script>
import { ref, defineComponent } from 'vue'
import { chessGameStore } from "../../store/chess_game";
import { useAuthStore } from "../../store/auth";
import { storeToRefs } from "pinia";
import { ElLoading } from "element-plus";
import {showToast} from "vant";
const games1 = [
  {
    id: 1,
    name: "十倍牛牛",
    image: new URL("@/assets/images/chess/chess-game-1.png", import.meta.url),
  },
  {
    id: 2,
    name: "看牌抢庄三公",
    image: new URL("@/assets/images/chess/chess-game-2.png", import.meta.url),
  },
  {
    id: 3,
    name: "金球银球",
    image: new URL("@/assets/images/chess/chess-game-3.png", import.meta.url),
  },
  {
    id: 4,
    name: "极速百家乐",
    image: new URL("@/assets/images/chess/chess-game-4.png", import.meta.url),
  },
  {
    id: 5,
    name: "21 点",
    image: new URL("@/assets/images/chess/chess-game-5.png", import.meta.url),
  },
  {
    id: 6,
    name: "梭哈德州扑克",
    image: new URL("@/assets/images/chess/chess-game-6.png", import.meta.url),
  },
  {
    id: 7,
    name: "十倍牛牛",
    image: new URL("@/assets/images/chess/chess-game-4.png", import.meta.url),
  },
  {
    id: 8,
    name: "看牌抢庄三公",
    image: new URL("@/assets/images/chess/chess-game-5.png", import.meta.url),
  },
  {
    id: 9,
    name: "金球银球",
    image: new URL("@/assets/images/chess/chess-game-1.png", import.meta.url),
  },
  {
    id: 10,
    name: "极速百家乐",
    image: new URL("@/assets/images/chess/chess-game-3.png", import.meta.url),
  },
  {
    id: 11,
    name: "21 点",
    image: new URL("@/assets/images/chess/chess-game-2.png", import.meta.url),
  },
  {
    id: 12,
    name: "梭哈德州扑克",
    image: new URL("@/assets/images/chess/chess-game-6.png", import.meta.url),
  },
];
const games2 = [
  {
    id: 1,
    name: "金球银球",
    image: new URL("@/assets/images/chess/chess-game-3.png", import.meta.url),
  },
  {
    id: 2,
    name: "极速百家乐",
    image: new URL("@/assets/images/chess/chess-game-4.png", import.meta.url),
  },
  {
    id: 3,
    name: "21 点",
    image: new URL("@/assets/images/chess/chess-game-5.png", import.meta.url),
  },
  {
    id: 4,
    name: "梭哈德州扑克",
    image: new URL("@/assets/images/chess/chess-game-6.png", import.meta.url),
  },
  {
    id: 5,
    name: "十倍牛牛",
    image: new URL("@/assets/images/chess/chess-game-4.png", import.meta.url),
  },
  {
    id: 6,
    name: "看牌抢庄三公",
    image: new URL("@/assets/images/chess/chess-game-5.png", import.meta.url),
  },
  {
    id: 7,
    name: "金球银球",
    image: new URL("@/assets/images/chess/chess-game-1.png", import.meta.url),
  },
  {
    id: 8,
    name: "极速百家乐",
    image: new URL("@/assets/images/chess/chess-game-3.png", import.meta.url),
  },
  {
    id: 9,
    name: "21 点",
    image: new URL("@/assets/images/chess/chess-game-2.png", import.meta.url),
  },
  {
    id: 10,
    name: "梭哈德州扑克",
    image: new URL("@/assets/images/chess/chess-game-6.png", import.meta.url),
  },
];
export default defineComponent({
  setup() {
    const { dispatchChessGameAll } = chessGameStore();
    const { dispatchRedirectUrl } = chessGameStore();
    return {
      dispatchChessGameAll,
      dispatchRedirectUrl
    }
  },
  data() {
    return {
      typeId: this.$route.params.typeId,
      gameList: [],
      changeTabRightClass: "w-full",
    };
  },
  watch: {
    "$route.params.typeId"(newValue, oldValue) {
      this.typeId = newValue;
      this.getGameList(newValue);
    },
  },
  mounted() {
    this.getGameList(this.typeId);
  },
  methods: {
    async getGameList(typeId) {
      this.changeTabRightClass = "w-full";
      const { dispatchChessGameAll } = chessGameStore();
      await dispatchChessGameAll({});
      setTimeout(() => {
        if (typeId === 1) {
          this.gameList = this.chessGameList;
        } else {
          this.gameList = this.chessGameList;
        }
        console.log(this.gameList);
        this.changeTabRightClass += " changeTabRight";
      }, 100);
    },
    async goDetail(KindID) {
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
      const { dispatchRedirectUrl } = chessGameStore();
      await dispatchRedirectUrl({ KindID }, this.token);
      loading.close();
      if (this.success) {
        if (this.redirectKyUrl != "") {
          window.open(this.redirectKyUrl, '_blank');
        }
      } else {
      }
    }
  },
  computed: {
    shouldApplyClass() {
      return this.gameList.length > 0;
    },
    chessGameList() {
      const { getChessGameList } = storeToRefs(chessGameStore());
      return getChessGameList.value
    },
    redirectKyUrl() {
      const { getRedirectUrl } = storeToRefs(chessGameStore());
      return getRedirectUrl.value;
    },
    success() {
      const {getSuccess} = storeToRefs(chessGameStore());
      return getSuccess.value
    },
    errMessage: function() {
      const {getErrMessage} = storeToRefs(chessGameStore());
      return getErrMessage.value
    },
    user: function () {
      const { getUser } = useAuthStore();
      this.user = getUser;
      return getUser;
    },
    token: function() {
      const {getToken} = storeToRefs(useAuthStore());
      return getToken.value
    }
  },
});
</script>

<style scoped>
.box-shadow {
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
}

.qp-box {
  background: url("@/assets/images/chess/qp-box.png") no-repeat;
  background-size: 100% auto;
}

.divider {
  background: url("@/assets/images/chess/chess-divider.png") 100% no-repeat;
}

.game-menu:hover img {
  -webkit-transform: translate(-50%, -50%) scale(1.1);
  -ms-transform: translate(-50%, -50%) scale(1.1);
  transform: translate(-50%, -50%) scale(1.1);
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

.game-title::before {
  content: "";
  display: block;
  height: 20px;
  width: 4px;
  border-radius: 5px;
  background-color: #ff6000;
  margin: 0 10px 0 15px;
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
</style>
