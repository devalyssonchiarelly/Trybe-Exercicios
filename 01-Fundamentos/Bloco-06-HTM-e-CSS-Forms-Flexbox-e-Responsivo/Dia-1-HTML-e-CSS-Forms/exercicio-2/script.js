// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function preventATag(event) {
  event.preventDefault();
}
function preventCheckBOx(event){
  event.preventDefault();
}
function textPrevent(event) {
  event.key;
  event.preventDefault();
}

HREF_LINK.addEventListener('click', preventATag);
INPUT_CHECKBOX.addEventListener('click', preventCheckBOx);
INPUT_TEXT.addEventListener('keypress', textPrevent);