<template>
  <div class="w-full qp-box">
    <div
      class="flex justify-between w-[1200px] h-full my-0 mx-auto overflow-hidden"
    >
      <div class="mt-5 animate-fadeInLeft">
        <img src="@/assets/images/sport/sport-banner.png" alt="sport img" />
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
          最多投注类型，最强游戏体验，激情赛事，特别投注，各种有趣玩法，应有尽有最全赛事覆盖，祝您赢到人生巅峰！
        </p>
        <dl class="text-center leading-[75px] py-[45px]">
          <dd class="animate-ab-25 inline-block px-2 align-middle">
            <img src="@/assets/images/sport/ball_07.png" alt="sport-1" />
          </dd>
          <dd class="animate-ab-30 inline-block px-2 align-middle">
            <img src="@/assets/images/sport/ball_10.png" alt="sport-1" />
          </dd>
          <dd class="animate-ab-35 inline-block px-2 align-middle">
            <img src="@/assets/images/sport/ball_13.png" alt="sport-1" />
          </dd>
          <dd class="animate-ab-30 inline-block px-2 align-middle">
            <img src="@/assets/images/sport/ball_16.png" alt="sport-1" />
          </dd>
          <dd class="animate-ab-25 inline-block px-2 align-middle">
            <img src="@/assets/images/sport/ball_19.png" alt="sport-1" />
          </dd>
        </dl>
        <ul class="px-[50px]">
          <li class="inline-block py-[10px] px-[30px]">
            <router-link
              to="/imsports"
              target="_blank"
              v-if="authUser !== null"
              class="w-[185px] h-[54px] block text-center leading-[54px] rounded-[27px] text-[26px] text-[#fbe59c] bg-white box-shadow hover:text-black sport-btn cursor-pointer"
            >
              IM体育
            </router-link>
            <span
              v-else
              class="w-[185px] h-[54px] block text-center leading-[54px] rounded-[27px] text-[26px] text-[#fbe59c] bg-white box-shadow hover:text-black sport-btn cursor-pointer"
            >
              IM体育
            </span>
          </li>
          <li class="inline-block py-[10px] px-[30px]">
            <span
              class="w-[185px] h-[54px] block text-center leading-[54px] rounded-[27px] text-[26px] text-[#fbe59c] bg-white box-shadow hover:text-black sport-btn cursor-pointer"
            >
              沙巴体育
            </span>
          </li>
          <li class="inline-block py-[10px] px-[30px]">
            <span
              class="w-[185px] h-[54px] block text-center leading-[54px] rounded-[27px] text-[26px] text-[#fbe59c] bg-white box-shadow hover:text-black sport-btn cursor-pointer"
            >
              皇冠体育
            </span>
          </li>
          <li class="inline-block py-[10px] px-[30px]">
            <span
              class="w-[185px] h-[54px] block text-center leading-[54px] rounded-[27px] text-[26px] text-[#fbe59c] bg-white box-shadow hover:text-black sport-btn cursor-pointer"
            >
              FB体育
            </span>
          </li>
          <li class="inline-block py-[10px] px-[30px]">
            <span
              class="w-[185px] h-[54px] block text-center leading-[54px] rounded-[27px] text-[26px] text-[#fbe59c] bg-white box-shadow hover:text-black sport-btn cursor-pointer"
            >
              开元体育
            </span>
          </li>
          <li class="inline-block py-[10px] px-[30px]">
            <span
              class="w-[185px] h-[54px] block text-center leading-[54px] rounded-[27px] text-[26px] text-[#fbe59c] bg-white box-shadow hover:text-black sport-btn cursor-pointer"
            >
              PM体育
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loggedUser: localStorage.getItem("authUser"),
    };
  },
};
</script>
<style scoped>
.qp-box {
  width: 100%;
  height: 700px;
  background-size: 100% auto;
}
.box-shadow {
  box-shadow: 0 5px 10px #000;
}
.sport-btn:hover {
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#fff1c5),
    to(#e9d481)
  );
  background: -o-linear-gradient(left, #fff1c5, #e9d481);
  background: linear-gradient(90deg, #fff1c5, #e9d481);
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
