function changeweapon() {
	document.getElementsByClassName("weapon")[0].style.display="inline";
	document.getElementsByClassName("minion spell")[0].style.display="none";
function changeminion() {
	document.getElementsByClassName("weapon spell")[0].display="none";
	document.getElementsByClassName("minion")[0].display="inline";
}
function changespell() {
	document.getElementsByClassName("minion weapon")[0].style.display="none";
	document.getElementsByClassName("spell")[0].style.display="inline";
}