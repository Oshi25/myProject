let alphabet = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'];

function encript() {
	let selectValue = document.getElementById('cipher-select').value;
	
	switch (selectValue) {
		case '1':
			caesar();
			break;
		case '2':
			vigenere();
			break;
	}
}

function caesar() {
	let sourceText = document.getElementById('source-text').value;
	let cipherText = '';
	
	for (let i = 0; i < sourceText.length; i++) {
		let letterIndex = alphabet.indexOf(sourceText[i]);
		if (letterIndex === -1) {
			cipherText += ' ';
			continue;
		}
		if (letterIndex === 32) {
			letterIndex = -1;
		}
		
		cipherText += alphabet[letterIndex + 1];
	}
	document.getElementById('cipher-text').textContent = cipherText;
}

function vigenere() {
	let sourceText = document.getElementById('source-text').value;
	let key = document.getElementById('visibleInput').value;
	
	let cipherText = '';
	
	key = key.repeat(Math.ceil(sourceText.length / key.length));
	key = key.substr(0, sourceText.length);
	
	for (let i = 0; i < sourceText.length; i++) {
		let sourceLetterIndex = alphabet.indexOf(sourceText[i]) + 1;
		let keyLetterIndex = alphabet.indexOf(key[i]) + 1;
		
		let letterIndex = sourceLetterIndex + keyLetterIndex;
		if (letterIndex > 33) {
			letterIndex -= 33;
		}
		cipherText += alphabet[letterIndex - 1];
	}
	
	document.getElementById('cipher-text').textContent = cipherText;
}

function showKey() {
	let selected = document.getElementById('cipher-select').value;
	switch (selected) {
		case '1':
			hide();
			break;
		case '2':
			show();
			break;
	}
}

function hide() {
	document.getElementById('visibleLabel').hidden = true;
}

function show() {
	document.getElementById('visibleLabel').hidden = false;
}

