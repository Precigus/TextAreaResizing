const minRows = 3,
	maxRows = 6,
	cols = 20;

const textarea = document.querySelector('textarea');

function resizeTextArea(field) {
	const text = field.value;

	const arrayText = text.split('\n');
	let rows = arrayText.length;

	for (let text in arrayText) {
		if (arrayText.hasOwnProperty(text)) {
			rows += parseInt(arrayText[text].length / cols);
		}

		if (rows > maxRows) {
			field.rows = maxRows;
			field.style.overflow = 'auto';
		} else if (rows < minRows) {
			field.rows = minRows;
		} else {
			field.rows = rows;
		}
	}
}

function initialize() {
	let textbox = document.querySelector('textarea');
	textbox.rows = minRows;
	textbox.cols = cols;
}
