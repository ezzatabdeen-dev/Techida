// BACKGROUND IMAGE
let bgImg = document.querySelectorAll('.bg-img');
bgImg.forEach((bg) => {
    let imgUrl = bg.getAttribute('bg-data-img');
    bg.style.backgroundImage = `url('${imgUrl}')`;
});

