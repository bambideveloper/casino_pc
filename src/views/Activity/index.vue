<script setup>
const menus = [
  { id: 1, name: "所有活动", type: 1 },
  { id: 2, name: "彩票优惠", type: 2 },
  { id: 3, name: "体育优惠", type: 3 },
  { id: 4, name: "迎新礼包", type: 4 },
  { id: 5, name: "游戏大冲关", type: 5 },
  { id: 6, name: "亏损救援金", type: 6 },
];
</script>

<template>
  <div class="w-full qp-box pt-[273px] mb-[50px]">
    <div class="flex justify-center items-center h-[100px] bg-[#1c1c1c]">
      <ul class="w-[1200px] flex justify-between">
        <li
          v-for="item in menus"
          :key="item"
          :class="{
            'flex items-center w-[144px] h-[48px] rounded-3xl box-border text-sm cursor-pointer justify-center bg-[#2b2b2b] hover:bg-[#fbe59c] hover:text-black': true,
            'bg-[#fbe59c] text-black': typeId === item.type,
            'text-white': typeId !== item.type,
          }"
          @click="changeTypeId(item.type)"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
    <div class="bg-[#1c1c1c] pt-5 pb-9">
      <ul
        class="flex flex-wrap w-[1200px] mx-auto activity-list"
        v-if="gameList.length > 0"
      >
        <li
          v-for="item in gameList"
          :key="item"
          class="flex flex-col w-[380px] h-[280px] mr-[30px] mb-5 bg-[#2b2b2b] rounded-xl cursor-pointer animation"
        >
          <div class="h-[220px]">
            <div class="block">
              <img
                :src="item.image"
                :alt="item.name"
                class="w-[380px] h-[220px] rounded-t-xl"
              />
            </div>
          </div>
          <div
            class="flex items-center pl-5 text-lg text-[#d7d7d7] tracking-[1px] h-full"
          >
            {{ item.name }}
          </div>
        </li>
      </ul>
      <div
        v-else
        class="flex justify-center items-end w-full h-[418px] text-[#e6e6e6] text-2xl font-bold no-data animate-fadeInUp"
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
    name: "新用户大礼包",
    image: new URL('@/assets/images/activity/pc_1.png', import.meta.url),
  },
  {
    id: 2,
    name: "新人存款嘉奖",
    image: new URL('@/assets/images/activity/pc_2.png', import.meta.url),
  },
  {
    id: 3,
    name: "公司入款限时加赠",
    image: new URL('@/assets/images/activity/pc_3.png', import.meta.url),
  },
  {
    id: 4,
    name: "新人存款嘉奖",
    image: new URL('@/assets/images/activity/pc_1.png', import.meta.url),
  },
  {
    id: 5,
    name: "新用户大礼包",
    image: new URL('@/assets/images/activity/pc_1.png', import.meta.url),
  },
  {
    id: 6,
    name: "公司入款限时加赠",
    image: new URL('@/assets/images/activity/pc_1.png', import.meta.url),
  },
  {
    id: 7,
    name: "新用户大礼包",
    image: new URL('@/assets/images/activity/pc_1.png', import.meta.url),
  },
  {
    id: 8,
    name: "新人存款嘉奖",
    image: new URL('@/assets/images/activity/pc_1.png', import.meta.url),
  },
  {
    id: 9,
    name: "新用户大礼包",
    image: new URL('@/assets/images/activity/pc_1.png', import.meta.url),
  },
  {
    id: 10,
    name: "公司入款限时加赠",
    image: new URL('@/assets/images/activity/pc_1.png', import.meta.url),
  },
  {
    id: 11,
    name: "新人存款嘉奖",
    image: new URL('@/assets/images/activity/pc_1.png', import.meta.url),
  },
];
const games2 = [];
export default {
  data() {
    return {
      typeId: this.$route.params.typeId,
      activeId: 1,
      gameList: [],
    };
  },
  mounted() {
    this.typeId = 1;
    this.getGameList(this.typeId);
  },
  methods: {
    getGameList(typeId) {
      setTimeout(() => {
        if (typeId === 1 || typeId === 0) {
          this.gameList = games1;
        } else {
          this.gameList = games2;
        }
      }, 100);
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
  background: url("@/assets/images/activity/qp-box.png") no-repeat top/auto
    273px;
}
.animation {
  animation: 0.6s ease 0s 1 normal none running fadeInUp;
}

.animation:hover {
  -webkit-animation: liItem 0.5s ease-in-out infinite alternate;
  animation: liItem 0.5s ease-in-out infinite alternate;
}
.activity-list li:nth-child(3n) {
  margin-right: 0;
}
</style>
