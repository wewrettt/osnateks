// ========== ПОЛНЫЙ РАБОЧИЙ SCRIPT.JS ==========
document.addEventListener('DOMContentLoaded', function() {
    console.log('script.js загружен!'); // Проверка, что скрипт работает
    
    // ========== СОЗДАЕМ МОДАЛЬНОЕ ОКНО ==========
    if (!document.getElementById('loginModal')) {
        const modalHTML = `
            <div id="loginModal" class="login-modal">
                <div class="login-modal-content">
                    <span class="login-close">&times;</span>
                    <div id="loginForm" class="login-auth-form active">
                        <h3>Вход в аккаунт</h3>
                        <input type="email" id="loginEmail" placeholder="Email" class="login-auth-input">
                        <input type="password" id="loginPassword" placeholder="Пароль" class="login-auth-input">
                        <button id="doLogin" class="login-auth-btn">Войти</button>
                        <p class="login-auth-switch">Нет аккаунта? <a href="#" id="showSignup">Зарегистрироваться</a></p>
                    </div>
                    <div id="signupForm" class="login-auth-form">
                        <h3>Регистрация</h3>
                        <input type="text" id="signupName" placeholder="Имя" class="login-auth-input">
                        <input type="email" id="signupEmail" placeholder="Email" class="login-auth-input">
                        <input type="password" id="signupPassword" placeholder="Пароль" class="login-auth-input">
                        <button id="doSignup" class="login-auth-btn">Зарегистрироваться</button>
                        <p class="login-auth-switch">Уже есть аккаунт? <a href="#" id="showLogin">Войти</a></p>
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        console.log('Модальное окно создано');
    }
    
    // ========== ОТКРЫТИЕ МОДАЛЬНОГО ОКНА ==========
    const userLink = document.querySelector('.user-link');
    const loginModal = document.getElementById('loginModal');
    
    console.log('userLink найден:', userLink); // Проверка, что ссылка найдена
    
    if (userLink) {
        userLink.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Клик по userLink'); // Проверка, что клик сработал
            if (loginModal) {
                loginModal.style.display = 'flex';
                console.log('Модальное окно открыто');
            } else {
                console.log('loginModal не найден');
            }
        });
    } else {
        console.log('userLink НЕ найден! Проверьте класс .user-link');
    }
    
    // ========== ЗАКРЫТИЕ МОДАЛЬНОГО ОКНА ==========
    const loginClose = document.querySelector('.login-close');
    if (loginClose) {
        loginClose.addEventListener('click', function() {
            if (loginModal) loginModal.style.display = 'none';
        });
    }
    
    window.addEventListener('click', function(e) {
        if (e.target === loginModal) {
            loginModal.style.display = 'none';
        }
    });
    
    // ========== ПЕРЕКЛЮЧЕНИЕ ФОРМ ==========
    const showSignup = document.getElementById('showSignup');
    const showLogin = document.getElementById('showLogin');
    const loginFormDiv = document.getElementById('loginForm');
    const signupFormDiv = document.getElementById('signupForm');
    
    if (showSignup) {
        showSignup.addEventListener('click', function(e) {
            e.preventDefault();
            if (loginFormDiv) loginFormDiv.classList.remove('active');
            if (signupFormDiv) signupFormDiv.classList.add('active');
        });
    }
    
    if (showLogin) {
        showLogin.addEventListener('click', function(e) {
            e.preventDefault();
            if (signupFormDiv) signupFormDiv.classList.remove('active');
            if (loginFormDiv) loginFormDiv.classList.add('active');
        });
    }
    
    // ========== РЕГИСТРАЦИЯ ==========
    const doSignup = document.getElementById('doSignup');
    if (doSignup) {
        doSignup.addEventListener('click', function() {
            const name = document.getElementById('signupName')?.value;
            const email = document.getElementById('signupEmail')?.value;
            const password = document.getElementById('signupPassword')?.value;
            
            if (name && email && password) {
                let users = JSON.parse(localStorage.getItem('users') || '[]');
                const userExists = users.find(u => u.email === email);
                
                if (userExists) {
                    alert('Пользователь с таким email уже существует');
                } else {
                    users.push({ name, email, password });
                    localStorage.setItem('users', JSON.stringify(users));
                    alert('Регистрация прошла успешно! Теперь войдите');
                    if (signupFormDiv) signupFormDiv.classList.remove('active');
                    if (loginFormDiv) loginFormDiv.classList.add('active');
                    document.getElementById('signupName').value = '';
                    document.getElementById('signupEmail').value = '';
                    document.getElementById('signupPassword').value = '';
                }
            } else {
                alert('Заполните все поля');
            }
        });
    }
    
    // ========== ВХОД ==========
    const doLogin = document.getElementById('doLogin');
    if (doLogin) {
        doLogin.addEventListener('click', function() {
            const email = document.getElementById('loginEmail')?.value;
            const password = document.getElementById('loginPassword')?.value;
            
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            const user = users.find(u => u.email === email && u.password === password);
            
            if (user) {
                localStorage.setItem('currentUser', JSON.stringify(user));
                alert(`Добро пожаловать, ${user.name}!`);
                if (loginModal) loginModal.style.display = 'none';
                updateProfileIcon(user.name);
                document.getElementById('loginEmail').value = '';
                document.getElementById('loginPassword').value = '';
            } else {
                alert('Неверный email или пароль');
            }
        });
    }
    
    // ========== ОБНОВЛЕНИЕ ИКОНКИ ==========
    function updateProfileIcon(userName) {
        const userLink = document.querySelector('.user-link');
        if (userLink && userName) {
            const svg = userLink.querySelector('svg');
            userLink.innerHTML = '';
            if (svg) userLink.appendChild(svg);
            userLink.insertAdjacentHTML('beforeend', `<span style="font-size:12px; margin-left:5px;">${userName}</span>`);
        }
    }
    
    // ========== ПРОВЕРКА СОХРАНЕННОГО ПОЛЬЗОВАТЕЛЯ ==========
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
        updateProfileIcon(currentUser.name);
    }
    
    // ========== ВЫХОД (ДВОЙНОЙ КЛИК) ==========
    if (userLink) {
        userLink.addEventListener('dblclick', function(e) {
            e.preventDefault();
            localStorage.removeItem('currentUser');
            location.reload();
        });
    }
    
    // ========== КОРЗИНА ==========
    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        const cartCount = document.querySelector('.cart-count');
        if (cartCount) {
            cartCount.textContent = totalItems;
        }
    }
    
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const id = this.dataset.id;
            const name = this.dataset.name;
            const price = parseInt(this.dataset.price);
            let cart = JSON.parse(localStorage.getItem('cart') || '[]');
            const existingItem = cart.find(item => item.id === id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ id, name, price, quantity: 1 });
            }
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCount();
            alert(`${name} добавлен в корзину`);
        });
    });
    
    updateCartCount();
    
    const cartBtn = document.querySelector('.cart-btn-real');
    if (cartBtn) {
        cartBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'cart.html';
        });
    }
    
});