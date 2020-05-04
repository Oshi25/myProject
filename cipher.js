let alphabet = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'];

function encrypt() {
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