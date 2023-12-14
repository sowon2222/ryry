class Note {
    constructor(x) {
        this.x = x;
        this.y = 10;
        this.isFalling = false;
    }
    static width = 50;
    static height = 13.5;
    static speed = 14;

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

    isNoteReachedEnd(canvas) {
        return this.y >= canvas.height - Note.height;
    }
}

class NoteType extends Note {
    constructor(key, x) {
        super(x);
        this.key = key;
    }
}

function songlist() {
    let songs = ['https://i.namu.wiki/i/9QAN9t5VjOinWaE-ahdkXMWwmmv_Lcc8HlSa7VThKzsuaKTqMYg33kP_IoSRX24jizvx338xWpPMlaH_K3MRs2JqqClmkZCuVlNWEtKzeZdzlHkDbzCclV9HJmrCQMbbF5-PSSahb80-z4NMHdmbGg.webp'];

    for (let i = 0; i < songs.length; i++) {
        document.getElementById('songli').innerHTML = '<li><img class=\'simg\' src=' + songs[i] + '></li>';
    }
}
songlist();
const timeStamp = Install_NoteData(3);
const time = 30;
const notes = [
    new NoteType('a', 0),
    new NoteType('s', 50),
    new NoteType('a', 0),
    new NoteType('j', 150),
    new NoteType('l', 250),
    new NoteType('k', 200),
    new NoteType('a', 0),
    new NoteType('d', 100),
    new NoteType('s', 50),
    new NoteType('k', 200),
    new NoteType('j', 150),
    new NoteType('l', 250)
];
let currentNoteIndex = 0;

let canvas = document.getElementById('gamePan');
let ctx = canvas.getContext('2d');
let startTime;
let seconds = 0;

function startgame() {
    startTime = Date.now();
    document.getElementById('mainscr').style.display = 'none';
    document.getElementById('gamescr').style.display = 'block';


    setInterval(gameLoop, 100); // 1초마다 gameLoop() 함수 호출
}

function gameLoop() {
    if (time == seconds) {
        document.getElementById('endscr').style.display = 'block';
        document.getElementById('gamescr').style.display = 'none';
        return;
    }
    disPlayTime();

    for (let i = 0; i < timeStamp.length; i++) {
        if (timeStamp[i] > seconds - 50 && timeStamp[i] < seconds + 50) {
            console.log(timeStamp[i]+" "+(seconds - 50))
            notes[currentNoteIndex].fall();
            currentNoteIndex++;
        }
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    notes.forEach(note => {
        if (note.isFalling) {
            note.move();
            note.draw(ctx);

            if (note.isNoteReachedEnd(canvas)) {
                console.log(`Note ${note.key} reached the end!`);
            }
        }
    });
}

function disPlayTime() {
    const currTime = Date.now();
    const playTime = currTime - startTime;
    seconds = Math.floor(playTime / 100) * 100;
    timeDisplay.innerText = `Play Time: ${seconds} seconds`;
}


let timeDisplay = document.getElementById('timeDisplay');
