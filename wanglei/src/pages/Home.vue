<template>
  <div>
      home
  </div>
</template>

<script>
export default {
	data () {
		return {
			
		}
	},
	methods: {
		getData:function(){
			this.$http.jsonp('https://gatewx.dmall.com/address/getListhttps://gatewx.dmall.com/home/business?param=%7B%22longitude%22%3A%22116.346111%22%2C%22latitude%22%3A%2240.063575%22%7D&token=&source=2&tempid=C798410D31D0000286A51420C9901D58&pubParam=%7B%7D&_=1499478655090').then(function(res){
				console.log(res)
			})
		}
	},
	created () {
		this.getData();
	}
}
</script>

<style>
	
</style>
