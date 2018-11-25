export var utils = {
    data:{
        getData:function($isLogin){
            return localStorage.getItem($isLogin)
        },
        setData:function($key,$value){
            localStorage.setItem($key,$value)
        }
    },
}