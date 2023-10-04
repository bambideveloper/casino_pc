<script setup>
import { ref } from "vue";
import Footer from "@/components/layout/Footer.vue";
import Header from "@/components/layout/Header.vue";

const gameList = ref([
  { title: "财神捕鱼", image: new URL('@/assets/images/game-1.png', import.meta.url)},
  { title: "抢庄牛牛", image: new URL('@/assets/images/game-2.png', import.meta.url) },
  { title: "森林舞会", image: new URL('@/assets/images/game-3.png', import.meta.url) },
  { title: "AG国际馆", image: new URL('@/assets/images/game-4.png', import.meta.url) },
  { title: "波塞冬捕鱼", image: new URL('@/assets/images/game-5.png', import.meta.url) },
  { title: "五龙捕鱼", image: new URL('@/assets/images/game-6.png', import.meta.url) },
  { title: "抢庄牛牛", image: new URL('@/assets/images/game-7.png', import.meta.url) },
  { title: "德州扑克", image: new URL('@/assets/images/game-8.png', import.meta.url) },
  { title: "炸金花", image: new URL('@/assets/images/game-9.png', import.meta.url) },
  { title: "抢庄牌九", image: new URL('@/assets/images/game-10.png', import.meta.url) },
  { title: "三公", image: new URL('@/assets/images/game-11.png', import.meta.url) },
  { title: "二八杠", image: new URL('@/assets/images/game-12.png', import.meta.url) },
]);

const cardGameList = ref([
  { title: "开元棋牌", image: new URL('@/assets/images/LG_KYQP.png', import.meta.url)},
  { title: "乐游棋牌", image: new URL('@/assets/images/LG_KYQP.png', import.meta.url) },
  { title: "VG棋牌", image: new URL('@/assets/images/LG_KYQP.png', import.meta.url) },
  { title: "美天棋牌", image: new URL('@/assets/images/LG_KYQP.png', import.meta.url) },
  { title: "FG棋牌", image: new URL('@/assets/images/LG_KYQP.png', import.meta.url) },
  { title: "双赢棋牌", image: new URL('@/assets/images/LG_KYQP.png', import.meta.url) },
]);
</script>

<template>
  <section>
    <div class="bg-[#161616] w-full h-[40px] box-shadow">
      <div
        class="flex justify-between max-w-screen-xl h-full overflow-hidden mx-auto"
      >
        <div class="flex overflow-hidden">
          <span
            class="speaker flex items-center pl-[45px] text-base text-[#fbe59c]"
          >
            开元棋牌公告：
          </span>
          <div>
            <div
              class="flex items-center w-[840px] h-[40px] overflow-hidden relative cursor-pointer text-[#999] text-xs"
            >
              <marquee
                >【开元棋牌官网：www.5t5.com】无限级代理火爆进行中，点击推广赚钱，分享自己的专属二维码（链接）邀请好即可获得丰厚的佣金，公司入款笔笔3%，虚拟货币存款笔笔3%，提现秒到帐！
                天天福利尽在优惠活动！
                下载手机APP，使用更加方便快捷哦！</marquee
              >
            </div>
          </div>
        </div>
        <router-link aria-current="page" to="/customer" class="pt-1 ml-4 cursor-pointer">
          <img src="@/assets/images/service.png" alt="service" />
        </router-link>
      </div>
    </div>

    <img
      src="@/assets/images/redPacket.gif"
      alt="gitf"
      class="fixed w-[60px] right-[10px] bottom-[100px] z-10 cursor-pointer"
    />

    <div class="max-w-screen-xl mx-auto pt-9 fadeInUp">
      <ul class="flex justify-between">
        <li
          class="w-[290px] h-[80px] quick-div relative overflow-hidden mr-3 bg-[#2b2b2b] cursor-pointer flex items-center"
        >
          <router-link aria-current="page" to="/register" class=" h-full w-full">
            <div class="bg-[#fbe59c] h-full w-full float-left left-bar"></div>
            <div class="absolute w-full h-full flex items-center">
              <div class="ml-9 float-left w-[52px] h-[52px] rounded-[50%]">
                <img
                  src="@/assets/images/pic1.png"
                  alt="pic 1"
                  class="block w-full h-full"
                />
              </div>
              <div class="float-left pl-4">
                <h2 class="leading-[38px] text-[22px] text-[#fbe59c]">
                  免费注册
                </h2>
                <p class="text-[#7b797a] text-xs">REGISTRATION</p>
              </div>
              <div class="wheel absolute right-[10px] w-16 h-16"></div>
            </div>
          </router-link>
        </li>
        <li
          class="w-[290px] h-[80px] quick-div relative overflow-hidden mr-3 bg-[#2b2b2b] cursor-pointer flex items-center"
        >
          <router-link aria-current="page" to="/" class=" h-full w-full">
            <div class="bg-[#3ea8ff] w-[10px] h-full float-left left-bar"></div>
            <div class="absolute w-full flex items-center">
              <div class="ml-9 float-left w-[52px] h-[52px] rounded-[50%]">
                <img
                  src="@/assets/images/pic2.png"
                  alt="pic 2"
                  class="block w-full h-full"
                />
              </div>
              <div class="float-left pl-4">
                <h2 class="leading-[38px] text-[22px] text-[#fbe59c]">
                  快速充值
                </h2>
                <p class="text-[#7b797a] text-xs">FAST RECHARGE</p>
              </div>
              <div class="wheel absolute right-[10px] w-16 h-16"></div>
            </div>
          </router-link>
        </li>
        <li
          class="w-[290px] h-[80px] quick-div relative overflow-hidden mr-3 bg-[#2b2b2b] cursor-pointer flex items-center"
        >
          <router-link aria-current="page" to="/activity/1" class=" h-full w-full">
            <div class="bg-[#fedb41] w-[10px] h-full float-left left-bar"></div>
            <div class="absolute w-full flex items-center">
              <div class="ml-9 float-left w-[52px] h-[52px] rounded-[50%]">
                <img
                  src="@/assets/images/pic3.png"
                  alt="pic 3"
                  class="block w-full h-full"
                />
              </div>
              <div class="float-left pl-4">
                <h2 class="leading-[38px] text-[22px] text-[#fbe59c]">
                  优惠大厅
                </h2>
                <p class="text-[#7b797a] text-xs">PROMOTION HALL</p>
              </div>
              <div class="wheel absolute right-[10px] w-16 h-16"></div>
            </div>
          </router-link>
        </li>
        <li
          class="w-[290px] h-[80px] quick-div relative overflow-hidden mr-3 bg-[#2b2b2b] cursor-pointer flex items-center"
        >
          <div class="bg-[#ff523e] w-[10px] h-full float-left left-bar"></div>
          <div class="absolute w-full flex items-center">
            <div class="ml-9 float-left w-[52px] h-[52px] rounded-[50%]">
              <img
                src="@/assets/images/pic4.png"
                alt="pic 4"
                class="block w-full h-full"
              />
            </div>
            <div class="float-left pl-4">
              <h2 class="leading-[38px] text-[22px] text-[#fbe59c]">APP下载</h2>
              <p class="text-[#7b797a] text-xs">APP DOWNLOAD</p>
            </div>
            <div class="wheel absolute right-[10px] w-16 h-16"></div>
          </div>
        </li>
      </ul>
    </div>

    <div class="fadeInUp">
      <div class="py-9 px-0 w-full">
        <h2
          class="text-center text-[34px] text-[#fbe59c] leading-[34px] pb-[10px]"
        >
          火爆游戏推荐
        </h2>
        <p class="text-center text-[#d7d7d7] text-[10px] leading-3 bg-6">
          Hot game recommendations
        </p>
      </div>

      <div class="max-w-screen-xl mx-auto">
        <ul class="pt-[10px] flex flex-wrap justify-between">
          <li
            v-for="item in gameList"
            :key="item"
            class="flex justify-between w-[290px] h-[125px] rounded-[15px] mr-[13px] mb-5 cursor-pointer bg-[#2b2b2b] hover:scale-105 game-list"
          >
            <div class="flex flex-col items-center pl-[30px] pt-[30px]">
              <h2 class="text-[#d7d7d7] text-[22px] leading-10">
                {{ item.title }}
              </h2>
            </div>
            <div class="flex items-center w-[110px] h-[110px] pt-2 pr-[10px]">
              <img :src="item.image" alt="game 1" class="w-full max-h-full" />
              <!-- <img
                src="@/assets/images/game-1.png"
                alt="game 1"
                class="w-full max-h-full"
              /> -->
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div>
      <div class="py-9 px-0 w-full fadeInUp">
        <h2
          class="text-center text-[34px] text-[#fbe59c] leading-[34px] pb-[10px]"
        >
          全球顶级娱乐平台一应俱全
        </h2>
        <p class="text-center text-[#d7d7d7] text-[10px] leading-3 bg-6">
          Top entertainment platforms in the world
        </p>
      </div>

      <div class="max-w-screen-xl mx-auto flex justify-between">
        <div class="w-[590px] rounded-[24px] animate-bounce-div fadeInLeft">
          <div class="w-full h-[200px] relative">
            <img
              src="@/assets/images/gameBg-1.png"
              alt="game bg-1"
              class="w-full h-full"
            />
            <img
              src="@/assets/images/game-detail-1.png"
              alt="game detail 1"
              class="absolute bottom-0 right-11 hover:transition-5 animate-bounce-img"
            />
          </div>
          <div
            class="w-full h-[215px] bg-[#2b2b2b] rounded-b-[25px] relative z-1"
          >
            <div class="w-[560px] mx-auto">
              <div class="w-full py-5 border-b border-black overflow-hidden">
                <p class="float-left leading-8 text-[#d7d7d7] w-[385px]">
                  全网最全棋牌游戏，汇聚世界顶级棋牌游戏平台，画质高清，玩法多样，亿元累计彩池，大奖一触即发！
                </p>
                <a
                  href="#/hall/chess"
                  class="play-btn w-[155px] h-[56px] border-[#fbe59c] float-right flex items-center box-border rounded-[28px] border-[3px] border-solid text-[#7b797a] text-xl indent-10 font-normal"
                  >PLAY</a
                >
              </div>
              <div class="w-full">
                <ul class="flex justify-between">
                  <li
                    class="flex justify-center flex-col h-[100px] cursor-pointer"
                    v-for="item in cardGameList"
                    :key="item"
                  >
                    <a href="#/hall/chess">
                      <img
                        src="@/assets/images/LG_KYQP.png"
                        alt="LG_KYQP"
                        class="w-[45px] h-[45px] my-3 opacity-40 grayscale"
                      />
                      <div class="text-[#90aca4]">{{ item.title }}</div>
                    </a>
                  </li>
                  <li
                    class="flex justify-center flex-col h-[100px] cursor-pointer"
                  >
                    <a href="#/hall/chess">
                      <img
                        src="@/assets/images/more.png"
                        alt="LG_KYQP"
                        class="w-[45px] h-[45px] my-3 opacity-40 grayscale"
                      />
                      <div class="text-[#90aca4]">More</div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="w-[590px] rounded-[24px] animate-bounce-div fadeInRight">
          <div class="w-full h-[200px] relative">
            <img
              src="@/assets/images/gameBg-2.png"
              alt="game bg-2"
              class="w-full h-full"
            />
            <img
              src="@/assets/images/game-detail-2.png"
              alt="game detail 2"
              class="absolute bottom-0 right-11 animate-bounce-img"
            />
          </div>
          <div
            class="w-full h-[215px] bg-[#2b2b2b] rounded-b-[25px] relative z-1"
          >
            <div class="w-[560px] mx-auto">
              <div class="w-full py-5 border-b border-black overflow-hidden">
                <p class="float-left leading-8 text-[#d7d7d7] w-[385px]">
                  全网最全棋牌游戏，汇聚世界顶级棋牌游戏平台，画质高清，玩法多样，亿元累计彩池，大奖一触即发！
                </p>
                <a
                  href="#/hall/chess"
                  class="play-btn w-[155px] h-[56px] border-[#fbe59c] float-right flex items-center box-border rounded-[28px] border-[3px] border-solid text-[#7b797a] text-xl indent-10 font-normal"
                  >PLAY</a
                >
              </div>
              <div class="w-full">
                <ul class="flex justify-between">
                  <li
                    class="flex justify-center flex-col h-[100px] cursor-pointer"
                    v-for="item in cardGameList"
                    :key="item"
                  >
                    <a href="#/hall/chess">
                      <img
                        src="@/assets/images/LG_KYQP.png"
                        alt="LG_KYQP"
                        class="w-[45px] h-[45px] my-3 opacity-40 grayscale"
                      />
                      <div class="text-[#90aca4]">{{ item.title }}</div>
                    </a>
                  </li>
                  <li
                    class="flex justify-center flex-col h-[100px] cursor-pointer"
                  >
                    <a href="#/hall/chess">
                      <img
                        src="@/assets/images/more.png"
                        alt="LG_KYQP"
                        class="w-[45px] h-[45px] my-3 opacity-40 grayscale"
                      />
                      <div class="text-[#90aca4]">More</div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="max-w-screen-xl mx-auto my-9 h-[200px]">
        <ul class="flex justify-between h-[200px]">
          <li
            class="relative w-[385px] h-[200px] cursor-pointer animate-bounce-div animate-fadeInUp"
          >
            <a href="#/hall/fish">
              <div class="layer-4 w-full h-full"></div>
              <div
                class="pic-6 w-[190px] h-[206px] absolute right-[10px] bottom-[10px] animate-bounce-img"
              ></div>
            </a>
          </li>
          <li
            class="relative w-[385px] h-[200px] cursor-pointer animate-bounce-div animate-fadeInUp"
          >
            <a href="#/hall/lottery">
              <div class="layer-5 w-full h-full"></div>
              <div
                class="pic-7 w-[222px] h-[206px] absolute right-[10px] bottom-[10px] animate-bounce-img"
              ></div>
            </a>
          </li>
          <li
            class="relative w-[385px] h-[200px] cursor-pointer animate-bounce-div animate-fadeInUp"
          >
            <a href="#/hall/fish">
              <div class="layer-6 w-full h-full"></div>
              <div
                class="pic-8 w-[190px] h-[206px] absolute right-[10px] bottom-[10px] animate-bounce-img"
              ></div>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="animate-bounceIn">
      <div class="flex relative justify-center h-[150px] bg-[#2b2b2b] w-full">
        <ul class="flex relative items-center circle-logo w-[1200px] mx-auto">
          <li class="justify-end flex items-center w-[300px] liveVideo">
            <a href="#/hall/video">
              <div
                class="w-[164px] h-[56px] bg-[#494949] border-[#fbe59c] flex items-center box-border rounded-[28px] border border-solid text-xl text-[#7b797a] play-btn indent-10 font-bold"
              >
                PLAY
              </div>
            </a>
          </li>
          <li
            class="justify-start flex items-center w-[300px] videoGame ml-[190px]"
          >
            <a href="#/hall/video">
              <div
                class="w-[164px] h-[56px] bg-[#494949] border-[#fbe59c] flex items-center box-border rounded-[28px] border border-solid text-xl text-[#7b797a] play-btn indent-10 font-bold"
              >
                PLAY
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="max-w-screen-xl mx-auto py-10 px-0 h-[536px] overflow-hidden">
      <div class="float-left animate-fadeInLeft">
        <img src="@/assets/images/indPhone.png" alt="indPhone" />
      </div>
      <div class="w-[490px] float-right animate-fadeInRight">
        <h2 class="pt-[60px] text-[42px] text-center text-[#fbe59c]">
          随时随地 从容畅玩
        </h2>
        <p class="leading-[70px] text-center text-base text-[#d7d7d7]">
          内地顶尖的手机投注APP
        </p>
        <ul class="flex justify-between">
          <li class="items-end relative flex flex-col w-[220px] media-1">
            <h3
              class="flex justify-center items-center w-[158px] h-[50px] rounded-[25px] text-[22px] text-[#d7d7d7] bg-[#494949]"
            >
              APP
            </h3>
            <div
              class="flex items-center w-[165px] h-[124px] pr-[42px] box-border my-[35px] bg-[130px] download-1"
            >
              <canvas
                width="112"
                height="112"
                class="p-1 bg-white ml-[2px]"
              ></canvas>
            </div>
            <div class="flex flex-col items-center">
              <span
                class="text-center leading-5 text-[#fbe59c] indent-[35px] w-[220px] break-words text-xs"
                >扫码下载APP</span
              >
              <h4
                class="text-center leading-5 text-[#666] indent-[35px] text-xs"
              >
                支持iOS & Android 全部移动设备
              </h4>
              <span
                class="text-center leading-5 text-[#fbe59c] indent-[35px] w-[220px] break-words text-xs"
              >
                https://5t5app.com/
              </span>
            </div>
          </li>
          <li class="relative flex flex-col w-[220px] media-2">
            <h3
              class="flex justify-center items-center w-[158px] h-[50px] rounded-[25px] text-[22px] text-[#d7d7d7] bg-[#494949]"
            >
              H5手机端
            </h3>
            <div
              class="flex items-center w-[165px] h-[124px] pr-[42px] box-border my-[35px] bg-[130px] download-2"
            >
              <canvas
                width="112"
                height="112"
                class="p-1 bg-white ml-[2px]"
              ></canvas>
            </div>
            <div class="flex flex-col items-center">
              <span
                class="text-center leading-5 text-[#fbe59c] indent-[35px] w-[220px] break-words text-xs"
                >无需下载直接访问</span
              >
              <h4
                class="text-center leading-5 text-[#666] indent-[35px] text-xs"
              >
                无需下载，手机输入网址即可访问
              </h4>
              <span
                class="text-center leading-5 text-[#fbe59c] indent-[35px] w-[220px] break-words text-xs"
              >
                5t5111.com
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div>
      <div class="py-9 px-0 w-full animate-fadeInUp">
        <h2 class="text-center text-[34px] text-[#fbe59c] leading-[34px]">
          品质服务 极致体验
        </h2>
        <p class="text-center text-[#d7d7d7] text-[10px] leading-3 bg-6">
          Quality service experience
        </p>
      </div>

      <div class="max-w-screen-xl mx-auto pb-[55px]">
        <ul class="w-full h-[100px] flex justify-between">
          <li
            class="float-left w-[270px] h-[100px] mr-9 box-shadow rounded-[23px] overflow-hidden hover:translate-y-[-10px] transition-5"
          >
            <img src="@/assets/images/index_118.png" alt="index-118" />
          </li>
          <li
            class="float-left w-[270px] h-[100px] mr-9 box-shadow rounded-[23px] overflow-hidden hover:translate-y-[-10px] transition-5"
          >
            <img src="@/assets/images/index_120.png" alt="index-120" />
          </li>
          <li
            class="float-left w-[270px] h-[100px] mr-9 box-shadow rounded-[23px] overflow-hidden hover:translate-y-[-10px] transition-5"
          >
            <img src="@/assets/images/index_122.png" alt="index-122" />
          </li>
          <li
            class="float-left w-[270px] h-[100px] mr-9 box-shadow rounded-[23px] overflow-hidden hover:translate-y-[-10px] transition-5"
          >
            <img src="@/assets/images/index_124.png" alt="index-124" />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.box-shadow {
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
}
.speaker {
  background: url("@/assets/images/speaker.png") 12px no-repeat;
}

.quick-div {
  border-radius: 0 40px 40px 0;
}

.left-bar {
  width: 10px;
  transition: 0.5s;
}

.transition-5 {
  transition: 0.5s;
}

.quick-div:hover .left-bar {
  width: 100%;
}

.quick-div:hover h2,
.quick-div:hover p {
  color: white !important;
}

.quick-div:hover .wheel {
  background: url("@/assets/images/wheel-white.png");
  -webkit-transform: translateY(-50%) rotate(1turn);
  transform: translateY(-50%) rotate(1turn);
  top: 50%;
}

.wheel {
  background: url("@/assets/images/wheel.png");
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  -webkit-transition: 0.8s;
  -o-transition: 0.8s;
  transition: 0.8s;
}

.game-list {
  transition: 0.5s;
}

.bg-6 {
  background: url("@/assets/images/bg6.png") 50% no-repeat;
}

.play-btn {
  background: url("@/assets/images/play.png") 100px no-repeat;
}

.layer-4 {
  background: url("@/assets/images/bg5.png") no-repeat;
}
.layer-5 {
  background: url("@/assets/images/bg4.png") no-repeat;
}
.layer-6 {
  background: url("@/assets/images/bg3.png") no-repeat;
}

.pic-6 {
  background: url("@/assets/images/pic11.png") no-repeat;
}
.pic-7 {
  background: url("@/assets/images/pic10.png") no-repeat;
}
.pic-8 {
  background: url("@/assets/images/pic9.png") no-repeat;
}

.circle-logo {
  background: url("@/assets/images/circle-logo.png") no-repeat 540px;
}

.circle-logo::before {
  content: url("@/assets/images/liveBg.png");
  margin-top: -12px;
  margin-left: -84px;
}
.circle-logo::after {
  content: url("/src/assets/images/videoBg.png");
  position: absolute;
  right: 0;
  bottom: 0;
}

.liveVideo {
  background: url("@/assets/images/live.png") no-repeat 0;
}

.videoGame {
  background: url("@/assets/images/video.png") no-repeat 100%;
}

.media-1::before {
  content: url("@/assets/images/wheat.png");
  position: absolute;
  left: 0;
  top: 98px;
  transform: scaleX(-1);
}

.media-2::after {
  content: url("@/assets/images/wheat.png");
  position: absolute;
  right: 0;
  top: 98px;
  transform: scale(1);
}

.download-1 {
  background: url("@/assets/images/app_text.png") no-repeat, #fbe59c;
}

.download-2 {
  background: url("@/assets/images/H5_text.png") no-repeat, #fbe59c;
}
</style>
