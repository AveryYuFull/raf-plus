!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n(e["raf-plus"]=e["raf-plus"]||{})}(this,function(e){"use strict";var n=new Map;e.requestAnimationFrame=function(e){if(!n.has(e)){var t=window.requestAnimationFrame(function(t){n.delete(e),e(t)});n.set(e,t)}},e.cancelAnimationFrame=function(e){var t=n.get(e);window.cancelAnimationFrame(t),n.delete(e)},Object.defineProperty(e,"__esModule",{value:!0})});
