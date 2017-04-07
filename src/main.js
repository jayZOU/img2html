import {img2html} from './img2html';

// function img2html(elm, renderElm, step = 2, byte = '微') {
// 	let img2html = new Imgtohtml(elm, renderElm, step, byte);
// }
window.addEventListener('load', function() {
    img2html(document.querySelector('.covert-img'), document.querySelector('.covert-html'), 2, "微");
})