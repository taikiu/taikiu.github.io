(function(){
    'use strict';
    var game = {
    startTime : null,
    displayArea : document.getElementById('display-area')
    };

    function start(){
        game.startTime = new Date().getTime();
        document.body.onkeypress = stop;
        //console.log('スタートしました');
    }

    function stop(){
        //console.log('ストップしました');
        var currentTime = new Date().getTime();
        var second = (currentTime - game.startTime) / 1000;
        if(4.5 <= second && second <= 5.5){
            game.displayArea.innerText = second + '秒でした。素晴らしい';
        }else{
            game.displayArea.innerText = second + '秒でした。残念';
        }
    }

    if(confirm('OKを押して5秒だと思ったら何かキーを押してください')){
        start();
    }
})();

