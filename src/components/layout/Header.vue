<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import Swiper core and required modules
import { Pagination } from "swiper/modules";

const modules = [Pagination];
const menuList = ref([
  {
    id: 1,
    name: "",
    image: "/src/assets/images/logo.png",
    type: "logo",
    href: "/",
    children: [],
  },
  {
    id: 2,
    name: "首页",
    type: "dashboard",
    href: "/",
    children: [],
  },
  {
    id: 3,
    name: "皇冠体育",
    href: "/hall/sport",
    type: "sports",
    children: [
      {
        name: "足球",
        btnName: "进入平台",
        href: "/hall/sport/ft",
        image: new URL("@/assets/images/sport/ball_16.png", import.meta.url),
      },
      {
        name: "篮球",
        btnName: "进入平台",
        href: "/hall/sport/bk",
        image: new URL("@/assets/images/sport/ball_07.png", import.meta.url),
      },
    ],
  },
  {
    id: 4,
    name: "彩票游戏",
    href: "/hall/lottery",
    type: "lottery",
    children: [
      {
        name: "澳门六合彩",
        btnName: "开始游戏",
        image: new URL("@/assets/images/lottery/1661690557403.png", import.meta.url),
      },
      {
        name: "新澳门六合彩",
        btnName: "开始游戏",
        image: new URL("@/assets/images/lottery/1661690557403.png", import.meta.url),
      },
      {
        name: "香港六合彩",
        btnName: "开始游戏",
        image: new URL("@/assets/images/lottery/1657716617488.png", import.meta.url),
      },
      {
        name: "重庆时时彩",
        btnName: "开始游戏",
        image: new URL("@/assets/images/lottery/1657714819579.png", import.meta.url),
      },
      {
        name: "河内五分彩",
        btnName: "开始游戏",
        image: new URL("@/assets/images/lottery/1657714849313.png", import.meta.url),
      },
      {
        name: "澳洲幸运5",
        btnName: "开始游戏",
        image: new URL("@/assets/images/lottery/1657714889990.png", import.meta.url),
      },
      {
        name: "澳洲幸运10",
        btnName: "开始游戏",
        image: new URL("@/assets/images/lottery/1657714931262.png", import.meta.url),
      },
      {
        name: "幸运飞艇",
        btnName: "开始游戏",
        image: new URL("@/assets/images/lottery/1657714996653.png", import.meta.url),
      },
      {
        name: "北京PK拾",
        btnName: "开始游戏",
        image: new URL("@/assets/images/lottery/1657715017976.png", import.meta.url),
      },
      {
        name: "天津时时彩",
        btnName: "开始游戏",
        image: new URL("@/assets/images/lottery/1657715051568.png", import.meta.url),
      },
      {
        name: "新疆时时彩",
        btnName: "开始游戏",
        image: new URL("@/assets/images/lottery/1657715081433.png", import.meta.url),
      },
      {
        name: "重庆十分彩",
        btnName: "开始游戏",
        image: new URL("@/assets/images/lottery/1657715118483.png", import.meta.url),
      },
      {
        name: "广东十分彩",
        btnName: "开始游戏",
        image: new URL("@/assets/images/lottery/1657715213155.png", import.meta.url),
      },
      {
        name: "广西十分彩",
        btnName: "开始游戏",
        image: new URL("@/assets/images/lottery/1657715266155.png", import.meta.url),
      },
      {
        name: "天津十分彩",
        btnName: "开始游戏",
        image: new URL("@/assets/images/lottery/1657715295309.png", import.meta.url),
      },
      {
        name: "上海时时乐",
        btnName: "开始游戏",
        image: new URL("@/assets/images/lottery/1657715460185.png", import.meta.url),
      },
      {
        name: "广东11选5",
        btnName: "开始游戏",
        image: new URL("@/assets/images/lottery/1657715499820.png", import.meta.url),
      },
      {
        name: "福彩3D",
        btnName: "开始游戏",
        image: new URL("@/assets/images/lottery/1657716481773.png", import.meta.url),
      },
      {
        name: "排列3",
        btnName: "开始游戏",
        image: new URL("@/assets/images/lottery/1657716517091.png", import.meta.url),
      },
    ],
  },
  {
    id: 5,
    name: "真人游戏",
    href: "/hall/video",
    type: "video",
    children: [
      {
        name: "新葡京OG东方馆",
        btnName: "开始游戏",
        redirect: 'OG_GAME',
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
      {
        name: "AG国际厅",
        btnName: "开始游戏",
        redirect: 'AG_GAME_2',
        image: new URL("@/assets/images/LG_AGDZ.40cc9c14.png", import.meta.url),
      },
      {
        name: "AG旗舰厅",
        btnName: "开始游戏",
        redirect: 'AG_GAME_1',
        image: new URL("@/assets/images/LG_AGDZ.40cc9c14.png", import.meta.url),
      },
      {
        name: "AGVIP厅",
        btnName: "开始游戏",
        redirect: 'AG_GAME_4',
        image: new URL("@/assets/images/LG_AGDZ.40cc9c14.png", import.meta.url),
      },
      {
        name: "BBIN馆",
        btnName: "开始游戏",
        redirect: 'BBIN_GAME_1',
        image: new URL("@/assets/images/LG_BBINDZ.8791659c.png", import.meta.url),
      },
    ],
  },
  {
    id: 6,
    name: "棋牌游戏",
    href: "/hall/chess/1",
    type: "menu",
    children: [
      {
        name: "开元棋牌",
        btnName: "进入平台",
        href: "/hall/chess/1",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
    ],
  },
  {
    id: 7,
    name: "电子游戏",
    href: "/hall/electronic/1",
    type: "menu",
    children: [
      {
        name: "AG电子",
        btnName: "进入平台",
        href: "/hall/electronic/1",
        image: new URL("@/assets/images/LG_AGDZ.40cc9c14.png", import.meta.url),
      },
      {
        name: "BBIN电子",
        btnName: "进入平台",
        href: "/hall/electronic/2",
        image: new URL("@/assets/images/LG_BBINDZ.8791659c.png", import.meta.url),
      },
      {
        name: "PT电子",
        btnName: "进入平台",
        href: "/hall/electronic/3",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
      {
        name: "MG电子",
        btnName: "进入平台",
        href: "/hall/electronic/4",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
    ],
  },
  {
    id: 8,
    name: "捕鱼游戏",
    href: "/hall/fish/0",
    type: "menu",
    children: [
      {
        name: "财神捕鱼",
        btnName: "开始游戏",
        href: "/hall/fish/1",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
      {
        name: "金蟾捕鱼",
        btnName: "开始游戏",
        href: "/hall/fish/1",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
      {
        name: "牛牛捕鱼",
        btnName: "开始游戏",
        href: "/hall/fish/1",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
      {
        name: "五龙捕鱼",
        btnName: "开始游戏",
        href: "/hall/fish/1",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
      {
        name: "波塞冬捕鱼",
        btnName: "开始游戏",
        href: "/hall/fish/1",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
      {
        name: "捕鱼天王",
        btnName: "开始游戏",
        href: "/hall/fish/1",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
      {
        name: "淘金捕鱼",
        btnName: "开始游戏",
        href: "/hall/fish/1",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },

      {
        name: "捕鱼嘉年华3D",
        btnName: "开始游戏",
        href: "/hall/fish/1",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
      {
        name: "MT3D捕鱼",
        btnName: "开始游戏",
        href: "/hall/fish/1",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
      {
        name: "美人鱼传说",
        btnName: "开始游戏",
        href: "/hall/fish/1",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
      {
        name: "MT李逵劈鱼",
        btnName: "开始游戏",
        href: "/hall/fish/1",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
      {
        name: "捕鱼Disco",
        btnName: "开始游戏",
        href: "/hall/fish/1",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
      {
        name: "龙王捕鱼I",
        btnName: "开始游戏",
        href: "/hall/fish/1",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
      {
        name: "福运捕鱼",
        btnName: "开始游戏",
        href: "/hall/fish/1",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
      {
        name: "龙王捕鱼II",
        btnName: "开始游戏",
        href: "/hall/fish/1",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
      {
        name: "TH3D捕鱼",
        btnName: "开始游戏",
        href: "/hall/fish/1",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
      {
        name: "TH李逵劈鱼",
        btnName: "开始游戏",
        href: "/hall/fish/1",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
      {
        name: "大闹天宫1",
        btnName: "开始游戏",
        href: "/hall/fish/1",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
      {
        name: "大闹天宫2",
        btnName: "开始游戏",
        href: "/hall/fish/1",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
      {
        name: "金蟾捕鱼",
        btnName: "开始游戏",
        href: "/hall/fish/1",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
      {
        name: "大圣捕鱼",
        btnName: "开始游戏",
        href: "/hall/fish/1",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
      {
        name: "金蟾海王2",
        btnName: "开始游戏",
        href: "/hall/fish/1",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
      {
        name: "寻龙夺宝",
        btnName: "开始游戏",
        href: "/hall/fish/1",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
      {
        name: "欢乐捕鱼",
        btnName: "开始游戏",
        href: "/hall/fish/1",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
      {
        name: "美人捕鱼",
        btnName: "开始游戏",
        href: "/hall/fish/1",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
      {
        name: "捕鱼大乱斗",
        btnName: "开始游戏",
        href: "/hall/fish/1",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
      {
        name: "TH捕鸟达人",
        btnName: "开始游戏",
        href: "/hall/fish/1",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
      {
        name: "大师捕鱼",
        btnName: "开始游戏",
        href: "/hall/fish/1",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
      {
        name: "西游捕鱼",
        btnName: "开始游戏",
        href: "/hall/fish/1",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
      {
        name: "雷霆战警",
        btnName: "开始游戏",
        href: "/hall/fish/1",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
      {
        name: "魔法王者",
        btnName: "开始游戏",
        href: "/hall/fish/1",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
      {
        name: "海盗抢鱼",
        btnName: "开始游戏",
        href: "/hall/fish/1",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
      {
        name: "海盗捕鱼",
        btnName: "开始游戏",
        href: "/hall/fish/1",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
      {
        name: "捕虫达人",
        btnName: "开始游戏",
        href: "/hall/fish/1",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
      {
        name: "祖玛龙",
        btnName: "开始游戏",
        href: "/hall/fish/1",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
      {
        name: "祖玛荣耀",
        btnName: "开始游戏",
        href: "/hall/fish/1",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
      {
        name: "轻松捕鱼",
        btnName: "开始游戏",
        href: "/hall/fish/1",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
      {
        name: "西游捕鱼",
        btnName: "开始游戏",
        href: "/hall/fish/1",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
      {
        name: "大仙捕鱼",
        btnName: "开始游戏",
        href: "/hall/fish/1",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
      {
        name: "海盗抢鱼",
        btnName: "开始游戏",
        href: "/hall/fish/1",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
      {
        name: "海王2",
        btnName: "开始游戏",
        href: "/hall/fish/1",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
      {
        name: "FG捕鸟达人",
        btnName: "开始游戏",
        href: "/hall/fish/1",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
      {
        name: "异形猎人",
        btnName: "开始游戏",
        href: "/hall/fish/1",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
      {
        name: "捕鱼一路发",
        btnName: "开始游戏",
        href: "/hall/fish/1",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
      {
        name: "猎龙高手",
        btnName: "开始游戏",
        href: "/hall/fish/1",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
      {
        name: "大闹天宮",
        btnName: "开始游戏",
        href: "/hall/fish/1",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
      {
        name: "3D美人渔",
        btnName: "开始游戏",
        href: "/hall/fish/1",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
      {
        name: "开元李逵捕鱼",
        btnName: "开始游戏",
        href: "/hall/fish/1",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
      {
        name: "开元红包捕鱼",
        btnName: "开始游戏",
        href: "/hall/fish/1",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
      {
        name: "李逵劈鱼",
        btnName: "开始游戏",
        href: "/hall/fish/1",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
      {
        name: "捕鱼王中王",
        btnName: "开始游戏",
        href: "/hall/fish/1",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
      {
        name: "3D海盗来了",
        btnName: "开始游戏",
        href: "/hall/fish/1",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
      {
        name: "3D千炮捕鱼",
        btnName: "开始游戏",
        href: "/hall/fish/1",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
      {
        name: "捕鸟达人",
        btnName: "开始游戏",
        href: "/hall/fish/1",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
      {
        name: "捕鱼大战",
        btnName: "开始游戏",
        href: "/hall/fish/1",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
      {
        name: "捕鱼来了",
        btnName: "开始游戏",
        href: "/hall/fish/1",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
      {
        name: "猎鼠达人3D",
        btnName: "开始游戏",
        href: "/hall/fish/1",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
      {
        name: "疯狂捕鱼",
        btnName: "开始游戏",
        href: "/hall/fish/1",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
      {
        name: "疯狂魔鬼城",
        btnName: "开始游戏",
        href: "/hall/fish/1",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
    ],
  },
  {
    id: 9,
    name: "优惠活动",
    href: "/activity/1",
    type: "activity",
    children: [{}],
  },
  {
    id: 10,
    name: "在线客服",
    href: "/customer",
    type: "online_service",
    children: [],
  },
]);
</script>

<template>
  <div class="bg-[#fbe59c] w-full h-[35px]">
    <div class="text-black text-sm flex justify-between items-center w-[1200px] h-full mx-auto">
      <div class="flex items-center left-menu">
        <div>
          <span>{{ new Date().toISOString() }}</span>
        </div>
        <ul class="flex pl-[25px]">
          <li class="cursor-pointer border-r-[1px] pr-2 border-black">
            <router-link aria-current="page" class="text-red-500" to="#/">网站首页</router-link>
          </li>
          <li class="cursor-pointer border-r-[1px] px-2 border-black">
            <router-link aria-current="page" to="/customer">在线客服</router-link>
          </li>
          <li class="cursor-pointer border-r-[1px] px-2">
            <router-link aria-current="page" to="#/task">赏金任务</router-link>
          </li>
        </ul>
      </div>
      <div v-if="user?.id" class="flex itemx-center right-menu text-black text-sm">
        <span class="text-black text-sm">ID: {{ user?.id }}</span>
        <img src="@/assets/images/vip_1.png" alt="vip" class="max-h-[20px] ml-5" />
        <div class="pl-5 text-black text-sm">
          <span>余额：</span>
          <span class="text-red-600">{{ user?.Money }}</span> 元
        </div>
        <div
          class="flex justify-center items-center w-[70px] h-[20px] rounded bg-black text-xs text-[#d7d7d7] cursor-pointer ml-3">
          一键刷新
        </div>
        <div class="pl-5">
          <router-link to="/selfCenter" class="cursor-pointer text-black">会员中心</router-link>
        </div>
        <router-link to="/selfCenter/message" class="text-black cursor-pointer pl-5">我的消息</router-link>
        <span class="text-black cursor-pointer pl-5" @click="logout">登出</span>
      </div>
      <div class="flex items-center right-menu" v-else>
        <input type="text" placeholder="账号" v-model="username"
          class="w-[130px] h-[25px] bg-[#cfbb76] rounded-[5px] indent-[10px] text-black focus-within:outline-none focus:outline-none" />
        <input type="password" placeholder="密码" v-model="password"
          class="w-[130px] h-[25px] bg-[#cfbb76] rounded-[5px] indent-[10px] text-black ml-3 focus-within:outline-none focus:outline-none" />
        <span class="flex justify-center w-[70px] h-[20px] rounded bg-black text-xs text-[#d7d7d7] cursor-pointer ml-3"
          @click="login">
          登录
        </span>
        <router-link to="/register" class="text-black cursor-pointer ml-3">
          <span
            class="bg-red-500 text-white flex justify-center w-[70px] h-[20px] rounded text-xs cursor-pointer">注册</span>
        </router-link>
      </div>
    </div>
  </div>

  <div class="relative w-full bg-black h-[85px] box-shadow">
    <div class="w-[1200px] mx-auto h-full">
      <ul class="flex items-center justify-between">
        <li :class="menu.type === 'menu' ? 'w-[84px] h-[85px] menu-li flex' : ''" v-for="menu in menuList" :key="menu"
          @mouseenter="mouseEnter(menu.id)">
          <router-link to="/" v-if="menu.type === 'logo'" style="position: relative;">
            <img src="@/assets/images/logo.png" alt="logo" width="190" />
            <div class="logo-text">{{ HOST_URL }}</div>
          </router-link>
          <router-link :to="menu.href"
            class="flex items-center w-full text-base cursor-pointer text-[#d7d7d7] hover:text-[#fbe59c]" v-else>
            {{ menu.name }}
          </router-link>
        </li>
      </ul>

      <div class="absolute left-0 right-0 bg-black z-10 animate-sideUnfold overflow-hidden" @mouseleave="mouseLeave()"
        v-if="hoverId !== '' &&
          menuList.filter((menu) => menu.id === hoverId)[0].children.length > 0
          ">
        <div class="max-w-screen-xl mx-auto">
          <div class="w-full h-full relative">
            <div class="w-full h-full" v-for="menu in menuList" :key="menu">
              <ul v-if="menu.id === hoverId" class="w-full left-[-120px] flex justify-start overflow-hidden">
                <div v-if="menu.type === 'activity'">
                  <dl class="flex">
                    <dd class="flex max-w-full transition-[.5s] overflow-hidden">
                      <div class="w-[200px]">
                        <h2 class="pt-[35px] leading-[50px] text-center text-[26px] text-white">
                          劲爆优惠
                        </h2>
                        <p class="text-[#d7d7d7] text-center text-sm leading-[14px]">
                          PROMOTIONS
                        </p>
                        <span
                          class="mt-[25px] mx-auto flex items-center justify-center w-[148px] h-[45px] rounded-[22px] box-border text-sm text-[#fbe59c] border-2 border-solid border-[#fbe59c] transition-[.5s]">了解详情</span>
                      </div>
                      <div class="flex mr-[1px]">
                        <img src="@/assets/images/side6.png" alt="side" class="w-full h-[186px] transition-[.5s]" />
                      </div>
                    </dd>
                    <dd class="flex max-w-full transition-[.5s] overflow-hidden">
                      <div class="w-[200px]">
                        <h2 class="pt-[35px] leading-[50px] text-center text-[26px] text-white">
                          优惠申请
                        </h2>
                        <p class="text-[#d7d7d7] text-center text-sm leading-[14px]">
                          PROMOTIONS
                        </p>
                        <span
                          class="mt-[25px] mx-auto flex items-center justify-center w-[148px] h-[45px] rounded-[22px] box-border text-sm text-[#fbe59c] border-2 border-solid border-[#fbe59c] transition-[.5s]">了解详情</span>
                      </div>
                      <div class="flex mr-[1px]">
                        <img src="@/assets/images/side7.png" alt="side" class="w-full h-[186px] transition-[.5s]" />
                      </div>
                    </dd>
                  </dl>
                </div>
                <Swiper :modules="modules" :slidesPerView="10" :spaceBetween="8" style="height: auto"
                  @swiper="getSwiperRef" v-else-if="menu.name == '彩票游戏'">
                  <SwiperSlide v-for="(submenu, subIndex) in menu.children" :key="subIndex" :virtualIndex="subIndex">
                    <li class="w-[120px] mr-0">
                      <div class="w-[120px]">
                        <div class="flex items-center justify-center h-[95px]">
                          <img :src="submenu.image" alt="LG KYQP" class="h-[60px]" />
                        </div>
                        <div class="text-center text-sm text-[#d7d7d7] leading-[14px] pb-4">
                          {{ submenu.name }}
                        </div>
                        <span @click="goToLotteryPage(submenu.name)"
                          class="flex justify-center items-center mx-auto w-[107px] h-[40px] rounded-[20px] box-border text-[#fbe59c] border-2 border-solid border-[#fbe59c] transition-[.5s] hover:bg-[#fbe59c] hover:text-black hover:border-none cursor-pointer text-xs">
                          {{ submenu.btnName }}
                        </span>
                      </div>
                    </li>
                  </SwiperSlide>
                </Swiper>
                <li class="w-[120px] mr-0" v-for="submenu in menu.children" :key="submenu" v-else>
                  <router-link :to="submenu.href" v-if="menu.type != 'video'">
                    <div class="w-[120px]">
                      <div class="flex items-center justify-center h-[95px]">
                        <img :src="submenu.image" alt="LG KYQP" class="h-[60px]" />
                      </div>
                      <div class="text-center text-sm text-[#d7d7d7] leading-[14px] pb-4">
                        {{ submenu.name }}
                      </div>
                      <span
                        class="flex justify-center items-center mx-auto w-[107px] h-[40px] rounded-[20px] box-border text-[#fbe59c] border-2 border-solid border-[#fbe59c] transition-[.5s] hover:bg-[#fbe59c] hover:text-black hover:border-none cursor-pointer text-xs">
                        {{ submenu.btnName }}
                      </span>
                    </div>
                  </router-link>
                  <div class="w-[120px]" v-else>
                    <div class="flex items-center justify-center h-[95px]">
                      <img :src="submenu.image" alt="LG KYQP" class="h-[60px]" />
                    </div>
                    <div class="text-center text-sm text-[#d7d7d7] leading-[14px] pb-4">
                      {{ submenu.name }}
                    </div>
                    <span @click="redirectRealGame(submenu.redirect)"
                      class="flex justify-center items-center mx-auto w-[107px] h-[40px] rounded-[20px] box-border text-[#fbe59c] border-2 border-solid border-[#fbe59c] transition-[.5s] hover:bg-[#fbe59c] hover:text-black hover:border-none cursor-pointer text-xs">
                      {{ submenu.btnName }}
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <div class="fixed top-[50%] right-0 translate-y-[-50%] z-10">
      <ul>
        <li @click="scrollToTop" :class="{
          'px-[10px] pt-[18px] text-center text-[15px] relative cursor-pointer': true,
          ' animate-bounceIn-2 visible': showBackToTop,
        }">
          <div class="w-[50px] h-[50px] top-btn"></div>
        </li>
        <li class="px-[10px] pt-[18px] text-center text-[15px] relative animate-bounceIn-2 cursor-pointer">
          <router-link aria-current="page" to="/customer">
            <div class="w-[50px] h-[50px] server-btn"></div>
          </router-link>
        </li>
        <li class="px-[10px] pt-[18px] text-center text-[15px] relative animate-bounceIn-2 cursor-pointer">
          <div class="w-[50px] h-[50px] cash-btn"></div>
        </li>
        <li class="px-[10px] pt-[18px] text-center text-[15px] relative animate-bounceIn-2 cursor-pointer">
          <router-link to="/download">
            <div class="app-download-btn w-[50px] h-[50px]"></div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
  <el-dialog v-model="loginSuccessDialogVisible" title="登录成功公告" width="60%" align-center>
    <img src="@/assets/images/pc_3.gif" />
  </el-dialog>
  <el-dialog v-model="alertDialogVisible" title="平台公告" width="60%" align-center>
    <img src="@/assets/images/pc_1.gif" />
  </el-dialog>
</template>

<script>
import { onMounted, onUnmounted } from "vue";
import { useAuthStore } from "../../store/auth";
import { ElLoading } from "element-plus";
import { ElNotification, ElMessageBox } from "element-plus";
import { ogGameStore } from "../../store/og_game";
import { agGameStore } from "../../store/ag_game";
import { bbinGameStore } from "../../store/bbin_game";
import { useSysConfigStore } from "../../store/sysConfig";
import { APP_URL } from "../../config";
import { HOST_URL } from "../../config";
import { showToast } from 'vant'
import router from "../../router";
export default {
  name: "Header",
  setup() {
    const { signIn } = useAuthStore();
    return {
      signIn,
    };
  },
  data() {
    return {
      hoverId: "",
      showBackToTop: false,
      username: "",
      password: "",
      alertDialogVisible: false,
      loginSuccessDialogVisible: false
    };
  },
  async mounted() {
    window.addEventListener("scroll", this.handleScroll);
    const { getSysConfigValue } = useSysConfigStore();
    await getSysConfigValue();
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    goToSportsPage: function (name) {
      if (!localStorage.getItem("token")) {
        showToast("您还没有登录或登录超时，请重新登录...");
        return;
      } else {
        switch (name) {
          case "足球":
            // window.open(`${APP_URL}/#/stadiumsDetail?token=${localStorage.getItem("token")}&type=ft`, '_blank');
            break;
          case "篮球":
            // window.open(`${APP_URL}/#/stadiumsDetail?token=${localStorage.getItem("token")}&type=bk`, '_blank');
            break;
        }
      }
    },
    goToLotteryPage: function (name) {
      if (!localStorage.getItem("token")) {
        showToast("您还没有登录或登录超时，请重新登录...");
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
        if (ogSuccess.value && redirectOGUrl.value != "") {
          window.open(redirectOGUrl.value, '_blank');
        } else {
          showToast(ogErrMessage.value);
        }
      } else if (redirect == "AG_GAME_2") {
        const { dispatchRedirectAGUrl } = agGameStore();
        await dispatchRedirectAGUrl({ game_type: 2 }, this.token);
        console.log(agSuccess.value, redirectAGUrl.value);
        if (agSuccess.value && redirectAGUrl.value != "") {
          window.open(redirectAGUrl.value, '_blank');
        } else {
          showToast(agErrMessage.value);
        }
      } else if (redirect == "AG_GAME_1") {
        const { dispatchRedirectAGUrl } = agGameStore();
        await dispatchRedirectAGUrl({ game_type: 1 }, this.token);
        if (agSuccess.value && redirectAGUrl.value != "") {
          window.open(redirectAGUrl.value, '_blank');
        } else {
          showToast(agErrMessage.value);
        }
      } else if (redirect == "AG_GAME_4") {
        const { dispatchRedirectAGUrl } = agGameStore();
        await dispatchRedirectAGUrl({ game_type: 4 }, this.token);
        if (agSuccess.value && redirectAGUrl.value != "") {
          window.open(redirectAGUrl.value, '_blank');
        } else {
          showToast(agErrMessage.value);
        }
      } else if (redirect == "BBIN_GAME_1") {
        const { dispatchRedirectBBINUrl } = bbinGameStore();
        await dispatchRedirectBBINUrl({ game_type: 1 }, this.token);
        if (bbinSuccess.value && redirectBBINUrl.value != "") {
          window.open(redirectBBINUrl.value, '_blank');
        } else {
          showToast(bbinErrMessage.value);
        }
      }

      loading.close();
    },
    login: async function () {
      const loading = ElLoading.service({
        lock: true,
        text: "加载中...",
        background: "rgba(0, 0, 0, 0.7)",
      });
      const { signIn } = useAuthStore();
      await signIn(this.username, this.password);
      if (this.loginSuccess) {
        this.loginSuccessDialogVisible = true;
      }
      this.username = "";
      this.password = "";
      loading.close();
    },
    logout() {
      const { dispatchLogout } = useAuthStore();
      dispatchLogout();
    },
    handleScroll() {
      this.showBackToTop = window.pageYOffset > 0;
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    mouseEnter(id) {
      this.hoverId = id;
    },
    mouseLeave() {
      this.hoverId = "";
    },
  },
  computed: {
    loginSuccess: function () {
      const { getSuccess } = useAuthStore();
      return getSuccess
    },
    user: function () {
      const { getUser } = useAuthStore();
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
      const { getRedirectOGUrl } = storeToRefs(ogGameStore());
      return getRedirectOGUrl.value;
    },
    redirectAGUrl() {
      const { getRedirectAGUrl } = storeToRefs(agGameStore());
      return getRedirectAGUrl.value;
    },
    redirectBBINUrl() {
      const { getRedirectBBINUrl } = storeToRefs(bbinGameStore());
      return getRedirectBBINUrl.value;
    },
    agSuccess() {
      const { getSuccess } = storeToRefs(agGameStore());
      return getSuccess.value
    },
    agErrMessage: function () {
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
    ogSuccess() {
      const { getSuccess } = storeToRefs(ogGameStore());
      return getSuccess.value
    },
    ogErrMessage: function () {
      const { getErrMessage } = storeToRefs(ogGameStore());
      return getErrMessage.value
    },
  },
  watch: {
    loginSuccessDialogVisible: function (value) {
      if (!value) {
        this.alertDialogVisible = true;
      }
    }
  }
};
</script>

<style scoped>
.box-shadow {
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
}

.menu-li {
  background: url("@/assets/images/arrow.png") 100% no-repeat;
}

.top-btn {
  display: none;
  background: url("@/assets/images/service/一键置顶.png");
  background-size: cover;
}

.top-btn:hover {
  animation: bounceInDown 0.5s linear both;
}

.visible .top-btn {
  display: block;
}

.server-btn {
  background: url("@/assets/images/service/在线客服.png");
  background-size: cover;
}

.server-btn:hover {
  animation: bounceInDown 0.5s linear both;
}

.cash-btn {
  background: url("@/assets/images/service/代理合作.png");
  background-size: cover;
}

.cash-btn:hover {
  animation: bounceInDown 0.5s linear both;
}

.app-download-btn {
  background: url("@/assets/images/service/下载APP.png");
  background-size: cover;
}

.app-download-btn:hover {
  animation: bounceInDown 0.5s linear both;
}

.logo-text {
  position: absolute;
  bottom: 1px;
  left: 64px;
  color: #e1d074;
}
</style>
