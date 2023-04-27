const numsRow = [
    {
        caseDownRu: 'ё',
        caseUpRu: 'Ё',
        capsRu: 'Ё',
        shiftCapsRu: 'ё',
        caseDownEn: '`',
        caseUpEn: '~',
        capsEn: '`',
        shiftCaps: '~',
        name: 'Backquote',
    },
    {
        caseDownRu: '1',
        caseUpRu: '!',
        capsRu: '1',
        shiftCapsRu: '!',
        caseDownEn: '1',
        caseUpEn: '!',
        capsEn: '1',
        shiftCaps: '!',
        name: 'Digit1',
    },
    {
        caseDownRu: '2',
        caseUpRu: '"',
        capsRu: '2',
        shiftCapsRu: '"',
        caseDownEn: '2',
        caseUpEn: '@',
        capsEn: '2',
        shiftCaps: '@',
        name: 'Digit2',
    },
    {
        caseDownRu: '3',
        caseUpRu: '№',
        capsRu: '3',
        shiftCapsRu: '№',
        caseDownEn: '3',
        caseUpEn: '#',
        capsEn: '3',
        shiftCaps: '#',
        name: 'Digit3',
    },
    {
        caseDownRu: '4',
        caseUpRu: ';',
        capsRu: '4',
        shiftCapsRu: ';',
        caseDownEn: '4',
        caseUpEn: '$',
        capsEn: '4',
        shiftCaps: '$',
        name: 'Digit4',
    },
    {
        caseDownRu: '5',
        caseUpRu: '%',
        capsRu: '5',
        shiftCapsRu: '%',
        caseDownEn: '5',
        caseUpEn: '%',
        capsEn: '5',
        shiftCaps: '%',
        name: 'Digit5',
    },
    {
        caseDownRu: '6',
        caseUpRu: ':',
        capsRu: '6',
        shiftCapsRu: ':',
        caseDownEn: '6',
        caseUpEn: '^',
        capsEn: '6',
        shiftCaps: '^',
        name: 'Digit6',
    },
    {
        caseDownRu: '7',
        caseUpRu: '?',
        capsRu: '7',
        shiftCapsRu: '?',
        caseDownEn: '7',
        caseUpEn: '&',
        capsEn: '7',
        shiftCaps: '&',
        name: 'Digit7',
    },
    {
        caseDownRu: '8',
        caseUpRu: '*',
        capsRu: '8',
        shiftCapsRu: '*',
        caseDownEn: '8',
        caseUpEn: '*',
        capsEn: '8',
        shiftCaps: '*',
        name: 'Digit8',
    },
    {
        caseDownRu: '9',
        caseUpRu: '(',
        capsRu: '9',
        shiftCapsRu: '(',
        caseDownEn: '9',
        caseUpEn: '(',
        capsEn: '9',
        shiftCaps: '(',
        name: 'Digit9',
    },
    {
        caseDownRu: '0',
        caseUpRu: ')',
        capsRu: '0',
        shiftCapsRu: ')',
        caseDownEn: '0',
        caseUpEn: ')',
        capsEn: '0',
        shiftCaps: ')',
        name: 'Digit0',
    },
    {
        caseDownRu: '-',
        caseUpRu: '_',
        capsRu: '-',
        shiftCapsRu: '_',
        caseDownEn: '-',
        caseUpEn: '_',
        capsEn: '-',
        shiftCaps: '_',
        name: 'minus',
    },
    {
        caseDownRu: '=',
        caseUpRu: '+',
        capsRu: '=',
        shiftCapsRu: '+',
        caseDownEn: '=',
        caseUpEn: '+',
        capsEn: '=',
        shiftCaps: '+',
        name: 'equal',
    },
    {
        caseDownRu: 'Backspace',
        caseUpRu: 'Backspace',
        capsRu: 'Backspace',
        shiftCapsRu: 'Backspace',
        caseDownEn: 'Backspace',
        caseUpEn: 'Backspace',
        capsEn: 'Backspace',
        shiftCaps: 'Backspace',
        name: 'Backspace',
    },
];

const tabRow = [
    {
        caseDownRu: 'Tab',
        caseUpRu: 'Tab',
        capsRu: 'Tab',
        shiftCapsRu: 'Tab',
        caseDownEn: 'Tab',
        caseUpEn: 'Tab',
        capsEn: 'Tab',
        shiftCaps: 'Tab',
        name: 'Tab',
    },
    {
        caseDownRu: 'й',
        caseUpRu: 'Й',
        capsRu: 'Й',
        shiftCapsRu: 'й',
        caseDownEn: 'q',
        caseUpEn: 'Q',
        capsEn: 'Q',
        shiftCaps: 'q',
        name: 'KeyQ',
    },
    {
        caseDownRu: 'ц',
        caseUpRu: 'Ц',
        capsRu: 'Ц',
        shiftCapsRu: 'ц',
        caseDownEn: 'w',
        caseUpEn: 'W',
        capsEn: 'W',
        shiftCaps: 'w',
        name: 'KeyW',
    },
    {
        caseDownRu: 'у',
        caseUpRu: 'У',
        capsRu: 'У',
        shiftCapsRu: 'у',
        caseDownEn: 'e',
        caseUpEn: 'E',
        capsEn: 'E',
        shiftCaps: 'e',
        name: 'KeyE',
    },
    {
        caseDownRu: 'к',
        caseUpRu: 'К',
        capsRu: 'К',
        shiftCapsRu: 'к',
        caseDownEn: 'r',
        caseUpEn: 'R',
        capsEn: 'R',
        shiftCaps: 'r',
        name: 'KeyR',
    },
    {
        caseDownRu: 'е',
        caseUpRu: 'Е',
        capsRu: 'Е',
        shiftCapsRu: 'е',
        caseDownEn: 't',
        caseUpEn: 'T',
        capsEn: 'T',
        shiftCaps: 't',
        name: 'KeyT',
    },
    {
        caseDownRu: 'н',
        caseUpRu: 'Н',
        capsRu: 'Н',
        shiftCapsRu: 'н',
        caseDownEn: 'y',
        caseUpEn: 'Y',
        capsEn: 'Y',
        shiftCaps: 'y',
        name: 'KeyY',
    },
    {
        caseDownRu: 'г',
        caseUpRu: 'Г',
        capsRu: 'Г',
        shiftCapsRu: 'г',
        caseDownEn: 'u',
        caseUpEn: 'U',
        capsEn: 'U',
        shiftCaps: 'u',
        name: 'KeyU',
    },
    {
        caseDownRu: 'ш',
        caseUpRu: 'Ш',
        capsRu: 'Ш',
        shiftCapsRu: 'ш',
        caseDownEn: 'i',
        caseUpEn: 'I',
        capsEn: 'I',
        shiftCaps: 'i',
        name: 'KeyI',
    },
    {
        caseDownRu: 'щ',
        caseUpRu: 'Щ',
        capsRu: 'Щ',
        shiftCapsRu: 'щ',
        caseDownEn: 'o',
        caseUpEn: 'O',
        capsEn: 'O',
        shiftCaps: 'o',
        name: 'KeyO',
    },
    {
        caseDownRu: 'з',
        caseUpRu: 'З',
        capsRu: 'З',
        shiftCapsRu: 'з',
        caseDownEn: 'p',
        caseUpEn: 'P',
        capsEn: 'P',
        shiftCaps: 'p',
        name: 'KeyP',
    },
    {
        caseDownRu: 'х',
        caseUpRu: 'Х',
        capsRu: 'Х',
        shiftCapsRu: 'х',
        caseDownEn: '[',
        caseUpEn: '{',
        capsEn: '[',
        shiftCaps: '{',
        name: 'BracketLeft',
    },
    {
        caseDownRu: 'ъ',
        caseUpRu: 'Ъ',
        capsRu: 'Ъ',
        shiftCapsRu: 'ъ',
        caseDownEn: ']',
        caseUpEn: '}',
        capsEn: ']',
        shiftCaps: '}',
        name: 'BracketRight',
    },
    {
        caseDownRu: "'\'",
        caseUpRu: '/',
        capsRu: "'\'",
        shiftCapsRu: '/',
        caseDownEn: "'\'",
        caseUpEn: '|',
        capsEn: "'\'",
        shiftCaps: '|',
        name: 'Backslash',
    },
    {
        caseDownRu: 'Del',
        caseUpRu: 'Del',
        capsRu: 'Del',
        shiftCapsRu: 'Del',
        caseDownEn: 'Del',
        caseUpEn: 'Del',
        capsEn: 'Del',
        shiftCaps: 'Del',
        name: 'Delete',
    },
];

const capsRow = [
    {
        caseDownRu: 'CapsLock',
        caseUpRu: 'CapsLock',
        capsRu: 'CapsLock',
        shiftCapsRu: 'CapsLock',
        caseDownEn: 'CapsLock',
        caseUpEn: 'CapsLock',
        capsEn: 'CapsLock',
        shiftCaps: 'CapsLock',
        name: 'CapsLock',
    },
    {
        caseDownRu: 'ф',
        caseUpRu: 'Ф',
        capsRu: 'Ф',
        shiftCapsRu: 'ф',
        caseDownEn: 'a',
        caseUpEn: 'A',
        capsEn: 'A',
        shiftCaps: 'a',
        name: 'KeyA',
    },
    {
        caseDownRu: 'ы',
        caseUpRu: 'Ы',
        capsRu: 'Ы',
        shiftCapsRu: 'ы',
        caseDownEn: 's',
        caseUpEn: 'S',
        capsEn: 'S',
        shiftCaps: 's',
        name: 'KeyS',
    },
    {
        caseDownRu: 'в',
        caseUpRu: 'В',
        capsRu: 'В',
        shiftCapsRu: 'в',
        caseDownEn: 'd',
        caseUpEn: 'D',
        capsEn: 'D',
        shiftCaps: 'd',
        name: 'KeyD',
    },
    {
        caseDownRu: 'а',
        caseUpRu: 'А',
        capsRu: 'А',
        shiftCapsRu: 'а',
        caseDownEn: 'f',
        caseUpEn: 'F',
        capsEn: 'F',
        shiftCaps: 'f',
        name: 'KeyF',
    },
    {
        caseDownRu: 'п',
        caseUpRu: 'П',
        capsRu: 'П',
        shiftCapsRu: 'п',
        caseDownEn: 'g',
        caseUpEn: 'G',
        capsEn: 'G',
        shiftCaps: 'g',
        name: 'KeyG',
    },
    {
        caseDownRu: 'р',
        caseUpRu: 'Р',
        capsRu: 'Р',
        shiftCapsRu: 'р',
        caseDownEn: 'h',
        caseUpEn: 'H',
        capsEn: 'H',
        shiftCaps: 'h',
        name: 'KeyH',
    },
    {
        caseDownRu: 'о',
        caseUpRu: 'О',
        capsRu: 'О',
        shiftCapsRu: 'о',
        caseDownEn: 'j',
        caseUpEn: 'J',
        capsEn: 'J',
        shiftCaps: 'j',
        name: 'KeyJ',
    },
    {
        caseDownRu: 'л',
        caseUpRu: 'Л',
        capsRu: 'Л',
        shiftCapsRu: 'л',
        caseDownEn: 'k',
        caseUpEn: 'K',
        capsEn: 'K',
        shiftCaps: 'k',
        name: 'KeyK',
    },
    {
        caseDownRu: 'д',
        caseUpRu: 'Д',
        capsRu: 'Д',
        shiftCapsRu: 'д',
        caseDownEn: 'l',
        caseUpEn: 'L',
        capsEn: 'L',
        shiftCaps: 'l',
        name: 'KeyL',
    },
    {
        caseDownRu: 'ж',
        caseUpRu: 'Ж',
        capsRu: 'Ж',
        shiftCapsRu: 'ж',
        caseDownEn: ';',
        caseUpEn: ':',
        capsEn: ';',
        shiftCaps: ':',
        name: 'Semicolon',
    },
    {
        caseDownRu: 'э',
        caseUpRu: 'Э',
        capsRu: 'Э',
        shiftCapsRu: 'э',
        caseDownEn: "'",
        caseUpEn: '"',
        capsEn: "'",
        shiftCaps: '"',
        name: 'Quote',
    },
    {
        caseDownRu: 'Enter',
        caseUpRu: 'Enter',
        capsRu: 'Enter',
        shiftCapsRu: 'Enter',
        caseDownEn: 'Enter',
        caseUpEn: 'Enter',
        capsEn: 'Enter',
        shiftCaps: 'Enter',
        name: 'Enter',
    },
];

const shiftRow = [
    {
        caseDownRu: 'Shift',
        caseUpRu: 'Shift',
        capsRu: 'Shift',
        shiftCapsRu: 'Shift',
        caseDownEn: 'Shift',
        caseUpEn: 'Shift',
        capsEn: 'Shift',
        shiftCaps: 'Shift',
        name: 'ShiftLeft',
    },
    {
        caseDownRu: 'я',
        caseUpRu: 'Я',
        capsRu: 'Я',
        shiftCapsRu: 'я',
        caseDownEn: 'z',
        caseUpEn: 'Z',
        capsEn: 'Z',
        shiftCaps: 'z',
        name: 'KeyZ',
    },
    {
        caseDownRu: 'ч',
        caseUpRu: 'Ч',
        capsRu: 'Ч',
        shiftCapsRu: 'ч',
        caseDownEn: 'x',
        caseUpEn: 'X',
        capsEn: 'X',
        shiftCaps: 'x',
        name: 'KeyX',
    },
    {
        caseDownRu: 'с',
        caseUpRu: 'С',
        capsRu: 'С',
        shiftCapsRu: 'с',
        caseDownEn: 'c',
        caseUpEn: 'C',
        capsEn: 'C',
        shiftCaps: 'c',
        name: 'KeyC',
    },
    {
        caseDownRu: 'м',
        caseUpRu: 'М',
        capsRu: 'М',
        shiftCapsRu: 'м',
        caseDownEn: 'v',
        caseUpEn: 'V',
        capsEn: 'V',
        shiftCaps: 'v',
        name: 'KeyV',
    },
    {
        caseDownRu: 'и',
        caseUpRu: 'И',
        capsRu: 'И',
        shiftCapsRu: 'и',
        caseDownEn: 'b',
        caseUpEn: 'B',
        capsEn: 'B',
        shiftCaps: 'b',
        name: 'KeyB',
    },
    {
        caseDownRu: 'т',
        caseUpRu: 'Т',
        capsRu: 'Т',
        shiftCapsRu: 'т',
        caseDownEn: 'n',
        caseUpEn: 'N',
        capsEn: 'N',
        shiftCaps: 'n',
        name: 'KeyN',
    },
    {
        caseDownRu: 'ь',
        caseUpRu: 'Ь',
        capsRu: 'Ь',
        shiftCapsRu: 'ь',
        caseDownEn: 'm',
        caseUpEn: 'M',
        capsEn: 'M',
        shiftCaps: 'm',
        name: 'KeyM',
    },
    {
        caseDownRu: 'б',
        caseUpRu: 'Б',
        capsRu: 'Б',
        shiftCapsRu: 'б',
        caseDownEn: ',',
        caseUpEn: '<',
        capsEn: ',',
        shiftCaps: '<',
        name: 'Comma',
    },
    {
        caseDownRu: 'ю',
        caseUpRu: 'Ю',
        capsRu: 'Ю',
        shiftCapsRu: 'ю',
        caseDownEn: '.',
        caseUpEn: '>',
        capsEn: '.',
        shiftCaps: '>',
        name: 'Period',
    },
    {
        caseDownRu: '.',
        caseUpRu: ',',
        capsRu: '.',
        shiftCapsRu: ',',
        caseDownEn: '/',
        caseUpEn: '?',
        capsEn: '/',
        shiftCaps: '?',
        name: 'Slash',
    },
    {
        caseDownRu: '▲',
        caseUpRu: '▲',
        capsRu: '▲',
        shiftCapsRu: '▲',
        caseDownEn: '▲',
        caseUpEn: '▲',
        capsEn: '▲',
        shiftCaps: '▲',
        name: 'ArrowUp',
    },
    {
        caseDownRu: 'Shift',
        caseUpRu: 'Shift',
        capsRu: 'Shift',
        shiftCapsRu: 'Shift',
        caseDownEn: 'Shift',
        caseUpEn: 'Shift',
        capsEn: 'Shift',
        shiftCaps: 'Shift',
        name: 'ShiftRight',
    },
];

const ctrlRow = [
    {
        caseDownRu: 'Ctrl',
        caseUpRu: 'Ctrl',
        capsRu: 'Ctrl',
        shiftCapsRu: 'Ctrl',
        caseDownEn: 'Ctrl',
        caseUpEn: 'Ctrl',
        capsEn: 'Ctrl',
        shiftCaps: 'Ctrl',
        name: 'ControlLeft',
    },
    {
        caseDownRu: 'Win',
        caseUpRu: 'Win',
        capsRu: 'Win',
        shiftCapsRu: 'Win',
        caseDownEn: 'Win',
        caseUpEn: 'Win',
        capsEn: 'Win',
        shiftCaps: 'Win',
        name: 'MetaLeft',
    },
    {
        caseDownRu: 'Alt',
        caseUpRu: 'Alt',
        capsRu: 'Alt',
        shiftCapsRu: 'Alt',
        caseDownEn: 'Alt',
        caseUpEn: 'Alt',
        capsEn: 'Alt',
        shiftCaps: 'Alt',
        name: 'AltLeft',
    },
    {
        caseDownRu: '',
        caseUpRu: '',
        capsRu: '',
        shiftCapsRu: '',
        caseDownEn: '',
        caseUpEn: '',
        capsEn: '',
        shiftCaps: '',
        name: 'Space',
    },
    {
        caseDownRu: 'Alt',
        caseUpRu: 'Alt',
        capsRu: 'Alt',
        shiftCapsRu: 'Alt',
        caseDownEn: 'Alt',
        caseUpEn: 'Alt',
        capsEn: 'Alt',
        shiftCaps: 'Alt',
        name: 'AltRight',
    },
    {
        caseDownRu: '◄',
        caseUpRu: '◄',
        capsRu: '◄',
        shiftCapsRu: '◄',
        caseDownEn: '◄',
        caseUpEn: '◄',
        capsEn: '◄',
        shiftCaps: '◄',
        name: 'ArrowLeft',
    },
    {
        caseDownRu: '▼',
        caseUpRu: '▼',
        capsRu: '▼',
        shiftCapsRu: '▼',
        caseDownEn: '▼',
        caseUpEn: '▼',
        capsEn: '▼',
        shiftCaps: '▼',
        name: 'ArrowDown',
    },
    {
        caseDownRu: '►',
        caseUpRu: '►',
        capsRu: '►',
        shiftCapsRu: '►',
        caseDownEn: '►',
        caseUpEn: '►',
        capsEn: '►',
        shiftCaps: '►',
        name: 'ArrowRight',
    },
    {
        caseDownRu: 'Ctrl',
        caseUpRu: 'Ctrl',
        capsRu: 'Ctrl',
        shiftCapsRu: 'Ctrl',
        caseDownEn: 'Ctrl',
        caseUpEn: 'Ctrl',
        capsEn: 'Ctrl',
        shiftCaps: 'Ctrl',
        name: 'ControlRight',
    },
];
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
    // if (num.name === 'Tab' ||
    //     num.name === 'Delete' ||
    //     num.name === 'Backspace' ||
    //     num.name === 'Enter' ||
    //     num.name === 'ShiftRight' ||
    //     num.name === 'ShiftLeft' ||
    //     num.name === 'ControlLeft' ||
    //     num.name === 'MetaLeft' ||
    //     num.name === 'AltLeft' ||
    //     num.name === 'AltRight' ||
    //     num.name === 'ControlRight' ||
    //     num.name === 'CapsLock' ||
    //     num.name === 'ArrowDown' ||
    //     num.name === 'ArrowUp' ||
    //     num.name === 'ArrowRight' ||
    //     num.name === 'ArrowLeft' ||
    //     num.name === 'Space'){
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


// body.addEventListener('click', function () {
//     getCaretPos(textarea);
// });

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
    // if (e.target.textContent === "Shift") {
    //     if (keyboardKey.className == 'eng') {
    //         createListWithInnerHTMLRus(numsRow, tabRow, capsRow, shiftRow, ctrlRow);
    //     }
    //     if (keyboardKey.className == 'rus') {
    //         createListWithInnerHTML(numsRow, tabRow, capsRow, shiftRow, ctrlRow);
    //     }
    //     return;
    // }
    if (e.target.tagName === 'SPAN' && e.target.textContent.length === 1) {
        textarea.value += e.target.textContent;
        console.log(e.target)
    }
    // console.log(e.target);
});

body.addEventListener('keydown', function (e) {
    e.preventDefault();
    console.log(e.code);
    const key = document.querySelector(`.${e.code}`);
    console.log(key);
    if (key !== null) {
        key.classList.add('active');
    }
    if (e.code == 'Backspace') {
        const curr = getCaretPos(textarea);
        textarea.value = textarea.value.substring(0, curr - 1) +
            textarea.value.substring(curr, textarea.length);
        textarea.setSelectionRange(curr - 1, curr - 1);
        return;
    }
    if (e.code == 'Del') {
        const curr = getCaretPos(textarea);
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
    if (e.code === 'ArrowLeft'){
        let curr = getCaretPos(textarea);
        console.log(curr);
        textarea.selectionEnd  = (curr - 1);
    }
    if (e.code === 'ArrowRight'){
        let curr = getCaretPos(textarea);
        console.log(curr);
        textarea.selectionStart = (curr + 1);
    }
    if (e.key.length === 1) {
        textarea.value += e.key;
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
        const keyboardKey = document.querySelector('.keyboard--key div');
        if (keyboardKey.className == 'eng') {
            createListWithInnerHTMLRus(numsRow, tabRow, capsRow, shiftRow, ctrlRow);
        }
        if (keyboardKey.className == 'rus') {
            createListWithInnerHTML(numsRow, tabRow, capsRow, shiftRow, ctrlRow);
        }
    },
    "ShiftLeft",
    "AltLeft"
);