<template>
  <div class="w-full qp-box h-[835px] relative flex flex-wrap overflow-hidden">
    <div class="flex justify-center w-full h-full relative">
      <div class="w-full h-full overflow-hidden">
        <carousel
          :items-to-show="1"
          :wrap-around="true"
          :modelValue="typeId - 1"
        >
          <slide
            v-for="item in list"
            :key="item"
            class="w-full cursor-pointer select-none"
          >
            <div class="qp-box w-full bg-cover bg-no-repeat bg-top">
              <div class="w-[1200px] mx-auto relative h-[835px]">
                <div
                  :class="
                    item.id === typeId
                      ? 'animate-fadeInLeft float-left w-1/2 h-full relative'
                      : 'float-left w-1/2 h-full relative'
                  "
                >
                  <img
                    :src="item.leftImage"
                    alt="banner"
                    class="bottom-0 block absolute left-[50%] translate-x-[-50%]"
                  />
                </div>
                <div
                  class="animate-fadeInTop relative h-full float-right w-1/2"
                >
                  <img
                    :src="item.rightImage"
                    alt="banner"
                    class="absolute top-[50%] translate-y-[-50%] right-0"
                  />
                  <span
                    class="block absolute left-[50%] translate-x-[-50%] cursor-pointer bottom-[340px] w-[230px] h-[60px] rounded-[30px] text-center leading-[60px] text-black font-bold text-2xl animate-abcAnimate btn-bg"
                  >
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
          <li
            v-for="item in btnList"
            :key="item"
            :class="{
              'btn-list text-[#fbe59c] hover:text-black text-base inline-block w-[105px] h-[44px] mx-2 text-center leading-[44px] rounded-[10px] cursor-pointer': true,
              active: item.id === typeId,
            }"
            @click="() => handleType(item.id)"
          >
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
        { id: 1, name: "AG国际馆" },
        { id: 2, name: "BBIN视讯" },
        { id: 3, name: "皇家视讯" },
        { id: 4, name: "BG视讯" },
        { id: 5, name: "PM真人视讯" },
        { id: 6, name: "DG视讯" },
        { id: 7, name: "EBET视讯" },
      ],
      list: [
        {
          id: 1,
          leftImage: new URL(
            "@/assets/images/video/peoAG.png",
            import.meta.url
          ),
          rightImage: new URL(
            "@/assets/images/video/wdAG.png",
            import.meta.url
          ),
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
        },
        {
          id: 6,
          leftImage: new URL(
            "@/assets/images/video/peoDG.png",
            import.meta.url
          ),
          rightImage: new URL(
            "@/assets/images/video/wdDG.png",
            import.meta.url
          ),
        },
        {
          id: 7,
          leftImage: new URL(
            "@/assets/images/video/peoEBET.png",
            import.meta.url
          ),
          rightImage: new URL(
            "@/assets/images/video/wdEBET.png",
            import.meta.url
          ),
        },
      ],
      typeId: 1,
    };
  },
  methods: {
    handleType(id) {
      this.typeId = id;
    },
  },
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
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#fff),
    to(#000)
  );
  background: -o-linear-gradient(#fff, #000);
  background: linear-gradient(#fff, #000);
  -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.btn-list:hover,
.btn-list.active {
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#fff1c5),
    to(#e9d481)
  );
  background: -o-linear-gradient(#fff1c5, #e9d481);
  background: linear-gradient(#fff1c5, #e9d481);
  color: black;
}
</style>
