/**
 * Created by wanglei on 2016/8/26.
 */
//require("../express/express");

function consoleNum(){
    for(var i = 0; i<5; i++){
        var obj = {
            name:"wanglei"
        };
        (function(j){
            setTimeout(function(){
                console.log();
            },i*1000)
        })(i);
    }
}
consoleNum();