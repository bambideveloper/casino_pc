<template>
  <div class="qp-box w-full bg-[#efefef] pb-[50px] pt-[270px] box-border">
    <div
      class="max-w-[1200px] mx-auto bg-black rounded-[35px] px-[70px] pb-[50px] box-border overflow-hidden"
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
              active: typeId === 2  ,
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
          <div class="relative w-[155px] h-[175px]">
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
const games1 = [
  {
    id: 1,
    name: "十倍牛牛",
    image: new URL('@/assets/images/fish/fish-game-1.png', import.meta.url),
  },
  {
    id: 2,
    name: "看牌抢庄三公",
    image: new URL('@/assets/images/fish/fish-game-2.png', import.meta.url),
  },
  {
    id: 3,
    name: "金球银球",
    image: new URL('@/assets/images/fish/fish-game-3.png', import.meta.url),
  },
  {
    id: 4,
    name: "极速百家乐",
    image: new URL('@/assets/images/fish/fish-game-4.png', import.meta.url),
  },
  {
    id: 5,
    name: "21 点",
    image: new URL('@/assets/images/fish/fish-game-5.png', import.meta.url),
  },
  {
    id: 6,
    name: "梭哈德州扑克",
    image: new URL('@/assets/images/fish/fish-game-6.png', import.meta.url),
  },
  {
    id: 7,
    name: "十倍牛牛",
    image: new URL('@/assets/images/fish/fish-game-1.png', import.meta.url),
  },
  {
    id: 8,
    name: "看牌抢庄三公",
    image: new URL('@/assets/images/fish/fish-game-1.png', import.meta.url),
  },
  {
    id: 9,
    name: "金球银球",
    image: new URL('@/assets/images/fish/fish-game-1.png', import.meta.url),
  },
  {
    id: 10,
    name: "极速百家乐",
    image: new URL('@/assets/images/fish/fish-game-1.png', import.meta.url),
  },
  {
    id: 11,
    name: "21 点",
    image: new URL('@/assets/images/fish/fish-game-1.png', import.meta.url),
  },
  {
    id: 12,
    name: "梭哈德州扑克",
    image: new URL('@/assets/images/fish/fish-game-1.png', import.meta.url),
  },
  {
    id: 13,
    name: "极速百家乐",
    image: new URL('@/assets/images/fish/fish-game-1.png', import.meta.url),
  },
  {
    id: 14,
    name: "21 点",
    image: new URL('@/assets/images/fish/fish-game-1.png', import.meta.url),
  },
  {
    id: 15,
    name: "梭哈德州扑克",
    image: new URL('@/assets/images/fish/fish-game-1.png', import.meta.url),
  },
];
const games2 = [];
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
.box-shadow {
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
}
.qp-box {
  background: url("@/assets/images/fish/qp-box.png") no-repeat;
  background-size: 100% auto;
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
