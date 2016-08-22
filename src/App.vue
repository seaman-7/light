<template>
	<div :class="{'theme-dark':isN}">
		<!-- <div class="page" :class="{'theme-dark':isN}"> -->
		<div class="page">
			<header class="bar bar-nav">
				<a class="button button-link button-nav pull-left close-panel" @click="gohistory()" data-transition='slide-out'>
					<span class="icon icon-left"></span>
				</a>
				<a class="button button-link button-nav pull-right open-panel"  data-transition='slide-out'>
					<span class="icon icon-menu"></span>
				</a>
				<h1 class="title close-panel">{{$route.name}}</h1>
			</header>

			<nav class="bar bar-tab close-panel">
				<a class="tab-item active" v-link="{name:'home',activeClass:'active'}">
					<span class="icon icon-home"></span>
					<span class="tab-label">首页</span>
				</a>
				<a class="tab-item" v-link="{name:'information',activeClass:'active'}">
					<span class="icon icon-browser"></span>
					<span class="tab-label">资讯</span>
				</a>
				<a class="tab-item" v-link="{name:'knowledge',activeClass:'active'}">
					<span class="icon icon-star"></span>
					<span class="tab-label">涨知识</span>
				</a>
				<a class="tab-item" v-link="{name:'message',activeClass:'active'}">
					<span class="icon icon-message"></span>
					<span class="tab-label">留言板</span>
				</a>
			</nav>

			<div class="content close-panel">

				<router-view></router-view>
			</div>
		</div>
		<!-- <div class="panel-overlay"></div> -->
		<!-- Left Panel with Reveal effect -->
		<div class="panel panel-left panel-reveal theme-dark" id='panel-left-demo'>
			<div class="content-block side_bar">
				<p>简介</p>
				<p>一个的资讯类 Webapp</p>
				<p v-link="{name:'message'}" class="close-panel">留言</p>
				<p>有问题可以 ↑,或者 ↓</p>
				<p>微信号</p>
				<p class="sub_wechat">xxxxxxxxxxxxxxxx</p>
				<img :src="wechatImg">
				<br>
				<br>
				<br>
				<br>
				<br>
				<br>
				<br>
				<br>
				<hr/>

				<div class="row">
					<span class="col-33">版本号 : </span> <span class="pull-right"> 1.01 </span>
				</div>
				<div class="row">
					<span class="col-40">夜间模式 :</span>
					<label class="label-switch pull-right">
						<input @click="nigthMode()" type="checkbox">
						<div class="checkbox"></div>
					</label>
				</div>
			</div>

		</div>
		</div>
	</template>

	<style>
		body { 
			font-family:  "微软雅黑",Source Sans Pro,Helvetica, sans-serif;
			/*color: #42b983;*/
			/*font-weight: bold;*/
		} 
		.side_bar{
			text-align:center;
		}
		.sub_wechat{
			font-size: 0.9em;
			color: #ccc;
		}
	</style>

	<script>
		export default({
			data(){
				return{
					wechatImg:"http://qiniupicbed.qiniudn.com/upload/6a75a7c26775b68d04a26b45ff437a52.gif",
					// wechatImg:"./static/wechat.gif"
					isN:false,
				}
			},
			methods:{
				gohistory() {
					window.history.back()
				},
				nigthMode() {
					let isN
					this.isN = !this.isN
					if(this.isN === true){
					console.log("夜间模式已开启")
					}
					else{
					console.log("夜间模式已关闭")
					}
				}
			}
		})
	</script>