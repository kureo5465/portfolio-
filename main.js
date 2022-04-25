const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display'),
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display'),
}

const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#winningScore');

let winningScore = 3;
let isGameOver = false;

function updateScores(player, opponent) {
    //p1Scoreまたはp2ScoreとwinnningScoreの数値が一緒になったら、処理が止まる。
    if(!isGameOver) {
        player.score ++;
        player.display.textContent = player.score;
    
        if(player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger-dark');
    
            //disabled(無効を示すHTML属性)でボタンが押せなくなる。
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
    }
}


p1.button.addEventListener('click', function() {
    updateScores(p1, p2);
});

p2.button.addEventListener('click', function() {
    updateScores(p2, p1);
});



winningScoreSelect.addEventListener('change', function() {

    winningScore = parseInt(this.value);

    //セレクトが変わったらスコアーがリセットされる。
    reset();
});


function reset() {
    //スコアーが稼働するようにfalseに戻す。
    isGameOver = false;

    for (const p of [p1, p2]) {
        //スコアーをリセット。
        p.score = 0;
        
        //テキストをリセット
        p.display.textContent = 0;
        
        //テキストの色が黒に戻る。
        p.display.classList.remove('has-text-success', 'has-text-danger-dark');
        p.button.disabled = false;
    }
}

resetButton.addEventListener('click', reset);