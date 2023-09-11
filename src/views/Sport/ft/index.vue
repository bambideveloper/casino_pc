<template>
    <div class="sport-ft-container">
        <el-tabs v-model="activeName" class="demo-tabs">
            <el-tab-pane v-for="(item, index) in sportType" :key="index" :label="item.label" :name="item.label">
                <FTInplayMain v-if="activeName == item.label" />
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script setup>
import { ref, watch } from 'vue'
import FTInplayMain from './components/FT_Inplay_Main.vue';

const activeName = ref('滚球中')

const sportType = ref([
    {
        value: "FTInplayMain",
        label: "滚球中",
    },
    {
        value: "FTInplayMain",
        label: "今日",
    },
    {
        value: "FTInplayMain",
        label: "早盘",
    },
    {
        value: "FTInplayMain",
        label: "冠军",
    },
    {
        value: "FTInplayMain",
        label: "串关",
    },
])

watch(activeName, (value) => {
    console.log(value);
})
</script>
<style>
.sport-ft-container {
    padding-top: 20px;
    height: 100vh;
    margin: 0px 200px;
}

.el-tabs__nav-wrap::after {
    background-color: #000000;
}

.el-tabs__item {
    color: white
}
</style>