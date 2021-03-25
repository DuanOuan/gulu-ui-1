import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwichDemo from "./components/SwichDemo.vue"

const history = createWebHashHistory()
export const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Home },
        {
            path: '/doc', component: Doc, children: [
                { path: 'swich', component: SwichDemo }
            ]
        }
    ]
})