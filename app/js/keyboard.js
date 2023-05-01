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
const description = document.createElement('p');
const language = document.createElement('p');

header.innerText = 'RSS Виртуальная клавиатура';
description.innerText = 'Клавиатура создана в ОС Windows 10';
language.innerText = 'Переключения языка осуществляется комбинацией: левыe ctrl + alt';
header.className = 'header';
language.className = 'language';
textarea.className = 'textarea';
keyboard.className = 'keyboard';
description.className = 'description';
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
main.appendChild(description);
main.appendChild(language);
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
            textarea.value += '\n';
            textarea.focus();
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
            textarea.value = textarea.value.substring(0, curr) + '\t' +
                textarea.value.substring(curr, textarea.length);
            textarea.setSelectionRange(curr + 1, curr + 1);
            return;
        }

        case 'CapsLock': {
            //
            shiftPress = '';
            let caps = document.querySelector(`.${e.target.textContent.trim()}`);
            caps.classList.toggle('Caps');
            // pressBtn = e.code;
            shiftCaps(e);
            return;
        }

        default: {
            if (e.target.tagName === 'SPAN' && e.target.textContent.length == 1) {
                textarea.value = textarea.value.substring(0, curr) + e.target.textContent.trim() +
                    textarea.value.substring(curr, textarea.length);
                textarea.setSelectionRange(curr + 1, curr + 1);
            }

            if (e.target.className.substring(18) == 'Space') {
                textarea.value = textarea.value.substring(0, curr) + ' ' +
                    textarea.value.substring(curr, textarea.length);
                textarea.setSelectionRange(curr + 1, curr + 1);
                return;
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
            e.code == 'ShiftRight' ||
            e.code == 'CapsLock' ||
            e.target.textContent.trim() == 'CapsLock') {

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

    if (e.target.textContent.trim() == 'Shift') {
        shiftPress = '';
        shiftCaps(e);
    }

});

keyboard.addEventListener('mouseup', function (e) {

    if (e.target.textContent.trim() == 'Shift') {
        shiftPress = '';
        shiftCaps(e);
    }

});

document.onclick = function (event) {

    textarea.focus();

};

let pressBtn = '';
let pressedKey = {};


body.addEventListener('keydown', function (e) {

    if (pressedKey[e.code]) return;
    pressedKey[e.code] = true;

});




body.addEventListener('keydown', function (e) {

    e.preventDefault();

    if (e.key == 'AudioVolumeMute' ||
        e.key == 'AudioVolumeDown' ||
        e.key == 'AudioVolumeUp' ||
        e.key == 'LaunchApplication2'
    ) {
        return;
    }

    if (pressBtn !== e.code) {

        if (e.code == 'CapsLock') {
            let caps = document.querySelector(`.${e.code}`);
            caps.classList.toggle('Caps');
            pressBtn = e.code;
            shiftCaps(e);
            return;
        }
        if (e.code == 'ControlLeft') {
            let controlLeft = document.querySelector(`.${e.code}`);
            controlLeft.classList.add('change');
            controlLeft.classList.add('active');
            pressBtn = e.code;
            return;
        }
        if (e.code == 'AltLeft') {
            let altLeft = document.querySelector(`.${e.code}`);
            altLeft.classList.add('change');
            altLeft.classList.add('active');
            pressBtn = e.code;
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

        case 'Space': {
            textarea.value = textarea.value.substring(0, curr) + ' ' +
                textarea.value.substring(curr, textarea.length);
            textarea.setSelectionRange(curr + 1, curr + 1);
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

            if (e.code === 'AltLeft' || e.code.substring(0, 3) == 'Num') {
                return;
            }

            if (e.key.length === 1) {

                let currentKeys = document.querySelectorAll(`.${e.code} div span`);
                let keyCurr;

                currentKeys.forEach((el) => {
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

    if (e.key == 'AudioVolumeMute' ||
        e.key == 'AudioVolumeDown' ||
        e.key == 'AudioVolumeUp' ||
        e.key == 'LaunchApplication2'
    ) {
        return;
    }

    const key = document.querySelector(`.${e.code}`);

    pressBtn = '';
    shiftPress = '';

    if (e.code == 'ShiftLeft' || e.code == 'ShiftRight') {

        shiftCaps(e);
        shiftPress = '';

    }


    if (pressedKey.ControlLeft && pressedKey.AltLeft) {

        let keyboardKey = document.querySelector('.keyboard--key div');

        if (keyboardKey.className == 'eng') {
            createListWithInnerHTMLRus(numsRow, tabRow, capsRow, shiftRow, ctrlRow);
            saveEng();
        }

        if (keyboardKey.className == 'rus') {
            createListWithInnerHTML(numsRow, tabRow, capsRow, shiftRow, ctrlRow);
            save();
        }
    }


    if (pressedKey.ControlLeft && pressedKey.AltLeft) {

        let controlLeft = document.querySelector('.ControlLeft');
        let altLeft = document.querySelector('.AltLeft');
        controlLeft.classList.remove('change');
        controlLeft.classList.remove('active');
        altLeft.classList.remove('change');
        altLeft.classList.remove('active');
        pressedKey.ControlLeft = false;
        pressedKey.AltLeft = false;
        pressBtn = '';
        return;

    }

    if (key !== null) {

        key.classList.remove('active');
        key.classList.remove('change');
        pressedKey.ControlLeft = false;
        pressedKey.AltLeft = false;

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