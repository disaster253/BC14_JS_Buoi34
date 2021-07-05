var ketQuaEL = document.getElementById("ketQua");
function checkName() {
	var peo = document.getElementById("people").value;
	switch (peo) {
		case 'B', 'b':
			ketQuaEL.innerHTML = "Chào Bố";
			break;
		case 'M', 'm':
			ketQuaEL.innerHTML = "Chào Mẹ";
			break;
		case 'A', 'a':
			ketQuaEL.innerHTML = "Chào Anh trai";
			break;
		case 'E', 'e':
			ketQuaEL.innerHTML = "Chào Em gái";
			break;
		default:
			ketQuaEL.innerHTML = "Bạn đã nhập sai cú pháp"
			break;
	}
}