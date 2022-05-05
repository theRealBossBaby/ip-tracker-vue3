import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: HomeView,
		meta: {
			title: 'IP Address Tracker | Easy!',
		},
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
})

router.beforeEach((to, from, next) => {
	document.title = `${to.meta.title}`
	next()
})

export default router
