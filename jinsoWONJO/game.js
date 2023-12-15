let timeStamp = Install_NoteData();
let startTime;
let playTime;
var hits = { perfect: 0, good: 0, bad: 0, miss: 0 };
let time = 270;

function endGame() {
    document.getElementsByClassName('key-container')[0].style.display = 'none';
    document.getElementsByClassName('end-container')[0].style.display = 'block';
    document.getElementById('score').style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById('myAudio');
    audio.play(); // 오디오 재생
    const keyElements = document.querySelectorAll('.key-container div');
    const trackContainer = document.querySelector('.track-container');
    let score = 0;
    audio.onplay = function () {
        startGame();
    }

    function startGame() {
        startTime = Date.now();
        setInterval(gameLoop, 50);
    }

    function gameLoop() {
        document.getElementById('score').innerHTML = '<h2>score : ' + score + "</h2>";
        const currTime = Date.now();
        playTime = Math.floor((currTime - startTime) / 50) * 50;
        console.log(score)
        timeStamp.forEach(time => {
            if (time == playTime) {
                createNote();
            }
        });

        if (playTime >= time * 1000) {

            endGame();
            document.getElementById('perfectcnt').innerText = 'perfect : ' + hits.perfect;
            document.getElementById('goodcnt').innerText = 'good : ' + hits.good;
            document.getElementById('badcnt').innerText = 'bad : ' + hits.bad;
            document.getElementById('misscnt').innerText = 'miss : ' + hits.miss;
            document.getElementById('scorecnt').innerText = 'score : ' + score;
        }
    }


    document.addEventListener('keydown', function (event) {
        const pressedKey = event.key.toUpperCase();
        const correspondingKeyElement = document.querySelector(`.KEY-${pressedKey}`);

        if (correspondingKeyElement) {
            correspondingKeyElement.classList.add('pressed');
            const notes = document.querySelectorAll('.note');
            const trillbot = correspondingKeyElement.getBoundingClientRect().bottom;
            const trillx = correspondingKeyElement.getBoundingClientRect().x;
            const trillhei = correspondingKeyElement.getBoundingClientRect().height;
            notes.forEach(note => {
                const notebot = note.getBoundingClientRect().bottom;
                const rate = 1 - (trillbot - notebot) / trillhei;
                const notex = note.getBoundingClientRect().x;
                if (notex == trillx) {
                    if (rate > 0) {
                        console.log(rate);
                        if (rate > 0.5) {
                            hits.perfect += 1;
                            score += 100;
                            note.remove();
                            changeText('perfect');
                            return;
                        }
                        else if (rate > 0.3) {
                            hits.good += 1;
                            score += 50;
                            note.remove();
                            changeText('good');
                            return;
                        }
                        else if (rate > 0.1) {
                            hits.bad += 1;
                            score += 20;
                            note.remove();
                            changeText('bad');
                            return;
                        }
                        else {
                            hits.miss += 1;
                            score -= 10;
                            note.remove();
                            changeText('miss');
                            return;
                        }
                    }
                }
            })
        }

    });

    document.addEventListener('keyup', function (event) {
        const pressedKey = event.key.toUpperCase();
        const correspondingKeyElement = document.querySelector(`.KEY-${pressedKey}`);

        if (correspondingKeyElement) {
            correspondingKeyElement.classList.remove('pressed');
        }
    });

    let a = 2; // 이동하는 시간을 더 길게 설정

    function createNote() {
        const note = document.createElement('div');
        note.classList.add('note');
        const keyContainerRect = document.querySelector('.key-container').getBoundingClientRect();
        const randomKeyElement = keyElements[Math.floor(Math.random() * keyElements.length)];
        const keyRect = randomKeyElement.getBoundingClientRect();
        note.style.left = keyRect.x + 'px';
        note.style.top = '0'; // 노트가 트랙 상단에서 시작하도록 설정

        trackContainer.appendChild(note);

        note.style.animation = `moveDown ${a}s linear`;

        note.addEventListener('animationend', function () {
            this.remove();
        });

        const checkCollision = setInterval(function () {
            const noteRect = note.getBoundingClientRect();
            if (noteRect.bottom >= keyContainerRect.bottom) {
                clearInterval(checkCollision);
                note.remove();
                hits.miss += 1;
                score -= 10;
                note.remove();
                changeText('miss');
            }
        }, 10);
    }
});


function changeText(newText) {
    const judElement = document.getElementById(newText);
    judElement.style.opacity = 1; // 투명도 초기화
    judElement.innerText = newText;
    judElement.style.display = 'block'; // 요소 보이기
    judElement.style.animation = 'fadeEffect 2s'; // 애니메이션 추가
    judElement.addEventListener('animationend', () => {
        judElement.style.opacity = 0; // 애니메이션이 끝나면 투명도를 0으로 조정 
        judElement.style.display = 'none'; // 애니메이션이 끝난 후 요소를 숨김
    });
}

// 애니메이션 종료 후 실행될 함수
function removeAnimation() {
    judElement.style.animation = 'none'; // 애니메이션 제거
}


