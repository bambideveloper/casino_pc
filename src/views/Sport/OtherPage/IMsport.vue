<template>
  <div class="w-full h-full fixed right-0 top-0 bottom-0 overflow-y-hidden">
    <div class="flex min-w-[1024px] h-full">
      <!-- Start left panel -->
      <div
        class="relative w-[250px] min-w-[224px] overflow-y-scroll overflow-x-hidden scrollbar-stable left-panel"
      >
        <div
          class="flex flex-row items-center justify-between text-right bg-[#6d0006] text-[#fff] text-[10px]"
        >
          <div>
            <i class="icon-fi-clock"></i>
          </div>
          <div>
            21/07/2023 22:15 <br />
            (GMT +8)
          </div>
        </div>
        <details
          class="flex flex-row items-center justify-between text-right bg-[#9a2e2e] text-[#fff] text-[13px]"
        >
          <summary
            class="cursor-pointer flex justify-between items-center p-[5px]"
          >
            <div class="float-left font-bold text-[14px]">账户 (RMB)</div>
            <div class="float-right ml-[5px]">
              <i class="icon-fi-refresh"></i>
            </div>
          </summary>
          <div class="text-[#000] bg-[#fff] p-[5px] border-b border-gray-300">
            <div class="flex flex-row items-center justify-between pb-[3px]">
              <div>余额</div>
              <div class="text-right">0.00</div>
            </div>
            <div class="flex flex-row items-center justify-between">
              <div>未结算注单</div>
              <div class="float-right">0.00</div>
            </div>
          </div>
        </details>
        <details
          class="flex flex-row items-center justify-between text-right bg-[#9a2e2e] text-[#fff] text-[13px]"
        >
          <summary
            class="cursor-pointer flex justify-between items-center p-[5px]"
          >
            <div class="float-left font-bold text-[14px]">我的注单</div>
          </summary>
          <div
            class="text-[#000] bg-[#fff] p-[5px] border-b border-gray-300"
          ></div>
        </details>

        <details
          class="flex flex-row items-center justify-between text-right bg-[#9a2e2e] text-[#fff] text-[13px]"
        >
          <summary
            class="cursor-pointer flex justify-between items-center p-[5px]"
          >
            <div class="float-left font-bold text-[14px]">滚球中</div>
          </summary>
          <div class="text-[#000] bg-[#fff] border-b border-gray-300">
            <div class="bg-white text-[#525252]">
              <div
                class="flex flex-row border-b-[1px] border-b-gray-300 border-r-[3px] border-r-[#f3f3f3] text-[14px] p-[2.75px]"
              >
                <div class="flex items-center justify-between w-full pl-[5px]">
                  <div class="flex">
                    <label
                      class="relative flex cursor-pointer items-center rounded-full"
                      for="allSports"
                      data-ripple-dark="true"
                    >
                      <input
                        id="allSports"
                        type="checkbox"
                        class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-sm border border-[#939393] transition-all before:absolute before:opacity-0 before:transition-opacity checked:border-[#9a2e2e] checked:bg-[#9a2e2e] checked:before:bg-[#9a2e2e]"
                      />
                      <div
                        class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-3.5 w-3.5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-width="1"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </label>
                    <label
                      class="text-[#858585] pl-[5px] cursor-pointer text-[14px] select-none leading-[21.6px] min-h-[21.6px] peer-checked:text-[#9a2e2e]"
                      for="allSports"
                    >
                      所有体育
                    </label>
                  </div>
                  <div class="min-w-[21.6px] text-xs text-[#525252]">147</div>
                </div>
              </div>
            </div>
            <div class="bg-[#f3f3f3] text-[#525252]">
              <div
                class="flex flex-row border-b-[1px] border-b-gray-300 border-r-[3px] border-r-[#f3f3f3] text-[14px] p-[2.75px]"
              >
                <div class="flex items-center justify-between w-full pl-[5px]">
                  <div class="flex">
                    <label
                      class="relative flex cursor-pointer items-center rounded-full"
                      for="football"
                      data-ripple-dark="true"
                    >
                      <input
                        id="football"
                        type="checkbox"
                        class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-sm border border-[#939393] transition-all before:absolute before:opacity-0 before:transition-opacity checked:border-[#9a2e2e] checked:bg-[#9a2e2e] checked:before:bg-[#9a2e2e]"
                      />
                      <div
                        class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-3.5 w-3.5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-width="1"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </label>
                    <label
                      class="text-[#858585] pl-[5px] cursor-pointer text-[14px] select-none leading-[21.6px] min-h-[21.6px] peer-checked:text-[#9a2e2e]"
                      for="football"
                    >
                      足球
                    </label>
                  </div>
                  <div class="min-w-[21.6px] text-xs text-[#525252]">80</div>
                </div>
              </div>
            </div>
            <div class="bg-[#f3f3f3] text-[#525252]">
              <div
                class="flex flex-row border-b-[1px] border-b-gray-300 border-r-[3px] border-r-[#f3f3f3] text-[14px] p-[2.75px]"
              >
                <div class="flex items-center justify-between w-full pl-[5px]">
                  <div class="flex">
                    <label
                      class="relative flex cursor-pointer items-center rounded-full"
                      for="basketball"
                      data-ripple-dark="true"
                    >
                      <input
                        id="basketball"
                        type="checkbox"
                        class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-sm border border-[#939393] transition-all before:absolute before:opacity-0 before:transition-opacity checked:border-[#9a2e2e] checked:bg-[#9a2e2e] checked:before:bg-[#9a2e2e]"
                      />
                      <div
                        class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-3.5 w-3.5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-width="1"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </label>
                    <label
                      class="text-[#858585] pl-[5px] cursor-pointer text-[14px] select-none leading-[21.6px] min-h-[21.6px] peer-checked:text-[#9a2e2e]"
                      for="basketball"
                    >
                      篮球
                    </label>
                  </div>
                  <div class="min-w-[21.6px] text-xs text-[#525252]">80</div>
                </div>
              </div>
            </div>
            <div class="bg-[#f3f3f3] text-[#525252]">
              <div
                class="flex flex-row border-b-[1px] border-b-gray-300 border-r-[3px] border-r-[#f3f3f3] text-[14px] p-[2.75px]"
              >
                <div class="flex items-center justify-between w-full pl-[5px]">
                  <div class="flex">
                    <label
                      class="relative flex cursor-pointer items-center rounded-full"
                      for="tenis"
                      data-ripple-dark="true"
                    >
                      <input
                        id="tenis"
                        type="checkbox"
                        class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-sm border border-[#939393] transition-all before:absolute before:opacity-0 before:transition-opacity checked:border-[#9a2e2e] checked:bg-[#9a2e2e] checked:before:bg-[#9a2e2e]"
                      />
                      <div
                        class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-3.5 w-3.5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-width="1"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </label>
                    <label
                      class="text-[#858585] pl-[5px] cursor-pointer text-[14px] select-none leading-[21.6px] min-h-[21.6px] peer-checked:text-[#9a2e2e]"
                      for="tenis"
                    >
                      网球
                    </label>
                  </div>
                  <div class="min-w-[21.6px] text-xs text-[#525252]">80</div>
                </div>
              </div>
            </div>
            <div class="bg-[#f3f3f3] text-[#525252]">
              <div
                class="flex flex-row border-b-[1px] border-b-gray-300 border-r-[3px] border-r-[#f3f3f3] text-[14px] p-[2.75px]"
              >
                <div class="flex items-center justify-between w-full pl-[5px]">
                  <div class="flex">
                    <label
                      class="relative flex cursor-pointer items-center rounded-full"
                      for="tableTenis"
                      data-ripple-dark="true"
                    >
                      <input
                        id="tableTenis"
                        type="checkbox"
                        class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-sm border border-[#939393] transition-all before:absolute before:opacity-0 before:transition-opacity checked:border-[#9a2e2e] checked:bg-[#9a2e2e] checked:before:bg-[#9a2e2e]"
                      />
                      <div
                        class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-3.5 w-3.5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-width="1"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </label>
                    <label
                      class="text-[#858585] pl-[5px] cursor-pointer text-[14px] select-none leading-[21.6px] min-h-[21.6px] peer-checked:text-[#9a2e2e]"
                      for="tableTenis"
                    >
                      乒乓球
                    </label>
                  </div>
                  <div class="min-w-[21.6px] text-xs text-[#525252]">80</div>
                </div>
              </div>
            </div>
            <div class="bg-[#f3f3f3] text-[#525252]">
              <div
                class="flex flex-row border-b-[1px] border-b-gray-300 border-r-[3px] border-r-[#f3f3f3] text-[14px] p-[2.75px]"
              >
                <div class="flex items-center justify-between w-full pl-[5px]">
                  <div class="flex">
                    <label
                      class="relative flex cursor-pointer items-center rounded-full"
                      for="volleyball"
                      data-ripple-dark="true"
                    >
                      <input
                        id="volleyball"
                        type="checkbox"
                        class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-sm border border-[#939393] transition-all before:absolute before:opacity-0 before:transition-opacity checked:border-[#9a2e2e] checked:bg-[#9a2e2e] checked:before:bg-[#9a2e2e]"
                      />
                      <div
                        class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-3.5 w-3.5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-width="1"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </label>
                    <label
                      class="text-[#858585] pl-[5px] cursor-pointer text-[14px] select-none leading-[21.6px] min-h-[21.6px] peer-checked:text-[#9a2e2e]"
                      for="volleyball"
                    >
                      排球
                    </label>
                  </div>
                  <div class="min-w-[21.6px] text-xs text-[#525252]">80</div>
                </div>
              </div>
            </div>
            <div class="bg-[#f3f3f3] text-[#525252]">
              <div
                class="flex flex-row border-b-[1px] border-b-gray-300 border-r-[3px] border-r-[#f3f3f3] text-[14px] p-[2.75px]"
              >
                <div class="flex items-center justify-between w-full pl-[5px]">
                  <div class="flex">
                    <label
                      class="relative flex cursor-pointer items-center rounded-full"
                      for="baseball"
                      data-ripple-dark="true"
                    >
                      <input
                        id="baseball"
                        type="checkbox"
                        class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-sm border border-[#939393] transition-all before:absolute before:opacity-0 before:transition-opacity checked:border-[#9a2e2e] checked:bg-[#9a2e2e] checked:before:bg-[#9a2e2e]"
                      />
                      <div
                        class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-3.5 w-3.5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-width="1"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </label>
                    <label
                      class="text-[#858585] pl-[5px] cursor-pointer text-[14px] select-none leading-[21.6px] min-h-[21.6px] peer-checked:text-[#9a2e2e]"
                      for="baseball"
                    >
                      棒球
                    </label>
                  </div>
                  <div class="min-w-[21.6px] text-xs text-[#525252]">80</div>
                </div>
              </div>
            </div>
          </div>
        </details>

        <details
          class="flex flex-row items-center justify-between text-right bg-[#9a2e2e] text-[#fff] text-[13px]"
        >
          <summary
            class="cursor-pointer flex justify-between items-center p-[5px]"
          >
            <div class="float-left font-bold text-[14px]">体育菜单</div>
          </summary>
          <div
            class="text-[#454545] bg-[#eaeaea] p-[5px] border-b border-[#9d7676]"
          >
            <router-link
              to="/"
              class="text-[#454545] p-[5px] text-[14px] flex items-center text-left"
            >
              <img
                src="@/assets/images/sport/imsports/football-icon.png"
                class="w-auto max-h-[15px] mr-[5px]"
              />
              *欧洲冠军联赛
            </router-link>
            <router-link
              to="/"
              class="text-[#454545] p-[5px] text-[14px] flex items-center active:text-[#cd5100] text-left"
            >
              <img
                src="@/assets/images/sport/imsports/olympic-icon.png"
                class="w-auto max-h-[15px] mr-[5px]"
              />
              *FIFA世界杯2026(在加拿大&墨西哥&美国)
            </router-link>
            <router-link
              to="/"
              class="text-[#454545] p-[5px] text-[14px] flex items-center active:text-[#cd5100] text-left"
            >
              <img
                src="@/assets/images/sport/imsports/england-premier-league-icon.png"
                class="w-auto max-h-[15px] mr-[5px]"
              />
              *英格兰超级联赛
            </router-link>
            <router-link
              to="/"
              class="text-[#454545] p-[5px] text-[14px] flex items-center active:text-[#cd5100] text-left"
            >
              <img
                src="@/assets/images/sport/imsports/england-premier-league-icon.png"
                class="w-auto max-h-[15px] mr-[5px]"
              />
              *意大利甲级联赛
            </router-link>
            <router-link
              to="/"
              class="text-[#454545] p-[5px] text-[14px] flex items-center active:text-[#cd5100] text-left"
            >
              <img
                src="@/assets/images/sport/imsports/england-premier-league-icon.png"
                class="w-auto max-h-[15px] mr-[5px]"
              />
              *西班牙甲级联赛
            </router-link>
            <router-link
              to="/"
              class="text-[#454545] p-[5px] text-[14px] flex items-center active:text-[#cd5100] text-left"
            >
              <img
                src="@/assets/images/sport/imsports/england-premier-league-icon.png"
                class="w-auto max-h-[15px] mr-[5px]"
              />
              *德国甲级联赛
            </router-link>
            <router-link
              to="/"
              class="text-[#454545] p-[5px] text-[14px] flex items-center active:text-[#cd5100] text-left"
            >
              <img
                src="@/assets/images/sport/imsports/england-premier-league-icon.png"
                class="w-auto max-h-[15px] mr-[5px]"
              />
              法国甲级联赛
            </router-link>
          </div>

          <div
            class="bg-[#9a2e2e] py-1 flex justify-center items-center text-[13px]"
          >
            <div
              class="text-[#e0e0e0] text-[14px] px-1 flex text-center flex-nowrap w-1/2"
            >
              <router-link
                to="/"
                class="bg-[#6d0006] text-white py-[2.5px] px-1 rounded-[6px] w-full"
                >今日</router-link
              >
            </div>
            <div
              class="text-[#e0e0e0] text-[14px] px-1 flex text-center flex-nowrap w-1/2"
            >
              <router-link
                to="/"
                class="text-white py-[2.5px] px-1 rounded-[6px] w-full"
                >早盘</router-link
              >
            </div>
          </div>

          <div class="">
            <div>
              <router-link
                to="/"
                class="p-[2.75px] text-[14px] flex justify-center items-center bg-[#6d0006] text-white border-r-[3px] border-solid border-[#ff7765]"
              >
                <div
                  class="btn-fav w-[18px] h-[18px] min-w-[18px] min-h-[18px] mr-[5px] ml-[2.5px] rounded-[2px]"
                ></div>
                <i
                  class="text-[21.6px] min-w-[21.6px] leading-[21.6px] mr-[5px] text-center text-white"
                ></i>
                <div class="text-white text-[14px]">足球</div>
                <div class="pl-[5px] ml-auto text-[14px] text-white">
                  <div
                    class="bg-[#b30000] text-white box-border inline-block text-center min-w-[45px] text-[9px] p-[2px]"
                  >
                    滚球中
                  </div>
                </div>
                <div
                  class="min-w-[21.6px] text-xs text-right pl-[5px] text-white"
                >
                  523
                </div>
              </router-link>
            </div>
            <div
              class="py-[5px] px-[10px] bg-[#dbdbdb] border-b-[1px] border-solid border-[#c6c6c6]"
            >
              <router-link class="text-[#6d0006]" to="/">
                <div
                  class="text-[#cd5100] py-[5px] flex items-center justify-between"
                >
                  <div>让球 & 大/小</div>
                  <div class="pl-[5px] ml-auto">373</div>
                </div>
              </router-link>
              <router-link class="text-[#787878]" to="/">
                <div
                  class="text-[#787878] hover:text-[#454545] py-[5px] flex items-center justify-between"
                >
                  <div>1 x 2</div>
                  <div class="pl-[5px] ml-auto">365</div>
                </div>
              </router-link>
              <router-link class="text-[#787878]" to="/">
                <div
                  class="text-[#787878] hover:text-[#454545] py-[5px] flex items-center justify-between"
                >
                  <div>波胆 / 反波胆</div>
                  <div class="pl-[5px] ml-auto">365</div>
                </div>
              </router-link>
              <router-link class="text-[#787878]" to="/">
                <div
                  class="text-[#787878] hover:text-[#454545] py-[5px] flex items-center justify-between"
                >
                  <div>双重机会</div>
                  <div class="pl-[5px] ml-auto">365</div>
                </div>
              </router-link>
              <router-link class="text-[#787878]" to="/">
                <div
                  class="text-[#787878] hover:text-[#454545] py-[5px] flex items-center justify-between"
                >
                  <div>总进球</div>
                  <div class="pl-[5px] ml-auto">365</div>
                </div>
              </router-link>
              <router-link class="text-[#787878]" to="/">
                <div
                  class="text-[#787878] hover:text-[#454545] py-[5px] flex items-center justify-between"
                >
                  <div>单 / 双</div>
                  <div class="pl-[5px] ml-auto">321</div>
                </div>
              </router-link>
              <router-link class="text-[#787878]" to="/">
                <div
                  class="text-[#787878] hover:text-[#454545] py-[5px] flex items-center justify-between"
                >
                  <div>半场 / 全场</div>
                  <div class="pl-[5px] ml-auto">297</div>
                </div>
              </router-link>
              <router-link class="text-[#787878]" to="/">
                <div
                  class="text-[#787878] hover:text-[#454545] py-[5px] flex items-center justify-between"
                >
                  <div>冠军</div>
                  <div class="pl-[5px] ml-auto">111</div>
                </div>
              </router-link>
            </div>
            <div>
              <div>
                <router-link
                  to="/"
                  class="p-[2.75px] text-[14px] flex items-center bg-[#f3f3f3] text-[#525252] border-b-[1px] border-b-[#c6c6c6] border-solid border-r-[3px] border-r-[#f3f3f3]"
                >
                  <div
                    class="btn-fav btn-fav-off w-[18px] h-[18px] min-w-[18px] min-h-[18px] mr-[5px]"
                  ></div>
                  <i
                    class="icon-fi-title-s2 sports-icon text-[21.6px] min-w-[21.6px] leading-[21.6px] mr-[5px] text-center"
                  ></i>
                  <div class="text-[14px] text-[#525252]">篮球</div>
                  <div
                    class="pl-[5px] ml-auto bg-[#b30000] text-white box-border inline-block text-center min-w-[45px] text-[9px] p-[2px]"
                  >
                    滚球中
                  </div>
                  <div class="min-w-[21.6px] text-xs text-right pl-[5px]">
                    122
                  </div>
                </router-link>
              </div>
              <div>
                <router-link
                  to="/"
                  class="p-[2.75px] text-[14px] flex items-center bg-[#f3f3f3] text-[#525252] border-b-[1px] border-b-[#c6c6c6] border-solid border-r-[3px] border-r-[#f3f3f3]"
                >
                  <div
                    class="btn-fav btn-fav-off w-[18px] h-[18px] min-w-[18px] min-h-[18px] mr-[5px]"
                  ></div>
                  <i
                    class="icon-fi-title-s2 sports-icon text-[21.6px] min-w-[21.6px] leading-[21.6px] mr-[5px] text-center"
                  ></i>
                  <div class="text-[14px] text-[#525252]">网球</div>
                  <div
                    class="pl-[5px] ml-auto bg-[#b30000] text-white box-border inline-block text-center min-w-[45px] text-[9px] p-[2px]"
                  >
                    滚球中
                  </div>
                  <div class="min-w-[21.6px] text-xs text-right pl-[5px]">
                    76
                  </div>
                </router-link>
              </div>
              <div>
                <router-link
                  to="/"
                  class="p-[2.75px] text-[14px] flex items-center bg-[#f3f3f3] text-[#525252] border-b-[1px] border-b-[#c6c6c6] border-solid border-r-[3px] border-r-[#f3f3f3]"
                >
                  <div
                    class="btn-fav btn-fav-off w-[18px] h-[18px] min-w-[18px] min-h-[18px] mr-[5px]"
                  ></div>
                  <i
                    class="icon-fi-title-s2 sports-icon text-[21.6px] min-w-[21.6px] leading-[21.6px] mr-[5px] text-center"
                  ></i>
                  <div class="text-[14px] text-[#525252]">乒乓球</div>
                  <div
                    class="pl-[5px] ml-auto bg-[#b30000] text-white box-border inline-block text-center min-w-[45px] text-[9px] p-[2px]"
                  >
                    滚球中
                  </div>
                  <div class="min-w-[21.6px] text-xs text-right pl-[5px]">
                    185
                  </div>
                </router-link>
              </div>
              <div>
                <router-link
                  to="/"
                  class="p-[2.75px] text-[14px] flex items-center bg-[#f3f3f3] text-[#525252] border-b-[1px] border-b-[#c6c6c6] border-solid border-r-[3px] border-r-[#f3f3f3]"
                >
                  <div
                    class="btn-fav btn-fav-off w-[18px] h-[18px] min-w-[18px] min-h-[18px] mr-[5px]"
                  ></div>
                  <i
                    class="icon-fi-title-s2 sports-icon text-[21.6px] min-w-[21.6px] leading-[21.6px] mr-[5px] text-center"
                  ></i>
                  <div class="text-[14px] text-[#525252]">排球</div>
                  <div
                    class="min-w-[21.6px] text-xs text-right pl-[5px] ml-auto"
                  >
                    25
                  </div>
                </router-link>
              </div>
              <div>
                <router-link
                  to="/"
                  class="p-[2.75px] text-[14px] flex items-center bg-[#f3f3f3] text-[#525252] border-b-[1px] border-b-[#c6c6c6] border-solid border-r-[3px] border-r-[#f3f3f3]"
                >
                  <div
                    class="btn-fav btn-fav-off w-[18px] h-[18px] min-w-[18px] min-h-[18px] mr-[5px]"
                  ></div>
                  <i
                    class="icon-fi-title-s2 sports-icon text-[21.6px] min-w-[21.6px] leading-[21.6px] mr-[5px] text-center"
                  ></i>
                  <div class="text-[14px] text-[#525252]">棒球</div>
                  <div
                    class="min-w-[21.6px] text-xs text-right pl-[5px] ml-auto"
                  >
                    45
                  </div>
                </router-link>
              </div>
              <div>
                <router-link
                  to="/"
                  class="p-[2.75px] text-[14px] flex items-center bg-[#f3f3f3] text-[#525252] border-b-[1px] border-b-[#c6c6c6] border-solid border-r-[3px] border-r-[#f3f3f3]"
                >
                  <div
                    class="btn-fav btn-fav-off w-[18px] h-[18px] min-w-[18px] min-h-[18px] mr-[5px]"
                  ></div>
                  <i
                    class="icon-fi-title-s2 sports-icon text-[21.6px] min-w-[21.6px] leading-[21.6px] mr-[5px] text-center"
                  ></i>
                  <div class="text-[14px] text-[#525252]">虚拟体育</div>
                  <div
                    class="min-w-[21.6px] text-xs text-right pl-[5px] ml-auto"
                  >
                    308
                  </div>
                </router-link>
              </div>
              <div>
                <router-link
                  to="/"
                  class="p-[2.75px] text-[14px] flex items-center bg-[#f3f3f3] text-[#525252] border-b-[1px] border-b-[#c6c6c6] border-solid border-r-[3px] border-r-[#f3f3f3]"
                >
                  <div
                    class="btn-fav btn-fav-off w-[18px] h-[18px] min-w-[18px] min-h-[18px] mr-[5px]"
                  ></div>
                  <i
                    class="icon-fi-title-s2 sports-icon text-[21.6px] min-w-[21.6px] leading-[21.6px] mr-[5px] text-center"
                  ></i>
                  <div class="text-[14px] text-[#525252]">美式足球</div>
                  <div
                    class="min-w-[21.6px] text-xs text-right pl-[5px] ml-auto"
                  >
                    1
                  </div>
                </router-link>
              </div>
              <div>
                <router-link
                  to="/"
                  class="p-[2.75px] text-[14px] flex items-center bg-[#f3f3f3] text-[#525252] border-b-[1px] border-b-[#c6c6c6] border-solid border-r-[3px] border-r-[#f3f3f3]"
                >
                  <div
                    class="btn-fav btn-fav-off w-[18px] h-[18px] min-w-[18px] min-h-[18px] mr-[5px]"
                  ></div>
                  <i
                    class="icon-fi-title-s2 sports-icon text-[21.6px] min-w-[21.6px] leading-[21.6px] mr-[5px] text-center"
                  ></i>
                  <div class="text-[14px] text-[#525252]">橄榄球</div>
                  <div
                    class="min-w-[21.6px] text-xs text-right pl-[5px] ml-auto"
                  >
                    1
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </details>
      </div>
      <!-- End left panel -->

      <!-- Start main panel -->
      <div class="flex relative main-panel">
        <div class="bg-[#f3f3f3] overflow-y-scroll relative flex-1">
          <div
            class="top-0 w-auto bg-[#6d0006] border-b-[#9d7676] border-b-[1px] border-solid text-[13px] flex items-center justify-between sticky h-[38px] p-[5px] box-border"
          >
            <div class="flex items-center flex-grow-1">
              <div
                class="ml-[5px] text-[13px] flex items-center rounded-[2px] bg-clip-padding px-[5px] h-[27px] leading-[27px] bg-[#9a2e2e] text-white"
                title="我的最爱"
              >
                <div class="btn-fav btn-fav-off w-[15px] h-[15px]"></div>
                <div class="pl-[5px] text-[13px] leading-[27px] text-white">
                  0
                </div>
              </div>
              <div
                class="ml-[5px] text-[13px] flex items-center rounded-[2px] bg-clip-padding px-[5px] h-[27px] leading-[27px] bg-[#9a2e2e] text-white"
                title="帮助"
              >
                <i class="icon-fi-help text-[13px] text-white"></i>
              </div>
              <div
                class="ml-[5px] text-[13px] flex items-center rounded-[2px] bg-clip-padding px-[5px] h-[27px] leading-[27px] bg-[#9a2e2e] text-white"
                title="公告"
              >
                <i class="icon-fi-annoucements text-[13px] text-white"></i>
              </div>
              <div
                class="flex h-[27px] leading-[27px] mx-auto overflow-hidden cursor-pointer text-white text-[13px]"
              >
                <marquee class="max-h-[26.6px] text-white text-[13px] w-full">
                  <span class="pt-0 pr-[10px] pb-[25px]"
                    >[足球][俱乐部友谊赛] '奥格斯堡-vs-PSV埃因霍温' - 22/07.
                    赛事将进一步核实，如有状况再另行通知，造成不便之处，敬请原谅！</span
                  >
                  <span class="pt-0 pr-[10px] pb-[25px]"
                    >[足球][俱乐部友谊赛] '阿尔克马尔青年队-vs-阿姆斯特丹' -
                    22/07. *由于赛事时间异常
                    [2x60]分钟，所有注单将被退款。连串注单以(1)计算。请重新检查您的投注单与账户结余，造成不便之处，敬请原谅！</span
                  >
                  <span class="pt-0 pr-[10px] pb-[25px]"
                    >[足球][俱乐部友谊赛] '兹沃勒-vs-埃门' - 22/07.
                    *直播/今日盘/早盘。由于赛事时间异常
                    [2x30]分钟，所有注单将被退款。连串注单以(1)计算。请重新检查您的投注单与账户结余，造成不便之处，敬请原谅！</span
                  >
                  <span class="pt-0 pr-[10px] pb-[25px]"
                    >[足球][冰岛U19联赛]
                    '弗雷姆/乌尔法尼尔U19-vs-斯塔尔南/KFG/阿佛坦斯U19' - 22/07.
                    赛事将进一步核实，如有状况再另行通知，造成不便之处，敬请原谅！</span
                  >
                  <span class="pt-0 pr-[10px] pb-[25px]"
                    >[足球][奥地利杯] 'ATUS费拉赫-vs-DSV里奥本' - 22/07.
                    *直播。由于直播中断，这场赛事将从网页删除。造成不便之处，敬请原谅！</span
                  >
                  <span class="pt-0 pr-[10px] pb-[25px]"
                    >[足球][俱乐部友谊赛] '布雷斯特-vs-孔卡尔诺' - 22/07.
                    *直播。由于直播中断，这场赛事将从网页删除。造成不便之处，敬请原谅！</span
                  >
                  <span class="pt-0 pr-[10px] pb-[25px]"
                    >[篮球][FIBA欧洲锦标U18] '波黑U18-vs-斯洛伐克U18' - 22/07.
                    赛事将进一步核实，如有状况再另行通知，(包含赛节).
                    造成不便之处，敬请原谅！</span
                  >
                  <span class="pt-0 pr-[10px] pb-[25px]"
                    >[足球][俱乐部友谊赛] '甘冈-vs-洛里昂' - 22/07.
                    赛事将进一步核实，如有状况再另行通知，造成不便之处，敬请原谅！</span
                  >
                  <span class="pt-0 pr-[10px] pb-[25px]"
                    >[足球][俱乐部友谊赛] '奥格斯堡-vs-PSV埃因霍温' - 22/07.
                    *直播/今日盘/早盘。由于赛事时间异常
                    [2x75]分钟，所有注单将被退款。连串注单以(1)计算。请重新检查您的投注单与账户结余，造成不便之处，敬请原谅！</span
                  >
                </marquee>
              </div>
              <div class="flex text-[13px]">
                <div
                  class="ml-[5px] break-keep text-[13px] flex items-center rounded-[2px] bg-clip-padding py-[5px] leading-[27px] bg-[#9a2e2e] text-white"
                  title="未结算注单"
                >
                  <div class="mx-[5px] text-[13px] btn-fav">
                    <i class="icon-fi-betlist"></i>
                  </div>
                </div>
                <div
                  class="ml-[5px] break-keep text-[13px] flex items-center rounded-[2px] bg-clip-padding py-[5px] leading-[27px] bg-[#9a2e2e] text-white"
                  title="已结算注单"
                >
                  <div class="mx-[5px] text-[13px]">
                    <i class="icon-fi-statements"></i>
                  </div>
                </div>
                <div
                  class="ml-[5px] break-keep text-[13px] flex items-center rounded-[2px] bg-clip-padding py-[5px] leading-[27px] bg-[#9a2e2e] text-white"
                  title="赛果"
                >
                  <div class="mx-[5px] text-[13px]">
                    <i class="icon-fi-results"></i>
                  </div>
                </div>
                <div
                  class="ml-[5px] break-keep text-[13px] flex items-center rounded-[2px] bg-clip-padding py-[5px] leading-[27px] bg-[#9a2e2e] text-white"
                  title="个人设置"
                >
                  <div class="mx-[5px] text-[13px]">
                    <i class="icon-fi-pref"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="top-[38px] w-auto z-10 bg-[#6d0006] border-b-[#9d7676] border-b-[1px] text-[13px] flex items-center justify-between box-border h-[38px] sticky p-[5px]"
          >
            <div class="flex items-center flex-grow-1 main-nav-top-left">
              <div
                class="mr-[5px] box-border overflow-hidden h-[27px] p-0 bg-[#9a2e2e] border-[#9a2e2e] border-[1px] border-solid"
              >
                <div
                  class="w-[200px] flex relative h-[27px] overflow-hidden bg-white text-[13px]"
                >
                  <div class="h-[30px] box-border text-right w-full">
                    <input
                      class="w-full border-none outline-none box-border text-[11px] pl-[5px] h-[27px]"
                      placeholder="请输入队伍或赛事名称"
                      type="text"
                      autocomplete="off"
                    />
                  </div>
                </div>
                <div class="search-box-icon px-[5px]">
                  <i class="icon-fi-search"></i>
                </div>
              </div>
              <router-link
                to="/select-league"
                class="mr-[5px] text-xs bg-[#9a2e2e] hover:bg-[#c13a3a] text-white flex rounded-[2px] bg-clip-padding h-[27px] px-[5px] leading-[27px]"
              >
                <div>选择联赛</div>
              </router-link>
            </div>
            <div class="main-nav-top-right flex">
              <div
                class="text-white bg-[#9a2e2e] hover:bg-[#c13a3a] border-b-[#9a2e2e] border-b-[1px] border-solid flex items-center rounded-[2px] leading-[25px] h-[25px] px-[6px] ml-[6px] relative cursor-pointer"
              >
                <div class="text-white">双行式</div>
                <div class="text-[10px] pl-[6px]">
                  <i class="icon-fi-arrow-down1"></i>
                </div>
                <div
                  class="top-[25px] right-[-2px] text-white bg-[#9a2e2e] border-2 border-solid border-[#c13a3a] min-w-[180px] max-h-[300px] absolute text-center overflow-auto hidden"
                >
                  <div
                    class="bg-[#6d0006] border-[#c13a3a] border-[1px] border-solid text-white text-[13px] cursor-pointer"
                  >
                    双行式
                  </div>
                  <div
                    class="bg-[#6d0006] border-[#c13a3a] border-[1px] border-solid text-white text-[13px] cursor-pointer border-b-none"
                  >
                    单行式
                  </div>
                </div>
              </div>
              <div
                class="text-white bg-[#9a2e2e] hover:bg-[#c13a3a] border-b-[#9a2e2e] border-b-[1px] border-solid flex items-center rounded-[2px] leading-[25px] h-[25px] px-[6px] ml-[6px] relative cursor-pointer"
              >
                <div class="text-white">热门排序</div>
                <div class="text-[10px] pl-[6px]">
                  <i class="icon-fi-arrow-down1"></i>
                </div>
                <div
                  class="top-[25px] right-[-2px] text-white bg-[#9a2e2e] border-2 border-solid border-[#c13a3a] min-w-[180px] max-h-[300px] absolute text-center overflow-auto hidden"
                >
                  <div
                    class="bg-[#6d0006] border-[#c13a3a] border-[1px] border-solid text-white text-[13px] cursor-pointer"
                  >
                    热门排序
                  </div>
                  <div
                    class="bg-[#6d0006] border-[#c13a3a] border-[1px] border-solid text-white text-[13px] cursor-pointer border-b-none"
                  >
                    时间排序
                  </div>
                </div>
              </div>
              <div
                class="text-white bg-[#9a2e2e] hover:bg-[#c13a3a] border-b-[#9a2e2e] border-b-[1px] border-solid flex items-center rounded-[2px] leading-[25px] h-[25px] px-[6px] ml-[6px] relative cursor-pointer"
              >
                <div class="text-white">香港盘</div>
                <div class="text-[10px] pl-[6px]">
                  <i class="icon-fi-arrow-down1"></i>
                </div>
                <div
                  class="top-[25px] right-[-2px] text-white bg-[#9a2e2e] border-2 border-solid border-[#c13a3a] min-w-[180px] max-h-[300px] absolute text-center overflow-auto hidden"
                >
                  <div
                    class="bg-[#6d0006] border-[#c13a3a] border-[1px] border-solid text-white text-[13px] cursor-pointer"
                  >
                    马来盘
                  </div>
                  <div
                    class="bg-[#6d0006] border-[#c13a3a] border-[1px] border-solid text-white text-[13px] cursor-pointer"
                  >
                    香港盘
                  </div>
                  <div
                    class="bg-[#6d0006] border-[#c13a3a] border-[1px] border-solid text-white text-[13px] cursor-pointer border-b-none"
                  >
                    欧洲盘
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="">
            <div
              class="top-[75px] bg-[#4b4949] text-white border-b-[#dbdbdb] border-b-[1px] border-solid box-border sticky w-full flex items-center"
            >
              <div
                class="team border-[#c6c6c6] flex items-center py-[2.75px] w-[30%]"
              >
                <div
                  class="collapse-expand flex justify-center items-center w-[68px] min-w-[68px] text-center"
                >
                  <i class="icon-fi-arrow-down1"></i>
                </div>
                <div class="sports py-[2.75px] w-[40px] text-center">
                  <i class="icon-fi-title-s1 sports_icon text-[27px]"></i>
                </div>
                <div class="flag text-[14px] px-[5px] text-[#ffd89e]">
                  <div
                    class="text-[13px] bg-[#b30000] text-white rounded-[2px] box-border inline-block text-center min-w-[45px] p-[2px]"
                  >
                    滚球中
                  </div>
                </div>
                <div class="pl-[5px] text-white text-[11px]">主队/客队</div>
              </div>
              <div class="items-stretch w-[60%] max-w-[500px] flex min-h-full">
                <div
                  class="header-info-inner w-1/2 border-l-[1px] border-solid border-[#c6c6c6] border border-t-0"
                >
                  <div
                    class="py-[2.75px] leading-[15px] text-white text-[11px] text-center"
                  >
                    全场
                  </div>
                  <div
                    class="px-[5px] leading-[15px] border border-[#c6c6c6] border-l-0 border-r-0 border-b-0 flex items-stretch border-t-[1px] text-center text-white"
                  >
                    <div class="w-full text-center leading-[15px]">
                      <div class="p-[1.25px] text-center text-[11px]">1x2</div>
                    </div>
                    <div class="w-full text-center leading-[15px]">
                      <div class="p-[1.25px] text-center text-[11px]"></div>
                    </div>
                    <div class="w-full text-center leading-[15px]">
                      <div class="p-[1.25px] text-center text-[11px]">让球</div>
                    </div>
                    <div class="w-full text-center leading-[15px]">
                      <div class="p-[1.25px] text-center text-[11px]"></div>
                    </div>
                    <div class="w-full text-center leading-[15px]">
                      <div class="p-[1.25px] text-center text-[11px]">
                        大/小
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="header-info-inner w-1/2 border-solid border-[#c6c6c6] border border-t-0 border-l-0"
                >
                  <div
                    class="py-[2.75px] leading-[15px] text-white text-[11px] text-center"
                  >
                    全场
                  </div>
                  <div
                    class="px-[5px] leading-[15px] border border-[#c6c6c6] border-l-0 border-r-0 border-b-0 flex items-stretch border-t-[1px] text-center text-white"
                  >
                    <div class="w-full text-center leading-[15px]">
                      <div class="p-[1.25px] text-center text-[11px]">1x2</div>
                    </div>
                    <div class="w-full text-center leading-[15px]">
                      <div class="p-[1.25px] text-center text-[11px]"></div>
                    </div>
                    <div class="w-full text-center leading-[15px]">
                      <div class="p-[1.25px] text-center text-[11px]">让球</div>
                    </div>
                    <div class="w-full text-center leading-[15px]">
                      <div class="p-[1.25px] text-center text-[11px]"></div>
                    </div>
                    <div class="w-full text-center leading-[15px]">
                      <div class="p-[1.25px] text-center text-[11px]">
                        大/小
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="border-[#c6c6c6] p-[2.75px] w-[44.5px] min-w[44.5px] text-center flex items-center"
              >
                <div class="m-auto text-xl">
                  <i class="icon-fi-refresh"></i>
                </div>
              </div>
            </div>

            <div class="">
              <div
                class="top-[114px] bg-[#dbdbdb] outline-1 outline-[#c6c6c6] text-black box-border sticky w-full flex items-center cursor-pointer min-h-[31.5px] text-xs"
              >
                <div
                  class="h-[12px] border-[#c6c6c6] border-r-[1px] flex justify-center items-center w-[68px] min-w-[68px] text-center text-xs"
                >
                  <i class="icon-fi-arrow-down1"></i>
                </div>
                <div class="w-[40px] flex text-center">
                  <img
                    src="https://ipis-cdn.speedy4site.com/CompetitionImage/785.png"
                    alt="image"
                    class="w-[20px] mx-auto"
                  />
                </div>
                <div class="p-[2.75px] pl-[5px] text-xs flex-1">
                  波兰超级联赛
                </div>
                <div class="p-[2.75px] w-[44.5px] min-w-[44.5px] text-center">
                  <div
                    class="btn-fav btn-fav-off w-[24px] h-[24px] bg-left-bottom"
                    title="添加至【我的最爱】"
                  ></div>
                </div>
              </div>

              <div class="event_listing">
                <div class="row_live">
                  <div class="event_row flex flex-1">
                    <div
                      class="team flex border-[#ead2d2] grow-1 py-[2.75px] w-[30%]"
                    >
                      <div
                        class="datetime w-[68px] min-w-[68px] text-center pt-1"
                      >
                        <div
                          class="score text-[13px] font-bold text-[#b30000] text-center"
                        >
                          0 - 2
                        </div>
                        <span class="text-black text-center text-xs"
                          >下半场 57:47</span
                        >
                      </div>
                      <router-link to="/sev/1/3/75229416/1" class="grow-1">
                        <div class="teamname cursor-pointer grow-1">
                          <div
                            class="teamname_inner flex p-[1.25px] text-[13px]"
                          >
                            <div class="team_logo w-[40px] text-center p-0">
                              <img
                                src="https://ipis-cdn.speedy4site.com/TeamImage/52.png"
                                class="w-[20px] h-[20px] mx-auto"
                              />
                            </div>
                            <div
                              class="teamname_title pt-[2px] px-[2px] pb-[5px]"
                            >
                              艾斯卡迪斯竞技&nbsp; (中)
                            </div>
                          </div>
                          <div
                            class="teamname_inner powerful flex p-[1.25px] text-[#b30000]"
                          >
                            <div class="team_logo w-[40px] text-center p-0">
                              <img
                                src="https://ipis-cdn.speedy4site.com/TeamImage/2537.png"
                                class="w-[20px] h-[20px] mx-auto"
                              />
                            </div>
                            <div
                              class="teamname_title pt-[2px] px-[2px] pb-[5px]"
                            >
                              帕提萨尼&nbsp;
                            </div>
                          </div>

                          <div
                            class="teamname_inner draw flex p-[1.25px] text-[#707070]"
                          >
                            <div
                              class="team_logo w-[40px] text-center p-0 flex"
                            >
                              <div class="w-[20px] h-[20px] mx-auto"></div>
                              <div class="text-[13px]">和</div>
                            </div>
                            <div
                              class="gadget_icons flex items-center pr-[5px] ml-auto text-[#707070]"
                              title="足球角球"
                            >
                              <i class="icon-fi-title-s201"></i>
                            </div>
                          </div>
                        </div>
                      </router-link>
                    </div>

                    <div
                      class="info border-[#ead2d2] flex items-stretch w-[60%]"
                    >
                      <div
                        class="header_info_inner w-1/2 border-l-[1px] border-l-black flex grow-1 shrink basis-auto text-center"
                      >
                        <div
                          class="header_info_inner_layer2 px-[5px] flex flex-1"
                        >
                          <div class="event_even w-full text-center">
                            <div
                              class="odds_wrap text-right whitespace-nowrap h-[18px] leading-[18px] p-[1.25px] text-[13px] relative font-bold"
                            >
                              <span
                                class="mr-[15px] rounded-[2px] bg-clip-padding px-[1.25px] text-black"
                                >6.41</span
                              >
                            </div>
                            <div
                              class="odds_wrap text-right whitespace-nowrap h-[18px] leading-[18px] p-[1.25px] text-[13px] relative font-bold"
                            >
                              <span
                                class="mr-[15px] rounded-[2px] bg-clip-padding px-[1.25px] text-black"
                                >1.49</span
                              >
                            </div>
                            <div
                              class="odds_wrap text-right whitespace-nowrap h-[18px] leading-[18px] p-[1.25px] text-[13px] relative font-bold"
                            >
                              <span
                                class="mr-[15px] rounded-[2px] bg-clip-padding px-[1.25px] text-black"
                                >3.41</span
                              >
                            </div>
                          </div>
                          <div class="event_even w-full text-center">
                            <div
                              class="text-right whitespace-nowrap h-[18px] leading-[18px] p-[1.25px] text-[13px] relative"
                            >
                              <span
                                class="handi text-[13px] font-normal inline-block text-[#d0774b] text-right whitespace-nowrap"
                                >+1</span
                              >
                            </div>
                            <div
                              class="text-right whitespace-nowrap h-[18px] leading-[18px] p-[1.25px] text-[13px] relative"
                            >
                              <span
                                class="handi text-[13px] font-normal inline-block text-[#d0774b] text-right whitespace-nowrap"
                                >+1</span
                              >
                            </div>
                          </div>
                          <div class="event_even w-full text-center">
                            <div
                              class="odds_wrap text-right whitespace-nowrap h-[18px] leading-[18px] p-[1.25px] text-[13px] relative font-bold"
                            >
                              <span
                                class="mr-[15px] rounded-[2px] bg-clip-padding px-[1.25px] text-black"
                                >6.41</span
                              >
                            </div>
                            <div
                              class="odds_wrap text-right whitespace-nowrap h-[18px] leading-[18px] p-[1.25px] text-[13px] relative font-bold"
                            >
                              <span
                                class="mr-[15px] rounded-[2px] bg-clip-padding px-[1.25px] text-black"
                                >1.49</span
                              >
                            </div>
                            <div
                              class="odds_wrap text-right whitespace-nowrap h-[18px] leading-[18px] p-[1.25px] text-[13px] relative font-bold"
                            >
                              <span
                                class="mr-[15px] rounded-[2px] bg-clip-padding px-[1.25px] text-black"
                                >3.41</span
                              >
                            </div>
                          </div>
                          <div class="event_even w-full text-center">
                            <div
                              class="text-right whitespace-nowrap h-[18px] leading-[18px] p-[1.25px] text-[13px] relative"
                            >
                              <span
                                class="ou text-[#787878] inline-block font-normal text-[10px] text-right"
                                >大</span
                              >
                              <span
                                class="handi text-[13px] font-normal inline-block text-[#d0774b] text-right whitespace-nowrap"
                                >+1</span
                              >
                            </div>
                            <div
                              class="text-right whitespace-nowrap h-[18px] leading-[18px] p-[1.25px] text-[13px] relative"
                            >
                              <span
                                class="ou text-[#787878] inline-block font-normal text-[10px] text-right"
                                >小</span
                              >
                              <span
                                class="handi text-[13px] font-normal inline-block text-[#d0774b] text-right whitespace-nowrap"
                                >+1</span
                              >
                            </div>
                          </div>
                          <div class="event_even w-full text-center">
                            <div
                              class="odds_wrap text-right whitespace-nowrap h-[18px] leading-[18px] p-[1.25px] text-[13px] relative font-bold"
                            >
                              <span
                                class="mr-[15px] rounded-[2px] bg-clip-padding px-[1.25px] text-black"
                                >6.41</span
                              >
                            </div>
                            <div
                              class="odds_wrap text-right whitespace-nowrap h-[18px] leading-[18px] p-[1.25px] text-[13px] relative font-bold"
                            >
                              <span
                                class="mr-[15px] rounded-[2px] bg-clip-padding px-[1.25px] text-black"
                                >1.49</span
                              >
                            </div>
                            <div
                              class="odds_wrap text-right whitespace-nowrap h-[18px] leading-[18px] p-[1.25px] text-[13px] relative font-bold"
                            >
                              <span
                                class="mr-[15px] rounded-[2px] bg-clip-padding px-[1.25px] text-black"
                                >3.41</span
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="header_info_inner w-1/2 border-l-[1px] border-l-black flex grow-1 shrink basis-auto text-center"
                      >
                        <div
                          class="header_info_inner_layer2 px-[5px] flex flex-1"
                        >
                          <div class="event_even w-full text-center">
                            <div
                              class="odds_wrap text-right whitespace-nowrap h-[18px] leading-[18px] p-[1.25px] text-[13px] relative font-bold"
                            >
                              <span
                                class="mr-[15px] rounded-[2px] bg-clip-padding px-[1.25px] text-black"
                                >6.41</span
                              >
                            </div>
                            <div
                              class="odds_wrap text-right whitespace-nowrap h-[18px] leading-[18px] p-[1.25px] text-[13px] relative font-bold"
                            >
                              <span
                                class="mr-[15px] rounded-[2px] bg-clip-padding px-[1.25px] text-black"
                                >1.49</span
                              >
                            </div>
                            <div
                              class="odds_wrap text-right whitespace-nowrap h-[18px] leading-[18px] p-[1.25px] text-[13px] relative font-bold"
                            >
                              <span
                                class="mr-[15px] rounded-[2px] bg-clip-padding px-[1.25px] text-black"
                                >3.41</span
                              >
                            </div>
                          </div>
                          <div class="event_even w-full text-center">
                            <div
                              class="text-right whitespace-nowrap h-[18px] leading-[18px] p-[1.25px] text-[13px] relative"
                            >
                              <span
                                class="handi text-[13px] font-normal inline-block text-[#d0774b] text-right whitespace-nowrap"
                                >+1</span
                              >
                            </div>
                            <div
                              class="text-right whitespace-nowrap h-[18px] leading-[18px] p-[1.25px] text-[13px] relative"
                            >
                              <span
                                class="handi text-[13px] font-normal inline-block text-[#d0774b] text-right whitespace-nowrap"
                                >+1</span
                              >
                            </div>
                          </div>
                          <div class="event_even w-full text-center">
                            <div
                              class="odds_wrap text-right whitespace-nowrap h-[18px] leading-[18px] p-[1.25px] text-[13px] relative font-bold"
                            >
                              <span
                                class="mr-[15px] rounded-[2px] bg-clip-padding px-[1.25px] text-black"
                                >6.41</span
                              >
                            </div>
                            <div
                              class="odds_wrap text-right whitespace-nowrap h-[18px] leading-[18px] p-[1.25px] text-[13px] relative font-bold"
                            >
                              <span
                                class="mr-[15px] rounded-[2px] bg-clip-padding px-[1.25px] text-black"
                                >1.49</span
                              >
                            </div>
                            <div
                              class="odds_wrap text-right whitespace-nowrap h-[18px] leading-[18px] p-[1.25px] text-[13px] relative font-bold"
                            >
                              <span
                                class="mr-[15px] rounded-[2px] bg-clip-padding px-[1.25px] text-black"
                                >3.41</span
                              >
                            </div>
                          </div>
                          <div class="event_even w-full text-center">
                            <div
                              class="text-right whitespace-nowrap h-[18px] leading-[18px] p-[1.25px] text-[13px] relative"
                            >
                              <span
                                class="ou text-[#787878] inline-block font-normal text-[10px] text-right"
                                >大</span
                              >
                              <span
                                class="handi text-[13px] font-normal inline-block text-[#d0774b] text-right whitespace-nowrap"
                                >+1</span
                              >
                            </div>
                            <div
                              class="text-right whitespace-nowrap h-[18px] leading-[18px] p-[1.25px] text-[13px] relative"
                            >
                              <span
                                class="ou text-[#787878] inline-block font-normal text-[10px] text-right"
                                >小</span
                              >
                              <span
                                class="handi text-[13px] font-normal inline-block text-[#d0774b] text-right whitespace-nowrap"
                                >+1</span
                              >
                            </div>
                          </div>
                          <div class="event_even w-full text-center">
                            <div
                              class="odds_wrap text-right whitespace-nowrap h-[18px] leading-[18px] p-[1.25px] text-[13px] relative font-bold"
                            >
                              <span
                                class="mr-[15px] rounded-[2px] bg-clip-padding px-[1.25px] text-black"
                                >6.41</span
                              >
                            </div>
                            <div
                              class="odds_wrap text-right whitespace-nowrap h-[18px] leading-[18px] p-[1.25px] text-[13px] relative font-bold"
                            >
                              <span
                                class="mr-[15px] rounded-[2px] bg-clip-padding px-[1.25px] text-black"
                                >1.49</span
                              >
                            </div>
                            <div
                              class="odds_wrap text-right whitespace-nowrap h-[18px] leading-[18px] p-[1.25px] text-[13px] relative font-bold"
                            >
                              <span
                                class="mr-[15px] rounded-[2px] bg-clip-padding px-[1.25px] text-black"
                                >3.41</span
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      class="additional border-[1px] border-solid border-[#ead2d2] p-[2.75px] text-center w-auto"
                    >
                      <div
                        class="btn_fav btn_fav_off my-[2.75px] mx-auto w-[18px] h-[18px]"
                        title="添加至【我的最爱】"
                      >
                        <router-link to="/sev/1/3/74926049/1" class="">
                          <div
                            class="my-[2.75px] w-[44.5px] min-w-[44.5px] h-[17.5px] leading-[17.5px] bg-[#707070] border-[1px] border-solid border-[#c6c6c6] text-white text-[13px]"
                            title="更多玩法"
                          >
                            53 +
                          </div>
                        </router-link>
                        <div class="btn_group flex justify-between m-auto">
                          <div
                            id="viz"
                            title="动画直播"
                            class="block w-[44.5px] min-w-[44.5px] h-[17.5px] leading-[17.5px] m-auto w-full bg-[#707070] border-[1px] border-solid border-[#c6c6c6] text-white"
                          >
                            <div class="btn_visualization_img"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End main panel -->
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.icon-fi-clock {
  font-family: "fontico" !important;
  speak: never;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
}

.icon-fi-refresh {
  font-family: "fontico" !important;
  speak: never;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
}

.icon-fi-arrow-right {
  font-family: "fontico" !important;
  speak: never;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
}

.checkbox {
  background-color: initial;
  cursor: default;
  appearance: auto;
  box-sizing: border-box;
  margin: 3px 3px 3px 4px;
  padding: initial;
  border: initial;
}

.main-wrap {
  width: calc(100% - 250px);
}

.clearfix:after {
  content: ".";
  visibility: hidden;
  display: block;
  height: 0;
  clear: both;
}

.btn-fav {
  background: url("@/assets/images/sport/icon_star.svg");
  background-size: cover;
}

summary:first-of-type {
  list-style-type: none;
}

summary:after {
  border-radius: 5px;
  content: ">";
  color: #fff;
  float: left;
  font-size: 20px;
  width: 20px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: end;
}
details[open] summary:after {
  content: "<";
  font-size: 20px;
}

.btn_fav_off {
  background-position: left bottom;
}

.main-panel {
  width: calc(100% - 250px);
  -moz-flex-direction: column;
  -ms-flex-direction: column;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex: 1 1 auto;
}

.btn-box-shadow {
  box-shadow: 0px 3px 3px 3px rgba(0, 0, 0, 0.22);
}

.bg-left-bottom {
  background-position: left bottom !important;
}

.event_listing .row_live:nth-child(odd) {
  background: #fbe1e1;
}

.event_listing .row_live .event_row {
  border-color: #ead2d2 !important;
}

.btn_visualization_img {
  background: url("https://sbweb-mlycdn.weicloud360.com/assets/themes/colours/red/images/icon_visualization.svg?v=91571") no-repeat;
  background-size: cover;
  background-position: bottom left;
}

.event_listing .row_live .event_row:hover, .event_listing .row_live .event_row_cs:hover, .event_listing .row_live .event_outright:hover {
    background: #fff7ee;
}
</style>
