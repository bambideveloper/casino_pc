<script setup>
import { ref } from "vue";
const menuList = ref([
  {
    id: 1,
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
      {
        name: "乐游棋牌",
        btnName: "进入平台",
        href: "/hall/chess/2",
        image: new URL("@/assets/images/LG_SSOCHESS.png", import.meta.url),
      },
      {
        name: "VG棋牌",
        btnName: "进入平台",
        href: "/hall/chess/3",
        image: new URL("@/assets/images/LG_VG.png", import.meta.url),
      },
      {
        name: "美天棋牌",
        btnName: "进入平台",
        href: "/hall/chess/4",
        image: new URL("@/assets/images/LG_MTQP.png", import.meta.url),
      },
      {
        name: "FG棋牌",
        btnName: "进入平台",
        href: "/hall/chess/5",
        image: new URL("@/assets/images/LG_MTQP.png", import.meta.url),
      },
      {
        name: "双赢棋牌",
        btnName: "进入平台",
        href: "/hall/chess/6",
        image: new URL("@/assets/images/LG_SGWIN.png", import.meta.url),
      },
      {
        name: "盛世棋牌",
        btnName: "进入平台",
        href: "/hall/chess/7",
        image: new URL("@/assets/images/LG_SS.png", import.meta.url),
      },
      {
        name: "美博棋牌",
        btnName: "进入平台",
        href: "/hall/chess/8",
        image: new URL("@/assets/images/LG_MB.png", import.meta.url),
      },
      {
        name: "新世界棋牌",
        btnName: "进入平台",
        href: "/hall/chess/9",
        image: new URL("@/assets/images/LG_NWG.png", import.meta.url),
      },
      {
        name: "百胜棋牌",
        btnName: "进入平台",
        href: "/hall/chess/10",
        image: new URL("@/assets/images/LG_BS.png", import.meta.url),
      },
    ],
  },
  {
    id: 2,
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
    id: 3,
    name: "电子游艺",
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
    id: 4,
    name: "视讯游戏",
    href: "/hall/video",
    type: "menu",
    children: [
      {
        name: "AG国际馆",
        btnName: "开始游戏",
        href: "/hall/video",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
      {
        name: "BBIN视讯",
        btnName: "开始游戏",
        href: "/hall/video",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
      {
        name: "皇家视讯",
        btnName: "开始游戏",
        href: "/hall/video",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
      {
        name: "BG视讯",
        btnName: "开始游戏",
        href: "/hall/video",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
      {
        name: "PM真人视讯",
        btnName: "开始游戏",
        href: "/hall/video",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
      {
        name: "DG视讯BG视讯",
        btnName: "开始游戏",
        href: "/hall/video",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
      {
        name: "EBET视讯",
        btnName: "开始游戏",
        href: "/hall/video",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
    ],
  },
  {
    id: 5,
    name: "彩票游戏",
    href: "/hall/lottery/0",
    type: "menu",
    children: [
      {
        name: "新澳门六合彩",
        btnName: "开始游戏",
        href: "/hall/lottery/1",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
      {
        name: "香港六合彩",
        btnName: "开始游戏",
        href: "/hall/lottery/1",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
      {
        name: "急速PK10",
        btnName: "开始游戏",
        href: "/hall/lottery/1",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
      {
        name: "澳门六合彩",
        btnName: "开始游戏",
        href: "/hall/lottery/1",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
      {
        name: "快速牛牛",
        btnName: "开始游戏",
        href: "/hall/lottery/1",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
      {
        name: "极速六合彩",
        btnName: "开始游戏",
        href: "/hall/lottery/1",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
      {
        name: "急速六合彩",
        btnName: "开始游戏",
        href: "/hall/lottery/1",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
      {
        name: "快速六合彩",
        btnName: "开始游戏",
        href: "/hall/lottery/1",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
      {
        name: "腾讯五分彩",
        btnName: "开始游戏",
        href: "/hall/lottery/1",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
      {
        name: "急速赛车",
        btnName: "开始游戏",
        href: "/hall/lottery/1",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
    ],
  },
  {
    id: 6,
    name: "",
    image: "/src/assets/images/logo.png",
    type: "logo",
    href: "/",
    children: [],
  },
  {
    id: 7,
    name: "体育游戏",
    href: "/hall/sport",
    type: "menu",
    children: [
      {
        name: "IM体育",
        btnName: "进入平台",
        href: "/hall/sport",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
      {
        name: "沙巴体育",
        btnName: "进入平台",
        href: "/hall/sport",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
      {
        name: "皇冠体育",
        btnName: "进入平台",
        href: "/hall/sport",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
      {
        name: "FB体育",
        btnName: "进入平台",
        href: "/hall/sport",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
      {
        name: "开元体育",
        btnName: "进入平台",
        href: "/hall/sport",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
      {
        name: "PM体育",
        btnName: "进入平台",
        href: "/hall/sport",
        image: new URL("@/assets/images/LG_KYQP.png", import.meta.url),
      },
    ],
  },
  {
    id: 8,
    name: "电竞游戏",
    href: "/hall/e-competition",
    type: "menu",
    children: [],
  },
  {
    id: 9,
    name: "VIP特权",
    href: "",
    type: "menu",
    children: [],
  },
  {
    id: 10,
    name: "推广赚钱",
    href: "",
    type: "menu",
    children: [],
  },
  {
    id: 11,
    name: "优惠活动",
    href: "/activity/1",
    type: "activity",
    children: [{}],
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
            <router-link aria-current="page" to="#/">在线客服</router-link>
          </li>
          <li class="cursor-pointer border-r-[1px] px-2">
            <router-link aria-current="page" to="#/task">赏金任务</router-link>
          </li>
        </ul>
      </div>
      <div v-if="user['UserName'] != ''" class="flex itemx-center right-menu text-black text-sm">
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
          <router-link to="/" v-if="menu.type === 'logo'">
            <img src="@/assets/images/logo.png" alt="logo" />
          </router-link>
          <router-link :to="menu.href"
            class="flex items-center w-full text-base cursor-pointer text-[#d7d7d7] hover:text-[#fbe59c]" v-else>{{
              menu.name }}
          </router-link>
        </li>
      </ul>

      <div class="absolute left-0 right-0 bg-black z-10 animate-sideUnfold overflow-hidden" @mouseleave="mouseLeave()"
        v-if="hoverId !== '' &&
          menuList.filter((menu) => menu.id === hoverId)[0].children.length > 0
          ">
        <div class="max-w-screen-xl mx-auto">
          <div>
            <div class="w-full h-full relative">
              <div class="w-full h-full" v-for="menu in menuList" :key="menu">
                <div>
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
                    <li class="w-[120px] mr-0" v-for="submenu in menu.children" :key="submenu" v-else>
                      <router-link :to="submenu.href">
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
                    </li>
                  </ul>
                </div>
              </div>
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
          <div class="w-[60px] h-[60px] top-btn"></div>
        </li>
        <li class="px-[10px] pt-[18px] text-center text-[15px] relative animate-bounceIn-2 cursor-pointer">
          <div class="w-[60px] h-[60px] server-btn"></div>
        </li>
        <li class="px-[10px] pt-[18px] text-center text-[15px] relative animate-bounceIn-2 cursor-pointer">
          <router-link to="/download">
            <div class="app-download-btn w-[60px] h-[60px]"></div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted } from "vue";
import { useAuthStore } from "../../store/auth";
import { ElLoading } from "element-plus";
import { ElNotification, ElMessageBox } from "element-plus";
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
      user: null,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    login: async function () {
      const loading = ElLoading.service({
        lock: true,
        text: "加载中...",
        background: "rgba(0, 0, 0, 0.7)",
      });
      const { signIn } = useAuthStore();
      await signIn(this.username, this.password);
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
    user: function () {
      const { getUser } = useAuthStore();
      this.user = getUser;
      return getUser;
    },
  },
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
  background: url("@/assets/images/FW_totop.png");
  background-size: cover;
}

.top-btn:hover {
  animation: bounceInDown 0.5s linear both;
}

.visible .top-btn {
  display: block;
}

.server-btn {
  background: url("@/assets/images/FW_server.png");
  background-size: cover;
}

.server-btn:hover {
  animation: bounceInDown 0.5s linear both;
}

.app-download-btn {
  background: url("@/assets/images/FW_download.png");
  background-size: cover;
}

.app-download-btn:hover {
  animation: bounceInDown 0.5s linear both;
}
</style>
