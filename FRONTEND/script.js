// ========== ПОЛНЫЙ РАБОЧИЙ SCRIPT.JS ==========
document.addEventListener('DOMContentLoaded', function() {


    
    
    updateCartCount();
    
    const cartBtn = document.querySelector('.cart-btn-real');
    if (cartBtn) {
        cartBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'cart.html';
        });
    }
    
});
// ========== КОРЗИНА ==========
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const totalItems = cart.length;
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        cartCount.textContent = totalItems;
    }
}
    