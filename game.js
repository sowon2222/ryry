document.addEventListener("DOMContentLoaded", function () {
    const keyElements = document.querySelectorAll('.key-container div');
    const trackContainer = document.querySelector('.track-container');
    let score = 0;

    setInterval(createNote, 1000);
    setInterval(createNote, 1000);







    document.addEventListener('keydown', function (event) {
        const pressedKey = event.key.toUpperCase();
        const correspondingKeyElement = document.querySelector(`.KEY-${pressedKey}`);

        if (correspondingKeyElement) {
            correspondingKeyElement.classList.add('pressed');


        }
    });

    document.addEventListener('keyup', function (event) {
        const pressedKey = event.key.toUpperCase();
        const correspondingKeyElement = document.querySelector(`.KEY-${pressedKey}`);

        if (correspondingKeyElement) {
            correspondingKeyElement.classList.remove('pressed');
        }
    });
    function createNote() {
        const note = document.createElement('div');
        note.classList.add('note');
        const keyContainerRect = document.querySelector('.key-container').getBoundingClientRect();
        // const randomKeyElement = keyElements[Math.floor(Math.random() * keyElements.length)];    
        // const keyRect = randomKeyElement.getBoundingClientRect();
        note.style.left =  keyContainerRect.x+ 'px';
        note.style.top = keyContainerRect.top - 10 + 'px';
        trackContainer.appendChild(note);

        
        note.style.animation = 'moveDown 1s linear';
        

        note.addEventListener('animationend', function () {     
            this.remove(); 
        });

        const checkCollision = setInterval(function () {
            const noteRect = note.getBoundingClientRect();
            if (noteRect.bottom >= keyContainerRect.bottom) {
                clearInterval(checkCollision);
                note.remove();
            }
        }, 10);

    }
});



