<template>
	<div :style="{ height: loading || coupon.length === 0 ? '90vh' : 'unset' }">
		<van-loading color="#1989fa" class="loading-position" v-if="loading" size="60" />
		<div style="text-align: center;" v-if="coupon.length === 0 && !loading">您选择的项目暂时没有赛事。请修改您的选项或迟些再返回。</div>
		<div class="popular" v-if="!loading && coupon.length > 0">
			<div class="divide-background"></div>
			<div class="center-title">
				<span>最火</span>
			</div>
			<van-cell :title=couponItem.name v-for="(couponItem, couponIndex) in coupon" :key="couponIndex"
				@click="showCouponDetail(couponItem.lid, couponIndex)"  class="font-bold"/>
		</div>
		<div class="region">
			<div v-for="(regionItem, regionIndex) in region" :key="regionIndex">
				<div class="divide-background"></div>
				<div class="center-title" @click="showItem(regionIndex, regionItem.id)">
					<img :src="`https://www.hga030.com/images/flag/${regionItem.flag_class.split(' ')[1]}.svg`"
						v-if="regionItem.flag_class.split(' ')[1] != ''">
					<span class="font-bold text-[14px] ml-[10px]">{{ regionItem.name }}</span>
				</div>
				<div v-if="regionItem['show']">
					<div v-if="Array.isArray(regionItem.league)">
						<van-cell :title=leagueItem.name v-for="(leagueItem, leagueIndex) in regionItem.league"
							:key="leagueIndex" @click="showLIDDetail(leagueItem.id)"  class="font-bold"/>
					</div>
					<div v-else>
						<van-cell :title=regionItem.league.name @click="showLIDDetail(regionItem.league.id)"  class="font-bold"/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
	name: "FT_LEAGUE_TODAY",
	setup() {

	},
	data() {
		return {
			loading: false,
			coupon: [],
			region: []
		}
	},
	sockets: {
		connect: function () {
			console.log('socket to notification channel connected')
		},
		receivedLeagueTodayMessage(data) {
			this.loading = false;
			if (data == undefined || data == null) return;
			if (data["code"] === "error") return;
			console.log(data["coupons"]);
			this.coupon = data["coupons"]["coupon"];
			this.region = data["classifier"]["region"];
			this.region.map(item => {
				item["show"] = false;
			})
			console.log(this.region[2].league[0].name);
		}
	},
	methods: {
		showCouponDetail: function (lids, index) {
			switch (index) {
				case 0:
					this.$emit("showEarlyMain", lids, "cp1");
					break;
				case 1:
					this.$emit("showEarlyMain", lids, "HotGame_FT_lid_1");
					break;
				case 2:
					this.$emit("showEarlyMain", lids, "HotGame_FT_lid_2");
					break;
				case 3:
					this.$emit("showEarlyMain", lids, "HotGame_FT_lid_3");
					break;
			}
		},
		showLIDDetail: function (lids) {
			this.$emit("showEarlyMain", lids, "");
		},
		showDetail: function () {
			console.log("ok");
		},
		showItem: function (regionIndex) {
			this.region[regionIndex]["show"] = this.region[regionIndex]["show"] ? false : true;
		}
	},
	created() {
		this.loading = true;
		this.$socket.emit("sendLeagueEarlyMessage");
	},
	unmounted() {
		this.$socket.emit("stopLeagueEarlyMessage");
	}
})
</script>
<style scoped lang="scss">
.loading-position {
	margin-top: 200px;
	position: absolute;
	left: 50%;
}

.divide-background {
	background: white;
	padding-bottom: 3px
}

.center-title {
	display: flex;
	align-items: center;
	height: 40px;
	background-color: #ededed;
	padding: 0 14px;
	border-bottom: 1px solid #E3E3E3;

	span {
		font-size: 17px;
		color: #000000;
	}

	img {
		width: 28px;
		height: 28px;
	}
}
</style>
