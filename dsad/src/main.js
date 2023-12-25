import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/app.scss"; //app公共样式

function resizeFontsize() {
  (function (win, doc) {
    function change() {
      doc.documentElement.style.fontSize =
        (16 * doc.documentElement.clientWidth) / 1920 + "px";
    }
    change();
    win.addEventListener(
      "resize",
      function () {
        change();
      },
      false
    );
  })(window, document);
}
resizeFontsize();
createApp(App).use(store).use(router).mount("#app");
