<template>
    <div class="view">
        <input type="text" maxlength="12em" v-model="user_name">
        <input type="password" v-model="user_pass">
        <button @click='onClick_submitLogin'>提交</button>
    </div>
</template>

<script>
import {utils} from './../../config/utils.js'
export default {
    data(){
        return {
            user_name:'',
            user_pass:''
        }
    },
    methods:{
        onClick_submitLogin:function(){
            utils.data.setData('isLogin',true);
            this.$router.push({path:'/'})
        }
    }
}
</script>

<style lang='scss'>
    .view{
        height: 100%
    }
</style>


