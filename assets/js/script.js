// Agar saat di scroll navbar memiliki background
window.addEventListener('scroll', function() {
    const windowPosition = this.window.scrollY > 0;
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active', windowPosition)
});



// coba
// document.addEventListener('DOMContentLoaded', function() {
//     // home
//     const navHome = document.querySelector('.nav-home');
//     const screenHome = document.getElementById('home');

//     // product
//     const navProduct = document.querySelector('.nav-product');
//     const screenProduct = document.getElementById('js-produk');

//     // about
//     const navAbout = document.querySelector('.nav-about');
//     const screenAbout = document.getElementById('about');
//     window.addEventListener('scroll', function() {
//         if (window.scrollY >= screenHome.offsetTop ) {
//             navHome.classList.add('color');
//         } 
//         // else if (window.scrollY >= screenProduct.offsetTop && window.scrollY <= screenAbout.offsetTop) {
//         //     navProduct.classList.add('color');
//         // }
//         else {
//             // navProduct.classList.remove('color');
//             navHome.classList.remove('color');
//         }

//     })
// })