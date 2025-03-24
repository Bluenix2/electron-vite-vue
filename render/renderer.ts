// Automatically loaded by vite and run in the "renderer" context.
// To learn more about the differences between the "main" and the "renderer" context in
// Electron, visit:
//
// https://electronjs.org/docs/tutorial/process-model
//
// Equivalent to the main.ts file in a normal Vue.js project

import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
