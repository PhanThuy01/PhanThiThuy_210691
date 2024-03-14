function displayFeedback() {
    // Lấy giá trị từ các trường input
    var firstName = document.getElementById('firstName').value;
    var cardNumber = document.getElementById('cardNumber').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var email = document.getElementById('email').value;
    var customerType = document.getElementById('customerType').value;
    var contractCode = document.getElementById('contractCode').value;
    var feedback = document.getElementById('feedback').value;

    // Tạo thông điệp hiển thị trong alert
    var message = "Họ và tên: " + firstName + "\n" +
                  "Mã thẻ: " + cardNumber + "\n" +
                  "Số điện thoại: " + phoneNumber + "\n" +
                  "Email: " + email + "\n" +
                  "Loại khách hàng: " + customerType + "\n" +
                  "Mã hợp đồng: " + contractCode + "\n" +
                  "Nội dung góp ý: " + feedback;

    // Hiển thị thông điệp trong alert
    alert(message);
}
