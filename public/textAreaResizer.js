"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AreaResize =
/*#__PURE__*/
function () {
  function AreaResize() {
    _classCallCheck(this, AreaResize);

    this.minRows = 5;
    this.maxRows = 6;
    this.cols = 20; // this.textarea = textArea;
  }

  _createClass(AreaResize, [{
    key: "resizeTextArea",
    value: function resizeTextArea(textarea) {
      var text = textarea.value;
      var arrayText = text.split('\n');
      var rows = arrayText.length;

      for (var _text in arrayText) {
        if (arrayText.hasOwnProperty(_text)) {
          rows += parseInt(arrayText[_text].length / this.cols);
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
  }]);

  return AreaResize;
}();

function addEventListeners() {
  var textarea = document.getElementById('resizableArea');
  var area = new AreaResize();
  window.addEventListener('DOMContentLoaded', area.resizeTextArea(textarea), false);
  textarea.addEventListener('input', function () {
    area.resizeTextArea(textarea);
  }, false);
}

window.addEventListener('load', addEventListeners);
