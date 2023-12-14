window.addEventListener("keydown", e=> {
    const trillsTop = document.querySelector('.trills').getBoundingClientRect().top;
    notes.forEach(note => {
        if (note.isNoteReachedEnd(trillsTop)) {
            notes.splice(index, 1); // 노트를 배열에서 제거합니다.
        }
    });
    const key = document.getElementById(e.key);
    if(key) key.classList.add('pressed');
})

window.addEventListener("keyup", e=> {
    const key = document.getElementById(e.key);
    if(key) key.classList.remove('pressed');
})
