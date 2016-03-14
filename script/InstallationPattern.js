"use strict"
function typeChangePolicy() {
	var typeInsurance = document.getElementById("typeInsurance");
	var pattern = definePattern(typeInsurance);
	var numberPolicy = document.getElementById("numberPolicy");
	numberPolicy.setAttribute("pattern", pattern);
}

function definePattern(type) {
	switch (type) {
		case "КАСКО":
			return "^[0][0-4][0-9][aA][tT][-][0-2][0-9][/][0-9]{5}$";
		case "ОСАГО":
			return "^[aAbBcCeExX][aAbBcCeExX][aAbBcCeExX][0-9]{10}$";
		case "ДАГО":
			return "^[0][0-4][0-9][gG][oO][-][0-2][0-9][/][0-9]{5}$";
		default:
			return "";
	}
}