$(function(){       
    $("h1").t({
        blink:true,     //カーソルを点滅する
        speed:150,       //表示スピードを変更する
        caret: true,    //カーソルを表示しない

        //タイピングがすべて終わってから動く
        fin:function(elm){
            console.log("動いてる");
            //linksをフェードインさせる
            $('.links').fadeIn(1000);
        }

    });
});