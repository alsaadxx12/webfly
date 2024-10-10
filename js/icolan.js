// JavaScript to switch between English and Arabic and update the flag icon
document.getElementById("enBtn").addEventListener("click", function() {
    document.documentElement.setAttribute("lang", "en");
    document.documentElement.setAttribute("dir", "ltr");
    updateTextToEnglish();
    document.getElementById("languageIcon").src = "../images/united-kingdom.png"; // تحديث الأيقونة إلى علم المملكة المتحدة
});

document.getElementById("arBtn").addEventListener("click", function() {
    document.documentElement.setAttribute("lang", "ar");
    document.documentElement.setAttribute("dir", "rtl");
    updateTextToArabic();
    document.getElementById("languageIcon").src = "../images/iraq.png"; // تحديث الأيقونة إلى علم العراق
});