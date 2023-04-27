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