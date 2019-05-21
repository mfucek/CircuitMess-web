var time = Number(document.getElementById('carousel').getAttribute('time'));

var colors = JSON.parse(document.getElementById('carousel').getAttribute('colors'));

//get number of slides
var slides = document.getElementsByClassName('slide-element');
var slidesCount = 0;
for (let x = 0; x < slides.length; x++) {
    const element = slides[x].getAttribute('slide');
    if (element > slidesCount) {
        slidesCount = element;
    }
}

//create pagination
for (let x = 0; x <= slidesCount; x++) {
    var item = document.createElement("div");
    item.classList.add('item');
    item.setAttribute('slide', x);
    item.onclick = function() { carouselSet(x) };
    if (x == 0) {
        item.classList.add('active');
    }
    document.getElementById('carousel-pagination').appendChild(item);
}

var currentSlide = 0;
carouselUpdate();
startTimer();

//onclick force set slide
function carouselSet(slide) {
    currentSlide = slide;
    carouselUpdate();
    clearInterval(timer);
    startTimer();
}

//update carousel state
function carouselUpdate() {
    //pagination update
    var items = document.getElementsByClassName('item');
    for (let x = 0; x < items.length; x++) {
        const element = items[x];
        if (element.getAttribute('slide') == currentSlide) {
            element.classList.add('active');
        } else {
            element.classList.remove('active');
        };        
    }

    //bg update
    var items = document.getElementById('carousel').style.backgroundColor = colors[currentSlide];

    // push slides left/right
    var slides = document.getElementsByClassName('slide-element');
    for (let x = 0; x < slides.length; x++) {
        const element = slides[x];        
            
        el = element.getAttribute('elevation');
        sl = Number(element.getAttribute('slide'));        

        if (sl == currentSlide) {
            
            element.style.transform = ("translateX(0)");
        } else if (sl < currentSlide) {
            element.style.transform = ("translateX(calc(-100% - " + 80 * el + "% ))");
        } else if (sl > currentSlide) {
            element.style.transform = ("translateX(calc(100% + " + 80 * el + "% ))");
        };        
    }
}

function startTimer() {
    timer = setInterval(function(){
        // update slides counter
        currentSlide = (currentSlide + 1) % (Number(slidesCount) + 1);        

        // pagination update
        carouselUpdate();
    }, time);
}