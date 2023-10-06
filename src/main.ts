import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Emitter from 'tiny-emitter'

const app = createApp(App)

app.config.globalProperties.$msalInstance = {};
app.config.globalProperties.$emitter = new Emitter.TinyEmitter();


app.use(router).mount('#app')