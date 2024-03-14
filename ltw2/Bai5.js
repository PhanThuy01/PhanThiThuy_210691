<script>
    function showPassword() {
        var passwordInput = document.getElementById("password");
        var wantToShowPassword = confirm("Bạn muốn hiện mật khẩu?");
        if (wantToShowPassword) {
            alert("Mật khẩu của bạn là: " + passwordInput.value);
        }
    }
</script>
