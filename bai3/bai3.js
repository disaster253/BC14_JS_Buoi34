function countNum() {
	var s1 = +document.getElementById("num1").value;
	var s2 = +document.getElementById("num2").value;
	var s3 = +document.getElementById("num3").value;

	var ketQuaEL1 = document.getElementById("ketQua1");
	var ketQuaEL2 = document.getElementById("ketQua2");

	var countEven = 0;
	var countOdd = 0;

	if (s1 % 2 == 0) {
		countEven++;
	} else {
		countOdd++;
	}
	if (s2 % 2 == 0) {
		countEven++;
	} else {
		countOdd++;
	}
	if (s3 % 2 == 0) {
		countEven++;
	} else {
		countOdd++;
	}

	ketQuaEL1.innerHTML = "Tổng số chẵn là: " + countEven;
	ketQuaEL2.innerHTML = "Tổng số lẻ là: " + countOdd;
}
