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

const keyChange = (num) => {
    if (num.shiftCaps !== num.caseDownRu) {
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
    }
};

const keyRuChange = (num) => {
    if (num.shiftCaps !== num.caseDownRu) {
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
    }

};

const createListWithInnerHTML = (row1, row2, row3, row4, row5) => {
    const rows1 = row1.map(key).join(' ');
    const rows2 = row2.map(key).join(' ');
    const rows3 = row3.map(key).join(' ');
    const rows4 = row4.map(key).join(' ');
    const rows5 = row5.map(key).join(' ');
    keyboardRow.innerHTML = rows1;
    keyboardRow2.innerHTML = rows2;
    keyboardRow3.innerHTML = rows3;
    keyboardRow4.innerHTML = rows4;
    keyboardRow5.innerHTML = rows5;
};

createListWithInnerHTML(numsRow, tabRow, capsRow, shiftRow, ctrlRow);


const createListWithInnerHTMLRus = (row1, row2, row3, row4, row5) => {
    const rows1 = row1.map(keyRu).join(' ');
    const rows2 = row2.map(keyRu).join(' ');
    const rows3 = row3.map(keyRu).join(' ');
    const rows4 = row4.map(keyRu).join(' ');
    const rows5 = row5.map(keyRu).join(' ');
    keyboardRow.innerHTML = rows1;
    keyboardRow2.innerHTML = rows2;
    keyboardRow3.innerHTML = rows3;
    keyboardRow4.innerHTML = rows4;
    keyboardRow5.innerHTML = rows5;
};



function getCaretPos(obj) {
    obj.focus();
    if (obj.selectionStart) return obj.selectionStart;
    // else if (document.selection) {
    //     let sel = document.selection.createRange();
    //     // let clone = sel.duplicate();
    //     sel.collapse(true);
    //     // clone.moveToElementText(obj);
    //     // clone.setEndPoint('EndToEnd', sel);
    //     // console.log(clone);
    //     // return clone.text.length;
    // }
    return 0;
}

const eng = document.querySelectorAll('.eng');
const rus = document.querySelectorAll('.rus');


keyboard.addEventListener('click', function (e) {
    const keyboardKey = document.querySelector('.keyboard--key div');
    if (e.target.textContent == 'Backspace') {
        const curr = getCaretPos(textarea);
        textarea.value = textarea.value.substring(0, curr - 1) +
            textarea.value.substring(curr, textarea.length);
        textarea.setSelectionRange(curr - 1, curr - 1);
        return;
    }
    if (e.target.textContent == 'Del') {
        const curr = getCaretPos(textarea);
        textarea.value = textarea.value.substring(0, curr) +
            textarea.value.substring(curr + 1, textarea.length);
        textarea.setSelectionRange(curr, curr);
        return;
    }
    if (e.target.textContent == 'CapsLock') {
        document.querySelector(`.${e.target.className}`).classList.add('active');
    }
    if (e.target.textContent == 'Shift'){
        console.log(document.querySelectorAll('.caseUp '));
        document.querySelectorAll('.caseUp ').forEach(el => {
            el.classList.remove('hidden');
        });
        document.querySelectorAll('.caseDown ').forEach(el => {
            el.classList.add('hidden');
        });
    }
    if (e.target.textContent == 'Enter'){
        textarea.focus();
        console.log('Enter');
        textarea.value += '\n';
    }
    if (e.target.textContent == '◄') {
        let curr = getCaretPos(textarea);
        // console.log(curr);
        textarea.selectionEnd = (curr - 1);
        return;
    }
    if (e.target.textContent == '►') {
        let curr = getCaretPos(textarea);
        textarea.selectionStart = (curr + 1);
        return;
    }
    if (e.target.textContent == '▼') {
        let width = textarea.offsetWidth;
        let curr = getCaretPos(textarea);
        console.log(textarea.offsetWidth)
        console.log(textarea.clientWidth)
        if(textarea.value.length > (width/12.41)){
            textarea.selectionStart = ((curr)+((Math.floor(width/12.41))));
        }
        return;
    }
    if (e.target.textContent == '▲') {
        let width = textarea.offsetWidth;
        let curr = getCaretPos(textarea);
        console.log(textarea.getClientRects())
        if(textarea.value.length > (width/12.41) && curr > (width/12.41)){
            textarea.selectionEnd = ((curr)-((Math.floor(width/12.41))));
        }
        return;
    }
    if (e.target.textContent == 'Tab'){
        textarea.value+= '\t';
    }
    if (e.target.tagName === 'SPAN' && e.target.textContent.length === 1) {
        textarea.value += e.target.textContent;
    }
});

document.onclick = function(event) {
    textarea.focus();
};

body.addEventListener('keydown', function (e) {
    let curr = getCaretPos(textarea);
    const key = document.querySelector(`.${e.code}`);
    if (key !== null) {
        key.classList.add('active');
    }
    if (e.code == 'Backspace') {
        textarea.value = textarea.value.substring(0, curr - 1) +
            textarea.value.substring(curr, textarea.length);
        textarea.setSelectionRange(curr - 1, curr - 1);
        return;
    }
    if (e.code == 'Del') {
        textarea.value = textarea.value.substring(0, curr) +
            textarea.value.substring(curr + 1, textarea.length);
        textarea.setSelectionRange(curr, curr);
        return;
    }
    if (e.code == 'ShiftLeft' || e.code == 'ShiftRight') {
        document.querySelectorAll('.caseUp ').forEach(el => {
            el.classList.remove('hidden');
        });
        document.querySelectorAll('.caseDown ').forEach(el => {
            el.classList.add('hidden');
        });
    }
    if (e.code === 'ShiftLeft' || e.code === 'AltLeft' || e.code == 'ShiftRight') {
        return;
    }
    if (e.code === 'ArrowLeft') {
        textarea.selectionEnd = (curr - 1);
    }
    if (e.code === 'ArrowRight') {
        textarea.selectionStart = (curr + 1);
    }
    if (e.code === 'ArrowDown') {
        let width = textarea.offsetWidth;
        let curr = getCaretPos(textarea);
        if(textarea.value.length > (width/12.41)){
            textarea.selectionStart = ((curr)+(Math.floor(width/12.41)));
        }
    }
    if (e.code === 'ArrowUp') {
        let width = textarea.offsetWidth;
        let curr = getCaretPos(textarea);
        if(textarea.value.length > (width/12.41) && curr > (width/12.41)){
            textarea.selectionEnd = ((curr)-(Math.floor(width/12.41)));
        }
    }
    if (e.code === 'Enter'){
        textarea.value = textarea.value.substring(0, curr) + '\n' +
            textarea.value.substring(curr, textarea.length);
        textarea.setSelectionRange(curr+1, curr+1);
    }
    if (e.code == 'Tab'){
        textarea.value = textarea.value.substring(0, curr) + '\t' +
            textarea.value.substring(curr, textarea.length);
        textarea.setSelectionRange(curr+1, curr+1);
    }
    if (e.key.length === 1) {
        let aezakmi = document.querySelectorAll(`.${e.code} div span`);
        let keyCurr;
        aezakmi.forEach((el)=> {
            if(el.classList.contains('hidden')){
                return;
            }
            keyCurr = el.textContent;
        });
        textarea.value = textarea.value.substring(0, curr) + keyCurr +
            textarea.value.substring(curr, textarea.length);
        textarea.setSelectionRange(curr+1, curr+1);
    }
});


body.addEventListener('keyup', function (e) {
    const key = document.querySelector(`.${e.code}`);
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


function save () {
    localStorage.setItem('test', '1');
}
function saveEng () {
    localStorage.setItem('test', '2');
}

if(localStorage.getItem('test') == 2){
    createListWithInnerHTMLRus(numsRow, tabRow, capsRow, shiftRow, ctrlRow);
}
if(localStorage.getItem('test') == 1){
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
        // setTimeout(() => {
            let keyboardKey = document.querySelector('.keyboard--key div');
            if (keyboardKey.className == 'eng') {
                createListWithInnerHTMLRus(numsRow, tabRow, capsRow, shiftRow, ctrlRow);
                saveEng();
            }
            if (keyboardKey.className == 'rus') {
                createListWithInnerHTML(numsRow, tabRow, capsRow, shiftRow, ctrlRow);
        console.log('asdasdad');
            save();
            }
        // }, 300);

    },
    "ControlLeft",
    "AltLeft"
);
