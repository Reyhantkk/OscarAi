// Bülten formu işleme
document.getElementById('newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    
    // Burada e-posta kaydetme işlemi yapılabilir
    console.log('Abone olundu:', email);
    
    // Kullanıcıya geri bildirim
    alert('Bültenimize abone olduğunuz için teşekkür ederiz!');
    this.reset();
});

// Mobil menü için (responsive tasarım)
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.createElement('button');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '☰ Menü';
    document.querySelector('header').prepend(menuToggle);
    
    const nav = document.querySelector('nav');
    
    menuToggle.addEventListener('click', function() {
        nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
    });
    
    // Pencere boyutu değiştiğinde menüyü kontrol et
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            nav.style.display = '';
        }
    });
});