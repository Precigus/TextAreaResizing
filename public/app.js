"use strict";

var minRows = 3,
    maxRows = 6,
    cols = 20;
var textarea = document.querySelector('textarea');

function resizeTextArea(field) {
  var text = field.value;
  var arrayText = text.split('\n');
  var rows = arrayText.length;

  for (var _text in arrayText) {
    if (arrayText.hasOwnProperty(_text)) {
      rows += parseInt(arrayText[_text].length / cols);
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
  var textbox = document.querySelector('textarea');
  textbox.rows = minRows;
  textbox.cols = cols;
} // document.addEventListener('DOMContentLoaded', initialize());
// textarea.addEventListener('keydown', resizeTextArea(this));