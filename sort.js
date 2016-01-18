function changeweapon() {
	document.getElementsByClassName("weapon").style.display="inline";
	document.getElementsByClassName("minion spell").style.display="none";
function changeminion() {
	document.getElementsByClassName("weapon spell").display="none";
	document.getElementsByClassName("minion").display="inline";
}
function changespell() {
	document.getElementsByClassName("minion weapon").style.display="none";
	document.getElementsByClassName("spell").style.display="inline";
}