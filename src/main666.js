import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
//注册VueRouter 路由
Vue.use(VueRouter)

// import Home from './components/Home.vue'
// import Information from './components/Information.vue'
// import Knowledge from './components/Knowledge.vue'
// import Message from './components/Message.vue'

// import Vue from 'vue'
// import App from './App'

import home from './components/Home'
import information from './components/Information'
import knowledge from './components/Knowledge'
import message from './components/Message'

// import VueRouter from 'vue-router'
// //注册路由
// Vue.use(VueRouter)

//开启debug
Vue.config.debug = true;
//注册根组件
let app = Vue.extend(App)
//创建路由实例
let router = new VueRouter({
	//去除地址处 '#!'
	hashbang: false,
	history: true
})

//创建路由地址
router.map({
	'/home':{
		name:'home',
		component:home
	},
	'/information':{
		name:'information',
		component:information
	},
	'/knowledge':{
		name:'knowledge',
		component:knowledge
	},
	'/message':{
		name:'message',
		component:message
	},
})
//定义全局对象，防止404
router.redirect({
	'/':'/home'
})
//挂载到#app
router.start(app,'#app')








// // 引入vue以及vue-router
// import Vue from "vue";
// import VueRouter from "vue-router";
// Vue.use(VueRouter);

// // 引入组件！直接使用es6的语法
// import App from './App.vue';
// import home from './components/Home.vue';
// import search from './components/Information.vue';
// import cart from './components/Knowledge.vue';
// import me from './components/Message.vue';

// // require('./static/common.js')

// // require('./static/sm.css')

// //开启debug模式
// Vue.config.debug = true;
// // new Vue(app);//这是上一篇用到的，新建一个vue实例，现在使用vue-router就不需要了。
// // 路由器需要一个根组件。
// let app = Vue.extend(App);
// // 创建一个路由器实例
// let router = new VueRouter({
// 	hashbang: false,
//     history: true
// 	});
// // 每条路由规则应该映射到一个组件。这里的“组件”可以是一个使用 Vue.extend创建的组件构造函数，也可以是一个组件选项对象。
// router.map({//定义路由映射
//     '/home': {
//         name:'home',
//         component: home,
//     },
//     '/search': {
//         name:'search',
//         component: search
//     },
//     '/cart':{//访问地址
//         name:'cart',//定义路由的名字。方便使用。
//         component:cart//引用的组件名称，对应上面使用`import`导入的组件
//         //component:require("components/app.vue")//还可以直接使用这样的方式也是没问题的。不过会没有import集中引入那么直观
//     },
//     '/me': {
//         name:'me',
//         component: me ,
//     }
// });
// router.redirect({//定义全局的重定向规则。全局的重定向会在匹配当前路径之前执行。
//     '/':"/home"//重定向任意未匹配路径到/index
// });
// // 现在我们可以启动应用了！
// // 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
// router.start(app, '#app');







