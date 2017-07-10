<template>
    <div>
        <div class="banner">
            <router-link tag="span" to="/classify">全部分类</router-link>
            <router-link tag="span" to="/chinaFruit">国产水果</router-link>
            <router-link tag="span" to="/impFruit">进口水果</router-link>
        </div>
        <router-view></router-view>
        <div>
            <div class="header">
                <span class="icon"></span>
                全部分类
                <span class="cancle">取消</span>
            </div>
            <div class="classify">
                <ul>
                    <li v-for="(item,index) in classList" @click="classAdd1(index)" :class="{classActive1:activeIndex == index}">
                        {{ item.catName }}
                    </li>
                </ul>
                <ul class="class2">
                    <li v-for = "(item,index) in class1" @click="classAdd2(index)" :class = "{classActive2:activeIndex2 == index}">
                        {{ item.catName}}
                    </li>
                </ul>
                <ul class="class3">
                    <li v-for="(item,index) in class2">
                        {{ item.catName }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            classList:[],
            class1:[],
            class2:[],
            activeIndex:1,
            activeIndex2:0
        }
    },
    methods: {
		getData:function(){
			this.$http.get('../../static/data/class1.json').then(function(res){
				// console.log(res)
			});
            this.$http.jsonp('https://gatewx.dmall.com/customersite/index?param=%7B%22pairs%22%3A%221-0-339%22%2C%22bizType%22%3A%221%22%7D&token=3A55C70A0A87D3161C6F21C38A849C4CBDC364C2EE06905E5B126197AF1899B35E2F2F4422BA21803FF186AAFB76829E8C65A3C2B00A6E794960B92AB165291692AB31F0F9EC25BD95AAE9A0CD3DC2C33189638D43F138377325F8980DB4109C85194C488AB34377CFB0F01DEAE4BB354ECC485F2B48411117560EF1B4B8ADAF&source=2&tempid=C798EC3E9580000277551B293D8913C4&pubParam=%7B%7D&_=1499588176060').then(function(res){
                console.log(res);
                this.classList = res.body.data.categoryInfo.categorys;
                this.class1 = this.classList[1].childCmCategories;
                this.class2 = this.class1[0].childCmCategories;
                console.log(this.classList)
            });
		},

        // 点击事件，切换二级类的内容
        classAdd1:function(index){
            this.activeIndex = index;
            this.class1 = this.classList[index].childCmCategories;
            this.class2=[];
        },

        //点击事件，切换三级类的内容
        classAdd2:function(index){
            this.activeIndex2 = index;
            this.class2 = this.class1[index].childCmCategories
        }
	},
	created () {
		this.getData();
	}
}
</script>

<style>
    .banner{
        height: 1.8rem;
        background-color: rgba(0, 0, 0, .4);
        /*background-image: url('../../static/images/market.jpg')*/
    }
    .header{
        height: 0.44rem;
        line-height: 0.44rem;
        color: #404040;
        border-bottom: 1px solid #f0f0f0;
        padding: 0 0.1rem;
        font-size: 0.14 rem; 
    }
    .header .icon{
        display: inline-block;
        width: 0.3rem;
        height: 0.3rem;
        background-image: url('../../static/images/icon.png');
        background-size: 4rem auto;
        background-repeat: no-repeat;
        background-position: 0 -4.4rem;
        margin-top: 0.07rem;
        vertical-align: top;
    }
    .header .cancle{
        height: 0.44rem;
        line-height: 0.44rem;
        float: right;
        color: #ff712b;
    }
    .classify{
        display: flex;
    }
    ul{
        width:33.33%
    }
    ul li{
        height: 0.44rem;
        line-height: 0.44rem;
        color: grey;
        text-indent: 0.15rem;
        list-style: none;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;

    }
    .class2{
        background-color: #f6f6f6;
    }
    .class3{
        background-color: #f0f0f0;
    }
    .classActive1{
        border-left: 0.04rem solid #ff712b;
        color: #ff712b;
        background-color: #f6f6f6;
    }
    .classActive2{
        color: #ff712b;
        background-color: #f0f0f0;
    }
</style>
