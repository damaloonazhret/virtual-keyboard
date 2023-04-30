const body = document.querySelector('body');

const header = document.createElement('header');
const main = document.createElement('main');
const textarea = document.createElement('textarea');
const keyboard = document.createElement('section');
const keyboardRow = document.createElement('div');
const keyboardRow2 = document.createElement('div');
const keyboardRow3 = document.createElement('div');
const keyboardRow4 = document.createElement('div');
const keyboardRow5 = document.createElement('div');

header.innerText = 'RSS Виртуальная клавиатура';
header.className = 'header';
textarea.className = 'textarea';
keyboard.className = 'keyboard';
keyboardRow.className = 'keyboard--row row';
keyboardRow2.className = 'keyboard--row row';
keyboardRow3.className = 'keyboard--row row';
keyboardRow4.className = 'keyboard--row row';
keyboardRow5.className = 'keyboard--row row';

textarea.setAttribute('spellcheck', 'false');

body.appendChild(header);
body.appendChild(main);
main.appendChild(textarea);
main.appendChild(keyboard);
keyboard.appendChild(keyboardRow);
keyboard.appendChild(keyboardRow2);
keyboard.appendChild(keyboardRow3);
keyboard.appendChild(keyboardRow4);
keyboard.appendChild(keyboardRow5);

textarea.focus();

const key = (num) => {
    if (num.shiftCaps === num.caseDownRu) {
        return `
    <div class="keyboard--key key ${num.name}">
        <div class="eng">
            <span class="caseDownConst">${num.caseDownEn}</span>
        </div>
    </div>
    `;
    }

    return `
    <div class="keyboard--key key ${num.name}">
        <div class="eng">
            <span class="caseDown">${num.caseDownEn}</span>
            <span class="caseUp hidden">${num.caseUpEn}</span>
            <span class="caps hidden">${num.capsEn}</span>
            <span class="shiftCaps hidden">${num.shiftCaps}</span>
        </div>
    </div>
    `;
};

const keyRu = (num) => {
    if (num.shiftCaps === num.caseDownRu) {
        return `
    <div class="keyboard--key key ${num.name}">
        <div class="eng">
            <span class="caseDownConst">${num.caseDownEn}</span>
        </div>
    </div>
    `;
    }
    return `
    <div class="keyboard--key key ${num.name}">
        <div class="rus">
            <span class="caseDown">${num.caseDownRu}</span>
            <span class="caseUp hidden">${num.caseUpRu}</span>
            <span class="caps hidden">${num.capsRu}</span>
            <span class="shiftCaps hidden">${num.shiftCapsRu}</span>
        </div>
    </div>
    `;
};

class KeyRus {

    constructor(num) {
        this.num = num;
    }

    create() {
        let buranRus = this.num.map(keyRu).join(' ');
        return buranRus;
    }

}

class KeyEn {

    constructor(num) {
        this.num = num;
    }

    create() {
        let buran = this.num.map(key).join(' ');
        return buran;
    }

}

const insertHTML = (rows1, rows2, rows3, rows4, rows5) => {
    keyboardRow.innerHTML = rows1;
    keyboardRow2.innerHTML = rows2;
    keyboardRow3.innerHTML = rows3;
    keyboardRow4.innerHTML = rows4;
    keyboardRow5.innerHTML = rows5;
};

const createListWithInnerHTMLRus = (row1, row2, row3, row4, row5) => {

    let rows1 = new KeyRus(row1).create();
    let rows2 = new KeyRus(row2).create();
    let rows3 = new KeyRus(row3).create();
    let rows4 = new KeyRus(row4).create();
    let rows5 = new KeyRus(row5).create();

    insertHTML(rows1, rows2, rows3, rows4, rows5);

};

const createListWithInnerHTML = (row1, row2, row3, row4, row5) => {

    let rows1 = new KeyEn(row1).create();
    let rows2 = new KeyEn(row2).create();
    let rows3 = new KeyEn(row3).create();
    let rows4 = new KeyEn(row4).create();
    let rows5 = new KeyEn(row5).create();

    insertHTML(rows1, rows2, rows3, rows4, rows5);

};


createListWithInnerHTMLRus(numsRow, tabRow, capsRow, shiftRow, ctrlRow);

function getCaretPos(obj) {
    obj.focus();
    if (obj.selectionStart) return obj.selectionStart;
    return 0;
}

const eng = document.querySelectorAll('.eng');
const rus = document.querySelectorAll('.rus');


keyboard.addEventListener('click', function (e) {
    e.preventDefault();
    let width = textarea.offsetWidth;
    let curr = getCaretPos(textarea);
    switch (e.target.textContent.trim()) {
        case 'Backspace' : {
            textarea.value = textarea.value.substring(0, curr - 1) +
                textarea.value.substring(curr, textarea.length);
            textarea.setSelectionRange(curr - 1, curr - 1);
            return;
        }
        case 'Del': {
            textarea.value = textarea.value.substring(0, curr) +
                textarea.value.substring(curr + 1, textarea.length);
            textarea.setSelectionRange(curr, curr);
            return;
        }
        case 'Enter': {
            textarea.focus();
            textarea.value += '\n';
            return;
        }
        case '◄': {
            textarea.selectionEnd = (curr - 1);
            return;
        }
        case '►': {
            textarea.selectionStart = (curr + 1);
            return;
        }
        case '▼': {
            if (textarea.value.length > (width / 12.41)) {
                textarea.selectionStart = ((curr) + ((Math.floor(width / 12.41))));
            }
            return;
        }
        case '▲': {
            if (textarea.value.length > (width / 12.41) && curr > (width / 12.41)) {
                textarea.selectionEnd = ((curr) - ((Math.floor(width / 12.41))));
            }
            return;
        }
        case 'Tab': {
            textarea.value += '\t';
            return;
        }
        default: {
            // if (e.target.tagName === 'SPAN' && e.target.textContent.length === 1) {
            if (true) {
                console.log(e.target.textContent.trim())
                // let aezakmi = document.querySelectorAll(`.${e.code} div span`);
                // let keyCurr;
                // aezakmi.forEach((el) => {
                //     if (el.classList.contains('hidden')) {
                //         return;
                //     }
                //     keyCurr = el.textContent;
                // });
                // textarea.value = textarea.value.substring(0, curr) + keyCurr +
                //     textarea.value.substring(curr, textarea.length);
                // textarea.setSelectionRange(curr + 1, curr + 1);
            }
        }
    }
});
let shiftPress = '';
const shiftCaps = (e) => {
    if (shiftPress !== e.code) {
        shiftPress = e.code;
        if (e.target.textContent.trim() == 'Shift' ||
            e.code == "ShiftLeft" ||
            e.code == 'ShiftRight') {
            document.querySelectorAll('.caseUp ').forEach(el => {
                el.classList.toggle('hidden');
            });
            document.querySelectorAll('.caseDown ').forEach(el => {
                el.classList.toggle('hidden');
            });
        }
    }

};

keyboard.addEventListener('mousedown', function (e) {
    shiftPress = '';
    shiftCaps(e);
});

keyboard.addEventListener('mouseup', function (e) {
    shiftPress = '';
    shiftCaps(e);
});

document.onclick = function (event) {
    textarea.focus();
};

let pressBtn = '';
body.addEventListener('keydown', function (e) {

    e.preventDefault();

    if (pressBtn !== e.code) {
        if (e.code == 'CapsLock') {
            let caps = document.querySelector(`.${e.code}`);
            caps.classList.toggle('Caps');
            pressBtn = e.code;
            document.querySelectorAll('.caseUp ').forEach(el => {
                el.classList.toggle('hidden');
            });
            document.querySelectorAll('.caseDown ').forEach(el => {
                el.classList.toggle('hidden');
            });
            return;
        }
    }

    let curr = getCaretPos(textarea);
    const key = document.querySelector(`.${e.code}`);
    let width = textarea.offsetWidth;

    if (key !== null && key.textContent.trim() !== 'CapsLock') {
        key.classList.add('active');
    }


    switch (e.code) {
        case 'Backspace': {
            textarea.value = textarea.value.substring(0, curr - 1) +
                textarea.value.substring(curr, textarea.length);
            textarea.setSelectionRange(curr - 1, curr - 1);
            return;
        }
        case 'Delete': {
            textarea.value = textarea.value.substring(0, curr) +
                textarea.value.substring(curr + 1, textarea.length);
            textarea.setSelectionRange(curr, curr);
            return;
        }
        case 'ShiftLeft': {
            shiftCaps(e);
            return;
        }
        case 'ShiftRight': {
            shiftCaps(e);
            return;
        }
        case 'ArrowLeft': {
            textarea.selectionEnd = (curr - 1);
            return;
        }
        case 'ArrowRight': {
            textarea.selectionStart = (curr + 1);
            return;
        }
        case 'ArrowDown': {
            if (textarea.value.length > (width / 12.41)) {
                textarea.selectionStart = ((curr) + (Math.floor(width / 12.41)));
            }
            return;
        }
        case 'ArrowUp': {
            if (textarea.value.length > (width / 12.41) && curr > (width / 12.41)) {
                textarea.selectionEnd = ((curr) - (Math.floor(width / 12.41)));
            }
            return;
        }
        case 'Enter': {
            textarea.value = textarea.value.substring(0, curr) + '\n' +
                textarea.value.substring(curr, textarea.length);
            textarea.setSelectionRange(curr + 1, curr + 1);
            return;
        }
        case 'Tab': {
            textarea.value = textarea.value.substring(0, curr) + '\t' +
                textarea.value.substring(curr, textarea.length);
            textarea.setSelectionRange(curr + 1, curr + 1);
            return;
        }
        default: {
            if (e.code === 'ShiftLeft' || e.code === 'AltLeft' || e.code == 'ShiftRight') {
                return;
            }

            if (e.key.length === 1) {
                let aezakmi = document.querySelectorAll(`.${e.code} div span`);
                let keyCurr;
                aezakmi.forEach((el) => {
                    if (el.classList.contains('hidden')) {
                        return;
                    }
                    keyCurr = el.textContent;
                });
                textarea.value = textarea.value.substring(0, curr) + keyCurr +
                    textarea.value.substring(curr, textarea.length);
                textarea.setSelectionRange(curr + 1, curr + 1);
            }
        }
    }


});


body.addEventListener('keyup', function (e) {
    const key = document.querySelector(`.${e.code}`);
    pressBtn = '';
    shiftPress = '';
    if (key !== null) {
        key.classList.remove('active');
    }
    if (e.code == 'ShiftLeft' || e.code == 'ShiftRight') {
        document.querySelectorAll('.caseUp ').forEach(el => {
            el.classList.add('hidden');
        });
        document.querySelectorAll('.caseDown ').forEach(el => {
            el.classList.remove('hidden');
        });
    }
});


function save() {
    localStorage.setItem('test', '1');
}

function saveEng() {
    localStorage.setItem('test', '2');
}

if (localStorage.getItem('test') == 2) {
    createListWithInnerHTMLRus(numsRow, tabRow, capsRow, shiftRow, ctrlRow);
}
if (localStorage.getItem('test') == 1) {
    createListWithInnerHTML(numsRow, tabRow, capsRow, shiftRow, ctrlRow);
}


function runOnKeys(func, ...codes) {
    let pressed = new Set();

    document.addEventListener('keydown', function (event) {
        pressed.add(event.code);

        for (let code of codes) { // все ли клавиши из набора нажаты?
            if (!pressed.has(code)) {
                return;
            }
        }
        pressed.clear();
        func();

    });

    document.addEventListener('keyup', function (event) {
        pressed.delete(event.code);
    });
}

runOnKeys(
    () => {
        let keyboardKey = document.querySelector('.keyboard--key div');
        if (keyboardKey.className == 'eng') {
            createListWithInnerHTMLRus(numsRow, tabRow, capsRow, shiftRow, ctrlRow);
            saveEng();
        }
        if (keyboardKey.className == 'rus') {
            createListWithInnerHTML(numsRow, tabRow, capsRow, shiftRow, ctrlRow);
            save();
        }
    },
    "ControlLeft",
    "AltLeft"
);
