


gsap.to(".bsearch", {
    boxShadow: "0 0 10px rgb(255, 187, 0), 0 0 100px rgba(255, 174, 0, 0.5)",
    repeat: -1,
    yoyo: true,
    duration: 1.5,
    ease: "power2.inOut"
});


  

/* ทำให้ประกายไฟหมุนรอบปุ่ม */
gsap.to(".bsearch::after", {
    x: 50,
    yoyo: true,
    repeat: -1,
    duration: 0.3,
    ease: "sine.inOut"
});


  
  gsap.from(".avengers", {
    x: 100,
    opacity: 0,
    duration: 1.5,
    ease: "power3.out",
    delay: 0.8
  });
  // document.querySelector(".avengers").addEventListener("mouseenter", () => {
  //   gsap.to(".avengers", {
  //     scale: 1.2,
  //     rotation: 10,
  //     duration: 0.5,
  //     ease: "elastic.out(1, 0.3)"
  //   });
  // });

  // document.querySelector(".avengers").addEventListener("mouseleave", () => {
  //   gsap.to(".avengers", {
  //     scale: 1,
  //     rotation: 0,
  //     duration: 1,
  //     ease: "elastic.out(1, 0.3)"
  //   });
  // });
  gsap.from(".logocon", {
    x: -100,
    opacity: 0,
    duration: 1.5,
    ease: "power3.out",
    delay: 0.8
  });

  gsap.from(".contentp", {
    x: -500,
    opacity: 0,
    duration: 1.5,
    ease: "power3.out",
    delay: 0.8
  });
  

const text = "อยากค้นหาข้อมูลซุปเปอร์ฮีโร่ไม่รู้จะหาเว็บไหนดี?";
let i = 0;

function typeEffect() {
    let target = document.querySelector(".contenth2");
    target.textContent = text.substring(0, i); // รีเซ็ตข้อความให้พิมพ์ขึ้นมาใหม่
    i++;

    if (i <= text.length) {
        setTimeout(typeEffect, 50); // ปรับความเร็วพิมพ์
    }
}

window.onload = typeEffect;

window.onload = typeEffect;
  


gsap.from(".contenth2", {
    y: -50,
    opacity: 0,
    duration: 1,
    ease: "bounce.out"
});
gsap.from(".contentp", {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "bounce.out"
});