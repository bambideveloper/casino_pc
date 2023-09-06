import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/index";
import AOS from "aos";
import "aos/dist/aos.css";
import { createPinia } from "pinia";
import piniaPersist from "pinia-plugin-persist";
import Vant from "vant";
import "vant/lib/index.css";
// 引入element-plus
import ElementPlus from 'element-plus'
import './assets/style/element-variables.scss'

const app = createApp(App);
app.use(router);
app.use(createPinia().use(piniaPersist));
app.use(Vant);
app.use(ElementPlus);
app.mount("#app");
app.component("App", {
  mounted() {
    AOS.init({
      once: true, // ensure that the animation only runs once
      offset: 100, // set the offset to 100px to start the animation earlier
      delay: 50, // add a delay of 50ms before the animation starts
    });
  },
});

// createApp(App).use(router).mount('#app')
