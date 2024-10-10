// إظهار صفحة إنشاء حساب وإخفاء تسجيل الدخول
document.getElementById('signup-btn').addEventListener('click', function() {
    document.getElementById('phoneField').style.display = 'block';
    document.getElementById('emailField').style.display = 'block';
    document.getElementById('login-btn').textContent = 'Sign Up';
    document.getElementById('signup-btn').style.display = 'none';
    document.getElementById('back-btn').style.display = 'inline-block';

    // إخفاء رسالة الخطأ عند الانتقال إلى واجهة إنشاء الحساب
    const messageContainer = document.getElementById('message-container');
    messageContainer.textContent = '';
    messageContainer.classList.remove('show', 'error', 'success');
});

// العودة إلى صفحة تسجيل الدخول
document.getElementById('back-btn').addEventListener('click', function() {
    document.getElementById('phoneField').style.display = 'none';
    document.getElementById('emailField').style.display = 'none';
    document.getElementById('login-btn').textContent = 'Login';
    document.getElementById('signup-btn').style.display = 'inline-block';
    document.getElementById('back-btn').style.display = 'none';

    // إخفاء رسالة الخطأ عند العودة إلى واجهة تسجيل الدخول
    const messageContainer = document.getElementById('message-container');
    messageContainer.textContent = '';
    messageContainer.classList.remove('show', 'error', 'success');
});

// تسجيل الدخول أو إنشاء الحساب بناءً على الزر الحالي
document.getElementById('login-btn').addEventListener('click', async (e) => {
    e.preventDefault();
    const email = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageContainer = document.getElementById('message-container');
    messageContainer.textContent = ''; // تفريغ الرسالة السابقة
    messageContainer.classList.remove('show', 'error', 'success'); // إزالة الفئات السابقة

    if (document.getElementById('login-btn').textContent === 'Login') {
        // تسجيل الدخول
        try {
            await auth.signInWithEmailAndPassword(email, password);
            messageContainer.textContent = 'Logged in successfully!';
            messageContainer.classList.add('show', 'success'); // عرض رسالة النجاح
            document.getElementById('form').reset(); // تفريغ الحقول
        } catch (error) {
            messageContainer.textContent = 'Incorrect email or password. Please try again.';
            messageContainer.classList.add('show', 'error'); // عرض رسالة الخطأ
            console.error('Error logging in:', error);
        }
    } else {
        // إنشاء حساب
        const username = document.getElementById('username').value;
        const mobile = document.getElementById('phone').value;
        const email = document.getElementById('email').value;

        if (username && email && password && mobile) {
            try {
                const userCredential = await auth.createUserWithEmailAndPassword(email, password);
                const user = userCredential.user;

                // حفظ بيانات المستخدم في Realtime Database
                await db.ref('users/' + user.uid).set({
                    username: username,
                    email: email,
                    mobile: mobile,
                    createdAt: new Date().toISOString()
                });

                messageContainer.textContent = 'Account created successfully!';
                messageContainer.classList.add('show', 'success'); // عرض رسالة النجاح
                document.getElementById('form').reset(); // تفريغ الحقول
            } catch (error) {
                messageContainer.textContent = 'Error creating account. Please try again.';
                messageContainer.classList.add('show', 'error'); // عرض رسالة الخطأ
                console.error('Error creating account:', error);
            }
        } else {
            messageContainer.textContent = 'Please fill out all fields.';
            messageContainer.classList.add('show', 'error'); // عرض رسالة الخطأ
        }
    }
});

// التحكم في الخلفية عند الانتقال بين تسجيل الدخول وإنشاء حساب
document.getElementById('signup-btn').addEventListener('click', function() {
    document.body.style.backgroundImage = "url('https://cdn.infra.luxota.cloud//files/20240702/nb6e8a7cca5e9535dd0e/file.png')";
    document.body.style.transform = "scale(1.02)"; // تكبير خفيف للأنميشن
    setTimeout(() => {
        document.body.style.transform = "scale(1)"; // العودة للحجم الطبيعي بعد التبديل
    }, 1500);

    document.getElementById('phoneField').style.display = 'block';
    document.getElementById('emailField').style.display = 'block';
    document.getElementById('login-btn').textContent = 'Sign Up';
    document.getElementById('signup-btn').style.display = 'none';
    document.getElementById('back-btn').style.display = 'inline-block';

    // إخفاء رسالة الخطأ عند الانتقال إلى واجهة إنشاء الحساب
    const errorMessageDiv = document.getElementById('message-container');
    errorMessageDiv.textContent = '';
    errorMessageDiv.classList.remove('show', 'error', 'success');
});

// العودة إلى صفحة تسجيل الدخول واستعادة الخلفية القديمة
document.getElementById('back-btn').addEventListener('click', function() {
    document.body.style.backgroundImage = "url('https://cdn.infra.luxota.cloud/files/20240630/249a5123473fc7170f59/file.png')";
    document.body.style.transform = "scale(1.02)"; // تكبير خفيف للأنميشن
    setTimeout(() => {
        document.body.style.transform = "scale(1)"; // العودة للحجم الطبيعي بعد التبديل
    }, 1500);

    document.getElementById('phoneField').style.display = 'none';
    document.getElementById('emailField').style.display = 'none';
    document.getElementById('login-btn').textContent = 'Login';
    document.getElementById('signup-btn').style.display = 'inline-block';
    document.getElementById('back-btn').style.display = 'none';

    // إخفاء رسالة الخطأ عند العودة إلى واجهة تسجيل الدخول
    const errorMessageDiv = document.getElementById('message-container');
    errorMessageDiv.textContent = '';
    errorMessageDiv.classList.remove('show', 'error', 'success');
});
