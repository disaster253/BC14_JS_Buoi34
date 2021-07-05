function Compare() {
	var s1 = +document.getElementById("num1").value;
	var s2 = +document.getElementById("num2").value;
	var s3 = +document.getElementById("num3").value;
	var ketQuaEL = document.getElementById("ketQua");
	if (s1 >= s2 && s2 >= s3) {
		ketQuaEL.innerHTML = "Thứ tự tăng dần: " + s3 + " " + s2 + " " + s1;
	}
	else if (s1 >= s3 && s3 >= s2) {
		ketQuaEL.innerHTML = "Thứ tự tăng dần: " + s2 + " " + s3 + " " + s1;
	}
	else if (s2 >= s1 && s1 >= s3) {
		ketQuaEL.innerHTML = "Thứ tự tăng dần: " + s3 + " " + s1 + " " + s2;
	}
	else if (s2 >= s3 && s3 >= s1) {
		ketQuaEL.innerHTML = "Thứ tự tăng dần: " + s1 + " " + s3 + " " + s2;
	}
	else if (s3 >= s1 && s1 >= s2) {
		ketQuaEL.innerHTML = "Thứ tự tăng dần: " + s2 + " " + s1 + " " + s3;
	}
	else if (s3 >= s2 && s2 >= s1) {
		ketQuaEL.innerHTML = "Thứ tự tăng dần: " + s1 + " " + s2 + " " + s3;
	}
}