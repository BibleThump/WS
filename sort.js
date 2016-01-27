function changeweapon() {
	document.getElementsByClassName("weapon")[0].style.display="inline";
	document.getElementsByClassName("minion")[0].style.display="none";
	document.getElementsByClassName("spell")[0].style.display="none";
}
function changeminion() {
	document.getElementsByClassName("weapon")[0].style.display="none";
	document.getElementsByClassName("minion")[0].style.display="inline";
	document.getElementsByClassName("spell")[0].style.display="none";
}
function changespell() {
	document.getElementsByClassName("weapon")[0].style.display="none";
	document.getElementsByClassName("minion")[0].style.display="none";
	document.getElementsByClassName("spell")[0].style.display="inline";
}
function changeall() {
	document.getElementsByClassName("weapon")[0].style.display="inline";
	document.getElementsByClassName("minion")[0].style.display="inline";
	document.getElementsByClassName("spell")[0].style.display="inline";