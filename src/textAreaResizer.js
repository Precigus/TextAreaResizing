class AreaResize {
	constructor() {
		this.minRows = 5;
		this.maxRows = 6;
		this.cols = 20;
		// this.textarea = textArea;
	}

	resizeTextArea(textarea) {
		const text = textarea.value;

		const arrayText = text.split('\n');
		let rows = arrayText.length;

		for (let text in arrayText) {
			if (arrayText.hasOwnProperty(text)) {
				rows += parseInt(arrayText[text].length / this.cols);
			}

			if (rows > this.maxRows) {
				textarea.rows = this.maxRows;
				textarea.style.overflow = 'auto';
			} else if (rows < this.minRows) {
				textarea.rows = this.minRows;
			} else {
				textarea.rows = rows;
			}
		}
	}
}

function addEventListeners() {
	const textarea = document.getElementById('resizableArea');

	let area = new AreaResize();
	window.addEventListener(
		'DOMContentLoaded',
		area.resizeTextArea(textarea),
		false
	);
	textarea.addEventListener(
		'input',
		function() {
			area.resizeTextArea(textarea);
		},
		false
	);
}

window.addEventListener('load', addEventListeners);
