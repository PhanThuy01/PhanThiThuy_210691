function Feedback1() {
    var firstName = document.getElementById("firstNam").value;
    var address = document.getElementById("addres").value;
    var email = document.getElementById("emaiil").value;
    var customerType = document.getElementById("customerTyype").value;
    var feedback = document.getElementById("feedback1").value;

    var feedbackInfo = "Họ và Tên: " + firstName + "\n" +
                       "Địa chỉ: " + address + "\n" +
                       "Email: " + email + "\n" +
                       "Tiêu Đề: " + customerType + "\n" +
                       "Nội dung góp ý: " + feedback;

    alert(feedbackInfo);
}
