const changeDirBtn = document.getElementById('rtl-support-btn');

const changeDirToggle = (dir) => {
    if (dir === 'rtl') {
        document.documentElement.dir = 'ltr';
        changeDirBtn.textContent = 'LTR';
    }
    else if (dir === 'ltr') {
        document.documentElement.dir = 'rtl';
        changeDirBtn.textContent = 'RTL';
    }
}
changeDirBtn.addEventListener('click', () => {
    const direction = document.documentElement.dir;
    changeDirToggle(direction);
})