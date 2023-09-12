<template>
    <div class="sport-ft-container">
        <el-tabs v-model="activeName" class="demo-tabs">
            <el-tab-pane v-for="(item, index) in sportType" :key="index" :label="item.label" :name="item.label">
                <div style="text-align: center;" v-if="!leagueShow">
                    <el-radio-group v-model="mainSwitch" size="large">
                        <el-radio-button label="主要玩法" />
                        <el-radio-button label="波胆" />
                    </el-radio-group>
                </div>
                <!-----------------  football inplay betting ------------------------>
                <FTInplayMain v-if="activeName == '滚球中' &&  mainSwitch == '主要玩法'" />
                <FTInplayScore  v-else-if="activeName == '滚球中' &&  mainSwitch == '波胆'"/>
                <!-----------------  today football betting ------------------------>
                <FTTodayLeague v-if="activeName == '今日' && leagueShow" @showTodayMain="showTodayMain" />
                <FTTodayMain v-if="activeName == '今日' && mainSwitch == '主要玩法' && !leagueShow" :todayGids="todayGids" :field="field"/>
                <FTTodayScore v-if="activeName == '今日' && mainSwitch == '波胆' && !leagueShow" :todayGids="todayGids" :field="field"/>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script setup>
import { ref, watch } from 'vue'
import FTInplayMain from './components/FT_Inplay_Main.vue';
import FTInplayScore from './components/FT_Inplay_Score.vue'
import FTTodayLeague from './components/FT_Today_League.vue'
import FTTodayMain from './components/FT_Today_Main.vue';
import FTTodayScore from './components/FT_Today_Score.vue';

const activeName = ref('滚球中')
const mainSwitch = ref('主要玩法')
const leagueShow = ref(false);

const field = ref("");
const todayGids = ref("");
const earlyGids = ref("");
const championLid = ref("");
const parlayGids = ref("");

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
    if(value == "滚球中") {
        leagueShow.value = false;
    } else {
        leagueShow.value = true;
    }
})
const showTodayMain = (todayGID, fieldValue) => {
	leagueShow.value = false;
	todayGids.value = todayGID;
	field.value = fieldValue;
}
const showEarlyMain = (earlyGID, fieldValue) => {
	leagueShow.value = false;
	earlyGids.value = earlyGID;
	field.value = fieldValue;
}
const showChampionMain = (championLID, areaName) => {
	leagueShow.value = false;
	championLid.value = championLID;
}
const showParlayMain = (parlayGID, fieldValue) => {
	leagueShow.value = false;
	parlayGids.value = parlayGID;
	field.value = fieldValue;
}
</script>
<style>
.sport-ft-container {
    padding-top: 20px;
    /* height: 100vh; */
    margin: 10px 200px;
}

.el-tabs__nav-wrap::after {
    background-color: #000000;
}

.el-tabs__item {
    color: white
}
</style>