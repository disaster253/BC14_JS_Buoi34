function calculate() {
	var c1 = +document.getElementById("a").value;
	var c2 = +document.getElementById("b").value;
	var c3 = +document.getElementById("c").value;
	var ketquaEL = document.getElementById("ketQua");
	if (c1 == c2 && c2 == c3) {
		ketquaEL.innerHTML = "Tam giác đều";
	} else if (((c1 ** 2 + c2 ** 2) == c3 ** 2) || ((c2 ** 2 + c3 ** 2) == c1 ** 2) || ((c3 ** 2 + c1 ** 2) == c2 ** 2)) {
		ketquaEL.innerHTML = "Tam giác vuông";
	} else if ((c1 == c2) || (c2 == c3) || (c3 == c1)) {
		ketquaEL.innerHTML = "Tam giác cân";
	} else {
		ketquaEL.innerHTML = "Error";
	}
}