<template>
    <div id="app">
        <router-view></router-view>
        <ul>
			<router-link tag="li" to="/">Home</router-link>
			<router-link tag="li" to="/market">Market</router-link>
			<router-link tag="li" to="/cart">Cart</router-link>
			<router-link tag="li" to="/mine">Mine</router-link>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
*{
	margin: 0;
	padding: 0;
}
body{
        font-size: 0.16rem;
    }
#app>ul{
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	display: flex;
	background: grey;
	align-items: center;
}
#app>ul li{
	list-style: none;
	flex: 1;
	color: white;
	height: 30px;
	line-height: 30px;
	text-align: center
}
</style>
