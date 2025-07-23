var slides = [
    {
        img: "./assets/slide-01.jpg",
        h3: "Women Collection 2018",
        h2: "NEW SEASON",
        link: "SHOP NOW"
    },
    {
        img: "./assets/slide-02.jpg",
        h3: "MEN NEW-SEASON",
        h2: "JACKETS & COATS",
        link: "SHOP NOW"
    },
    {
        img: "./assets/slide-03.jpg",
        h3: "Men Collection 2018",
        h2: "NEW ARRIVALS",
        link: "SHOW NOW"
    }
];

var i = 0;
var sliderRight = document.getElementById("slider-right-btn");
var sliderLeft = document.getElementById("slider-left-btn");

sliderRight.addEventListener('click', function () {
    next();
});
sliderLeft.addEventListener('click', function () {
    prev();
});

function updateSlide() {
    var hero = document.querySelector('.hero-section');
    var h3 = document.querySelector('.hero-section-content h3');
    var h2 = document.querySelector('.hero-section-content h2');
    var btn = document.querySelector('.hero-section-content a');

    hero.style.backgroundImage = 'url("' + slides[i].img + '")';
    h3.textContent = slides[i].h3;
    h2.textContent = slides[i].h2;
    btn.textContent = slides[i].link;

    var elements = [h3, h2, btn];
    for (var j = 0; j < elements.length; j++) {
        elements[j].className = '';
        elements[j].offsetHeight;
    }

    if (i === 0) {
        h3.classList.add('animated', 'fade-in-up', 'delay-1');
        h2.classList.add('animated', 'fade-in-up', 'delay-2');
        btn.classList.add('animated', 'fade-in-up', 'delay-3');
    } else if (i === 1) {
        h3.classList.add('animated', 'rotate-in-left', 'delay-1');
        h2.classList.add('animated', 'slide-in-right', 'delay-2');
        btn.classList.add('animated', 'fade-in-up', 'delay-3');
    } else if (i === 2) {
        h3.classList.add('animated', 'rotate-top-left', 'delay-1');
        h2.classList.add('animated', 'rotate-bottom-right', 'delay-2');
        btn.classList.add('animated', 'rotate-in-place', 'delay-3');
    }
}


function next() {
    i++;
    if (i >= slides.length) {
        i = 0;
    }
    updateSlide();
}

function prev() {
    i--;
    if (i < 0) {
        i = slides.length - 1;
    }
    updateSlide();
}


updateSlide();

var productReq = new XMLHttpRequest()
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar')

    if (window.scrollY >= 40) {
        navbar.classList.add('scrolled');
    }
    else {
        navbar.classList.remove('scrolled');
    }
})

productReq.open("GET", "products.JSON")
productReq.send();
console.log(productReq)
productReq.onreadystatechange = () => {
    if (productReq.status === 200 && productReq.readyState === 4) {
        var finalProducts = JSON.parse(productReq.responseText)
        console.log(finalProducts)
        for (var i = 0; i < finalProducts.products.length; i++) {
            document.querySelector(".products-list").innerHTML += `
                <div class="product-card">
                        <div class="product-img"><img src="./assets/${finalProducts.products[i].image}" alt=""></div>
                        <div class="product-details">
                            <div class="product-name">
                                <span>${finalProducts.products[i].title}</span>
                                <div class="icon-heart-container">
                                    <a>
                                        <img class="icon-heart-1" src="./assets/icon-heart-01.png.webp" alt="">
                                        <img class="icon-heart-2" src="./assets/icon-heart-02.png.webp" alt="">
                                    </a>
                                </div>
                            </div>
                            <div class="product-price">$${finalProducts.products[i].price}</div>
                        </div>
                </div>
            `
        }
    }
}
