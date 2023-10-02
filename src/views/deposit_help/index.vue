<script setup>
import { ref } from 'vue';

const itemList = ref([
    {
        img: new URL('@/assets/images/account/deposit-1.png', import.meta.url).href,
    },
    {
        img: new URL('@/assets/images/account/deposit-2.png', import.meta.url).href,
    },
    {
        img: new URL('@/assets/images/account/deposit-3.png', import.meta.url).href,
    },
    {
        img: new URL('@/assets/images/account/deposit-4.png', import.meta.url).href,
    }
]);
</script>

<template>
    <div class="animated fadeInLeft pb-[20px] mb-[30px]">
        <div class=" pt-[50px] pb-[60px] h-screen">
            <div class="flex text-[15px] px-2 items-center py-3">
                <div class="flex">
                    <img class="w-[30px] h-[30px]" referrerpolicy="no-referrer"
                        src="@/assets/images/account/icon-withdraw.png" />
                    <p class="pl-1 text-[#ffffff]">存款教程</p>
                </div>
                <div class="flex items-center ml-[40px] text-[#ffffff]">
                    <p class="text-gray-300">存款极速到账</p>
                </div>
            </div>
            <div class="flex">
                <div v-for="(item, index) in itemList" :key="index" class="bg-gray-100 pt-2">
                    <p class="text-center text-[16px]">步骤{{ index + 1 }}/{{ itemList.length }}</p>
                    <div class=" w-full flex justify-center px-4">
                        <img class="" :src="item.img" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss"></style>