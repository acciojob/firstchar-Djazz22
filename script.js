function firstChar(inputString) {
    for (let char of inputString) {
        if (char !== ' ') {
            return char;
        }
    }
    return '';
}

function showFirstChar() {
    const inputString = document.getElementById('inputString').value;
    const result = firstChar(inputString);
    document.getElementById('result').innerText = result;
}
