function solveEquation() {
    var a = parseFloat(document.getElementById("inputA").value);
    var b = parseFloat(document.getElementById("inputB").value);
    var resultElement = document.getElementById("result");
    
    if (isNaN(a) || isNaN(b)) {
        resultElement.textContent = "Vui lòng nhập hệ số hợp lệ.";
    } else if (a === 0) {
        resultElement.textContent = "Phương trình không phải là phương trình bậc 1.";
    } else {
        var x = -b / a;
        resultElement.textContent = "Nghiệm của phương trình là: x = " + x.toFixed(2);
    }
}
