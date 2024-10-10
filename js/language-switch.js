// JavaScript to switch between English and Arabic
document.getElementById("enBtn").addEventListener("click", function() {
    document.documentElement.setAttribute("lang", "en");
    document.documentElement.setAttribute("dir", "ltr");
    updateTextToEnglish();
});

document.getElementById("arBtn").addEventListener("click", function() {
    document.documentElement.setAttribute("lang", "ar");
    document.documentElement.setAttribute("dir", "rtl");
    updateTextToArabic();
});

function updateTextToEnglish() {
    // Update Login Form Text
    document.getElementById("login-instructions").textContent = "Please enter your Login and your Password";
    document.getElementById("username").placeholder = "Username or Email";
    document.getElementById("password").placeholder = "Password";
    document.getElementById("phone").placeholder = "Phone Number";
    document.getElementById("email").placeholder = "Email";
    document.getElementById("login-btn").textContent = "Login";
    document.getElementById("signup-btn").textContent = "Create an Account";
    document.getElementById("back-btn").textContent = "Back to Login";
}

function updateTextToArabic() {
    // Update Login Form Text
    document.getElementById("login-instructions").textContent = "يرجى إدخال اسم المستخدم أو البريد الإلكتروني وكلمة المرور";
    document.getElementById("username").placeholder = "اسم المستخدم أو البريد الإلكتروني";
    document.getElementById("password").placeholder = "كلمة المرور";
    document.getElementById("phone").placeholder = "رقم الهاتف";
    document.getElementById("email").placeholder = "البريد الإلكتروني";
    document.getElementById("login-btn").textContent = "تسجيل الدخول";
    document.getElementById("signup-btn").textContent = "إنشاء حساب";
    document.getElementById("back-btn").textContent = "العودة إلى تسجيل الدخول";
}
