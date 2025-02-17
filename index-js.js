document.addEventListener('DOMContentLoaded', () => {
    const text = "ค้นหาตัวละครซุปเปอร์ฮีโร่คุณต้องการ...";
    const searchInput = document.querySelector('.search-input');
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            searchInput.setAttribute('placeholder', text.substring(0, index + 1));
            index++;
            setTimeout(typeEffect, 50);
        }
    }

    typeEffect();
});


const searchButton = document.querySelector('.search-button');

searchButton.addEventListener('mouseover', () => {
    gsap.to(searchButton, { scale: 1.2, duration: 0.3, ease: "power1.inOut" });
});

searchButton.addEventListener('mouseout', () => {
    gsap.to(searchButton, { scale: 1, duration: 0.3, ease: "power1.inOut" });
});