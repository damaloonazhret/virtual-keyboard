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

const key = (num) => {
    return `
    <div class="keyboard--key key ${num.name}">
        <div class="rus hidden">
            <span class="caseDown hidden">${num.caseDownRu}</span>
            <span class="caseUp hidden">${num.caseUpRu}</span>
            <span class="caps hidden">${num.capsRu}</span>
            <span class="shiftCaps hidden">${num.shiftCapsRu}</span>
        </div>
        <div class="eng">
            <span class="caseDown">${num.caseDownEn}</span>
            <span class="caseUp hidden">${num.caseUpEn}</span>
            <span class="caps hidden">${num.capsEn}</span>
            <span class="shiftCaps hidden">${num.shiftCaps}</span>
        </div>
    </div>
    `;
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

function getCaretPos(obj) {
    obj.focus();
    if(obj.selectionStart) return obj.selectionStart;
    else if (document.selection) {
        var sel = document.selection.createRange();
        var clone = sel.duplicate();
        sel.collapse(true);
        clone.moveToElementText(obj);
        clone.setEndPoint('EndToEnd', sel);
        return clone.text.length;
    }
    return 0;
}
function cleanForm() {
    // document.getElementById('cs').value = getCaretPos(textarea);
    // console.log(getCaretPos(textarea));
    // setTimeout((cleanForm()), 100);
}

body.addEventListener('click', function () {
    getCaretPos(textarea);
});

keyboard.addEventListener('click', function (e) {
    if(e.target.textContent == 'Backspace'){
        const curr = getCaretPos(textarea);
        textarea.value = textarea.value.substring(0,curr - 1) +
                         textarea.value.substring(curr, textarea.length);
                         textarea.setSelectionRange(curr-1,curr-1);
        return;
    }
    if(e.target.textContent == 'Del'){
        const curr = getCaretPos(textarea);
        textarea.value = textarea.value.substring(0,curr ) +
                         textarea.value.substring(curr + 1, textarea.length);
                         textarea.setSelectionRange(curr,curr);
        return;
    }
    textarea.value += e.target.textContent;
});

