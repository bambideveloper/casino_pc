<template>
  <div class="w-full qp-box">
    <div
      class="flex justify-between w-[1200px] h-[428px] my-0 mx-auto overflow-hidden"
    >
      <div class="mt-5 animate-fadeInLeft">
        <img src="@/assets/images/lottery/CP2.png" alt="lottery img" />
      </div>
      <div class="w-[590px] animate-fadeInRight">
        <div class="pt-[67px] px-0 pb-[49px]">
          <img
            src="@/assets/images/lottery/CP3.png"
            alt="lottery KY"
            class="mx-auto"
          />
        </div>
        <p class="leading-7 text-sm w-[490px] mx-auto text-[#666]">
          专注于彩票游戏行业多年，拥有经典彩种、玩法。还有超多独家创新玩法，足够新颖，极易操作的游戏界面，更是在您游戏过程中增光添彩！极其富有创造力的科技型队伍，
          拥有丰富的游戏开发经验，敏锐的市场嗅觉以及时尚的设计理念，打造独创卡片式切换，让您永不下错期！
        </p>
        <dl class="flex justify-around pt-[35px]">
          <dd class="animate-ab-25">
            <img src="@/assets/images/lottery/CP4.png" alt="lottery-1" />
          </dd>
          <dd class="animate-ab-30">
            <img src="@/assets/images/lottery/CP5.png" alt="lottery-1" />
          </dd>
          <dd class="animate-ab-35">
            <img src="@/assets/images/lottery/CP6.png" alt="lottery-1" />
          </dd>
          <dd class="animate-ab-30">
            <img src="@/assets/images/lottery/CP7.png" alt="lottery-1" />
          </dd>
          <dd class="animate-ab-25">
            <img src="@/assets/images/lottery/CP8.png" alt="lottery-1" />
          </dd>
        </dl>
      </div>
    </div>
    <div
      class="w-[1200px] mx-auto bg-black rounded-[35px] px-[70px] pb-[50px] box-border overflow-hidden"
    >
      <div
        class="w-full py-[15px] overflow-hidden flex justify-between items-center"
      >
        <ul class="flex flex-wrap">
          <li
            :class="{
              'flex justify-center items-center w-[142px] h-[48px] mr-3 cursor-pointer text-base text-white image-button': true,
              active: typeId === 0,
            }"
            @click="changeTypeId(0)"
          >
            全部游戏
          </li>
          <li
            :class="{
              'flex justify-center items-center w-[142px] h-[48px] mr-3 cursor-pointer text-base text-white image-button': true,
              active: typeId === 1,
            }"
            @click="changeTypeId(1)"
          >
            热门游戏
          </li>
          <li
            :class="{
              'flex justify-center items-center w-[142px] h-[48px] mr-3 cursor-pointer text-base text-white image-button': true,
              active: typeId === 2,
            }"
            @click="changeTypeId(2)"
          >
            收藏游戏
          </li>
        </ul>
        <div
          class="float-right w-[240px] h-[48px] relative box-border bg-[#fbe59c]"
        >
          <input
            type="text"
            placeholder="请输入游戏名称"
            class="w-[200px] h-full indent-[20px] text-[15px] outline-none border-none pr-10 bg-[#fbe59c]"
          />
          <div
            class="cursor-pointer absolute right-0 top-0 w-[46px] h-[46px] search-icon border-none outline-none"
          ></div>
        </div>
      </div>
      <ul
        :class="changeTabRightClass"
        v-if="gameList.length > 0"
        ref="gameList"
      >
        <li
          class="relative flex w-[165px] h-[185px] p-[5px] mt-[10px] mr-[11px] cursor-pointer overflow-hidden border-x-[1px] border-t-[1px] border-solid border-[#fbe59c] game-item"
          v-for="item in gameList"
          :key="item"
        >
          <div class="relative w-[155px] h-[175px]" @click="goToLotteryPage(item.name)">
            <div>
              <img :src="item.image" :alt="item.name" class="w-full" />
            </div>
            <div
              class="game-item-img absolute w-full h-[150px] text-sm pt-[10px] left-0 top-0 text-center z-10 text-white"
            >
              <img
                src="@/assets/images/chess/enter-game.png"
                alt="enter game"
                class="mt-[35px] mx-auto mb-[10px]"
              />
              进入游戏
            </div>
          </div>
          <p
            class="left-0 right-0 bottom-0 h-[35px] justify-around text-sm bg-[#fbe59c] text-black absolute flex items-center game-title z-20"
          >
            {{ item.name }}
          </p>
        </li>
      </ul>
      <div
        v-else
        class="flex justify-center items-end w-full h-[418px] text-[#e6e6e6] text-2xl font-bold no-data changeTabRight"
      >
        暂无数据
      </div>
    </div>
  </div>
</template>
<script>
import { APP_URL } from "../../config";
const games1 = [
      {
        id: 1,
        name: "澳门六合彩",
        image: new URL("@/assets/images/lottery/1661690557403.png", import.meta.url),
      },
      {
        id: 2,
        name: "新澳门六合彩",
        image: new URL("@/assets/images/lottery/1661690557403.png", import.meta.url),
      },
      {
        id: 3,
        name: "香港六合彩",
        image: new URL("@/assets/images/lottery/1657716617488.png", import.meta.url),
      },
      {
        id: 4,
        name: "重庆时时彩",
        image: new URL("@/assets/images/lottery/1657714819579.png", import.meta.url),
      },
      {
        id: 5,
        name: "河内五分彩",
        image: new URL("@/assets/images/lottery/1657714849313.png", import.meta.url),
      },
      {
        id: 6,
        name: "澳洲幸运5",
        image: new URL("@/assets/images/lottery/1657714889990.png", import.meta.url),
      },
      {
        id: 7,
        name: "澳洲幸运10",
        image: new URL("@/assets/images/lottery/1657714931262.png", import.meta.url),
      },
      {
        id: 8,
        name: "幸运飞艇",
        image: new URL("@/assets/images/lottery/1657714996653.png", import.meta.url),
      },
      {
        id: 9,
        name: "北京PK拾",
        image: new URL("@/assets/images/lottery/1657715017976.png", import.meta.url),
      },
      {
        id: 10,
        name: "天津时时彩",
        image: new URL("@/assets/images/lottery/1657715051568.png", import.meta.url),
      },
      {
        id: 11,
        name: "新疆时时彩",
        image: new URL("@/assets/images/lottery/1657715081433.png", import.meta.url),
      },
      {
        id: 12,
        name: "重庆十分彩",
        image: new URL("@/assets/images/lottery/1657715118483.png", import.meta.url),
      },
      {
        id: 13,
        name: "广东十分彩",
        image: new URL("@/assets/images/lottery/1657715213155.png", import.meta.url),
      },
      {
        id: 14,
        name: "广西十分彩",
        image: new URL("@/assets/images/lottery/1657715266155.png", import.meta.url),
      },
      {
        id: 15,
        name: "天津十分彩",
        image: new URL("@/assets/images/lottery/1657715295309.png", import.meta.url),
      },
      {
        id: 16,
        name: "上海时时乐",
        image: new URL("@/assets/images/lottery/1657715460185.png", import.meta.url),
      },
      {
        id: 17,
        name: "广东11选5",
        image: new URL("@/assets/images/lottery/1657715499820.png", import.meta.url),
      },
      {
        id: 18,
        name: "福彩3D",
        image: new URL("@/assets/images/lottery/1657716481773.png", import.meta.url),
      },
      {
        id: 19,
        name: "排列3",
        image: new URL("@/assets/images/lottery/1657716517091.png", import.meta.url),
      },
];
export default {
  data() {
    return {
      typeId: this.$route.params.typeId,
      activeId: 1,
      gameList: [],
      changeTabRightClass: "w-full min-h-[398px] flex flex-wrap",
    };
  },
  mounted() {
    this.typeId = 0;
    this.getGameList(this.typeId);
  },
  methods: {
    goToLotteryPage: function (name) {
      if (!localStorage.getItem("token")) {
        showToast("您还没有登录或登录超时，请重新登录......");
        return;
      } else {
        switch (name) {
          case "澳门六合彩":
            window.open(`${APP_URL}/#/macao-mark-six?token=${localStorage.getItem("token")}&client=m`, '_blank');
            break;
          case "新澳门六合彩":
            window.open(`${APP_URL}/#/new-macao-mark-six?token=${localStorage.getItem("token")}&client=m`, '_blank');
            break;
          case "香港六合彩":
            window.open(`${APP_URL}/#/mark-six?token=${localStorage.getItem("token")}&client=m`, '_blank');
            break;
          case "重庆时时彩":
            window.open(`${APP_URL}/#/alwayscolor/cqssc?token=${localStorage.getItem("token")}&client=m`, '_blank');
            break;
          case "河内五分彩":
            window.open(`${APP_URL}/#/alwayscolor/ffc5?token=${localStorage.getItem("token")}&client=m`, '_blank');
            break;
          case "澳洲幸运5":
            window.open(`${APP_URL}/#/alwayscolor/azxy5?token=${localStorage.getItem("token")}&client=m`, '_blank');
            break;
          case "澳洲幸运10":
            window.open(`${APP_URL}/#/alwayscolor/azxy10?token=${localStorage.getItem("token")}&client=m`, '_blank');
            break;
          case "幸运飞艇":
            window.open(`${APP_URL}/#/alwayscolor/xyft?token=${localStorage.getItem("token")}&client=m`, '_blank');
            break;
          case "北京PK拾":
            window.open(`${APP_URL}/#/alwayscolor/bjpk?token=${localStorage.getItem("token")}&client=m`, '_blank');
            break;
          case "天津时时彩":
            window.open(`${APP_URL}/#/alwayscolor/tjssc?token=${localStorage.getItem("token")}&client=m`, '_blank');
            break;
          case "新疆时时彩":
            window.open(`${APP_URL}/#/alwayscolor/jxssc?token=${localStorage.getItem("token")}&client=m`, '_blank');
            break;
          case "重庆十分彩":
            window.open(`${APP_URL}/#/alwayscolor/cqsf?token=${localStorage.getItem("token")}&client=m`, '_blank');
            break;
          case "广东十分彩":
            window.open(`${APP_URL}/#/alwayscolor/gdsf?token=${localStorage.getItem("token")}&client=m`, '_blank');
            break;
          case "广西十分彩":
            window.open(`${APP_URL}/#/alwayscolor/gxsf?token=${localStorage.getItem("token")}&client=m`, '_blank');
            break;
          case "天津十分彩":
            window.open(`${APP_URL}/#/alwayscolor/tjsf?token=${localStorage.getItem("token")}&client=m`, '_blank');
            break;
          case "上海时时乐":
            window.open(`${APP_URL}/#/alwayscolor/shssl?token=${localStorage.getItem("token")}&client=m`, '_blank');
            break;
          case "广东11选5":
            window.open(`${APP_URL}/#/alwayscolor/gd11?token=${localStorage.getItem("token")}&client=m`, '_blank');
            break;
          case "福彩3D":
            window.open(`${APP_URL}/#/alwayscolor/d3?token=${localStorage.getItem("token")}&client=m`, '_blank');
            break;
          case "排列3":
            window.open(`${APP_URL}/#/alwayscolor/p3?token=${localStorage.getItem("token")}&client=m`, '_blank');
            break;
        }
      }
    },
    getGameList(typeId) {
      this.changeTabRightClass = "w-full min-h-[398px] flex flex-wrap";
      setTimeout(() => {
        if (typeId === 1 || typeId === 0) {
          this.gameList = games1;
        } else {
          this.gameList = games2;
        }
        this.changeTabRightClass += " changeTabRight";
      }, 100);
      this.$forceUpdate();
    },
    changeTypeId(id) {
      this.typeId = id;
      this.getGameList(id);
    },
  },
  computed: {
    shouldApplyClass() {
      return this.gameList.length > 0;
    },
  },
};
</script>
<style scoped>
.qp-box {
  background: url("@/assets/images/lottery/lottery-banner.png");
  background-size: 100% auto;
}
.animate-ab-25 {
  animation: abAnimate infinite linear 2.5s;
}
.animate-ab-30 {
  animation: abAnimate infinite linear 3s;
}
.animate-ab-35 {
  animation: abAnimate infinite linear 3.5s;
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
  background: url("@/assets/images/fish/search-icon.png") 50% center
    no-repeat;
}
.image-button.active {
  background: url("@/assets/images/fish/btn-1.png");
}
.image-button {
  background: url("@/assets/images/fish/btn-2.png");
  transition: all 0.5s ease 0s;
}
</style>
