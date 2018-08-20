// https://router.vuejs.org/guide/

// 0. If using a module system (e.g. via vue-cli), import Vue and VueRouter
// and then call `Vue.use(VueRouter)`.

// 1. Define route components.
// These can be imported from other files
const examples = {
		template: '<div><b-nav-item to="/examples/example1">ex1</b-nav-item><router-view></router-view></div>' 
}
const Bar = { template: '<div>bar</div>' }
const ex1 = { template: '<div>example1</div>'}

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/examples', component: examples,
	  children: [{
	             path: 'example1',
	             component: ex1
	  }]
  },
  { path: '/bar', component: Bar }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({
  router
}).$mount('#app')

// Now the app has started!
