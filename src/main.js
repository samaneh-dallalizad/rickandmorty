import { createApp } from 'vue'
import { createStore } from 'vuex'
import {store} from './store'
import './style.scss'
import App from './App.vue'

createApp(App).use(store).mount('#app')



