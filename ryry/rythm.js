class Note {
    constructor(x) {
        this.x = x;
        this.y = 0;
        this.isFalling = false;
    }
    static width = 50;
    static height = 13.5;
    static speed = 5;

    draw(ctx) {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, Note.width, Note.height);
    }

    fall() {
        this.isFalling = true; // 노트를 떨어지는 상태로 변경함
    }

    move() {
        if (this.isFalling) { // 떨어지는 상태일때만 움직임 
            this.y += Note.speed;
        }
    }

    isNoteReachedEnd(trillsTop) {
        return this.y + Note.height >= trillsTop;
    }
}

class NoteType extends Note {
    constructor(key) {
        let superValue = 0;
        switch (key) {
            case 0:
                superValue = 0;
                break;
            case 1:
                superValue = 50;
                break;
            case 2:
                superValue = 100;
                break;
            case 3:
                superValue = 150;
                break;
            case 4:
                superValue = 200;
                break;
            case 5:
                superValue = 250;
                break;
            default:
                // Handle default case or other values here
                break;
        }
        super(superValue);
        this.key = key; // Assign the key value to the NoteType object
}
}

function songlist() {
    let songs = ['https://i.namu.wiki/i/9QAN9t5VjOinWaE-ahdkXMWwmmv_Lcc8HlSa7VThKzsuaKTqMYg33kP_IoSRX24jizvx338xWpPMlaH_K3MRs2JqqClmkZCuVlNWEtKzeZdzlHkDbzCclV9HJmrCQMbbF5-PSSahb80-z4NMHdmbGg.webp'];

    for (let i = 0; i < songs.length; i++) {
        document.getElementById('songli').innerHTML = '<li><img class=\'simg\' src=' + songs[i] + '></li>';
    }
}
songlist();
const timeStamp = Install_NoteData();
const time = 100000;
const notes = [];

for (i = 0; i < timeStamp.length; i++) {
    notes.push(new NoteType(Math.floor(Math.random() * 6)));
}

let currentNoteIndex = 0;

let canvas = document.getElementById('gamePan');
let ctx = canvas.getContext('2d');
let startTime;
let seconds = 0;

function startgame() {
    startTime = Date.now();
    document.getElementById('mainscr').style.display = 'none';
    document.getElementById('gamescr').style.display = 'block';


    setInterval(gameLoop, 50); // 1초마다 gameLoop() 함수 호출
}

function gameLoop() {
    if (time == seconds) {
        document.getElementById('endscr').style.display = 'block';
        document.getElementById('gamescr').style.display = 'none';
        return;
    }
    disPlayTime();

    for (let i = 0; i < timeStamp.length; i++) {
        if (timeStamp[i] == seconds) {
            notes[currentNoteIndex].fall();
            currentNoteIndex++;
        }
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const trillsTop = document.querySelector('.trills').getBoundingClientRect().top;

    notes.forEach((note, index) => {
        if (note.isFalling) {
            note.move();
            note.draw(ctx);

            if (note.isNoteReachedEnd(trillsTop)) {
                alert("닿");
                notes.splice(index, 1); // 노트를 배열에서 제거합니다.
            }
        }
    });
}

function disPlayTime() {
    const currTime = Date.now();
    const playTime = currTime - startTime;
    seconds = Math.floor(playTime / 50) * 50;
    timeDisplay.innerText = `Play Time: ${seconds} seconds`;
}


let timeDisplay = document.getElementById('timeDisplay');