var sliderImgs = ["./assets/slide-01.jpg", "./assets/slide-02.jpg", "./assets/slide-03.jpg"]
var sliderRight = document.getElementById("slider-right-btn");
var sliderLeft = document.getElementById("slider-left-btn");
var productReq = new XMLHttpRequest()
i = 0;
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar')

    if (window.scrollY >= 40) {
        navbar.classList.add('scrolled');
    }
    else {
        navbar.classList.remove('scrolled');
    }
})

sliderRight.addEventListener('click', () => {
    next();
})
sliderLeft.addEventListener('click', () => {
    prev();
})
function next() {
    i++
    if (i >= sliderImgs.length) { i = 0 }
    document.querySelector('.hero-section').style.backgroundImage = `url("${sliderImgs[i]}")`;
}


function prev() {
    i--
    if (i < 0) {
        i = sliderImgs.length - 1
    }
    document.querySelector('.hero-section').style.backgroundImage = `url("${sliderImgs[i]}")`;

}


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
