ScrollReveal({ reset: true });

ScrollReveal().reveal('.mainText>h3', { delay: 1000 });
ScrollReveal().reveal('.mainText>h2', { delay: 1500, easing: 'ease-in-out' });

ScrollReveal().reveal('.btn1', { delay: 2000, easing: 'ease-in-out' });
ScrollReveal().reveal('.btn2', { delay: 2500, easing: 'ease-in-out' });

function myCallback(el) {
    el.classList.remove('is-animating');
    el.classList.add('is-visible');
}

ScrollReveal().reveal('.about', { afterReveal: myCallback });