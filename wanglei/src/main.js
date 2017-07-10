// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
// import axios from 'axios'

// Vue.prototype.$http = axios
Vue.use(VueResource)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});

function fn(){
	// 获取屏幕的宽和高
	var Width = document.documentElement.clientWidth,
		Height = document.documentElement.clientHeight;
	if (Width > Height){
		document.querySelector("html").style.fontSize = document.documentElement.clientWidth/5 + "px";
	}else{
		document.querySelector("html").style.fontSize = document.documentElement.clientWidth/3.75 + "px";
	};

	// 屏幕改变大小时设置html字号
	window.onresize = function(){
		var Width = document.documentElement.clientWidth,
		Height = document.documentElement.clientHeight;
		if (Width > Height){
			document.querySelector("html").style.fontSize = document.documentElement.clientWidth/5 + "px";
		}else{
			document.querySelector("html").style.fontSize = document.documentElement.clientWidth/3.75 + "px";
		};
	};
};	
window.onload = fn(); 
