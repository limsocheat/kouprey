/* eslint-disable prettier/prettier */
import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

const router = new Router({
	mode: "history",
	base: process.env.BASE_URL,
	routes: [{
			path: "/",
			name: "home",
			component: Home,
			meta: {
				title: 'Home Page - Example App',
				metaTags: [{
						name: 'description',
						content: 'The home page of our example app.'
					},
					{
						property: 'og:description',
						content: 'The home page of our example app.'
					}
				]
			}
		},
		{
			path: "/work",
			component: () => import("./views/work/Index.vue"),
			meta: {
				title: 'Portfolios - Example App',
			},
			children: [{
				path: '',
				name: "work",
				component: () => import("./views/work/Work.vue"),
			}, {
				path: 'single',
				name: "work.single",
				component: () => import("./views/work/Single.vue"),
			}]
		},
		{
			path: "/service",
			name: "service",
			component: () => import("./views/Service.vue")
		},
		{
			path: "/thought",
			name: "thought",
			component: () => import("./views/Thought.vue")
		},
		{
			path: "/about",
			component: () => import("./views/about/Index.vue"),
			meta: {
				title: 'Portfolios - Example App',
			},
			children: [{
				path: '',
				name: "about",
				component: () => import("./views/about/About.vue")
			}, {
				path: 'team',
				name: "about.team",
				component: () => import("./views/about/Team.vue"),
			}]
		},
		{
			path: "/contact",
			name: "contact",
			component: () => import("./views/Contact.vue")
		},
		{
			path: "/more",
			name: "more",
			component: () => import("./views/More.vue")
		},
	]
});

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
	// This goes through the matched routes from last to first, finding the closest route with a title.
	// eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
	const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

	// Find the nearest route element with meta tags.
	const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
	// const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

	// If a route with a title was found, set the document (page) title to that value.
	if (nearestWithTitle) document.title = nearestWithTitle.meta.title;

	// Remove any stale meta tags from the document using the key attribute we set below.
	Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

	// Skip rendering meta tags if there are none.
	if (!nearestWithMeta) return next();

	// Turn the meta tag definitions into actual elements in the head.
	nearestWithMeta.meta.metaTags.map(tagDef => {
			const tag = document.createElement('meta');

			Object.keys(tagDef).forEach(key => {
				tag.setAttribute(key, tagDef[key]);
			});

			// We use this to track which meta tags we create, so we don't interfere with other ones.
			tag.setAttribute('data-vue-router-controlled', '');

			return tag;
		})
		// Add the meta tags to the document head.
		.forEach(tag => document.head.appendChild(tag));

	next();
});

export default router