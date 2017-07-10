<template>
    <div>
        <div>{{fruit}}</div>
        <div v-for="(item,index) in list" >{{ item.name }}</div>
        <button type="" @click="clickMe">点我</button>
    </div>
</template>

<script>
export default {
    data () {
        return {
            first:'taozi',
            list:[
                {name:"苹果"},
                {name:"西瓜"},
                {name:"香蕉"},
                {name:"葡萄"}
            ]
        }
    },
    methods: {
        clickMe:function(){
            this.list.push({name:"桃子"})
        }
    },
    computed: {
        fruit:function(){
            return this.first
        }
    }
}
</script>

<style>

</style>
