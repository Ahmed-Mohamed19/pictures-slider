// get slider items | Array.from [ES6 feature]
var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));

//get no. of slides
var slidesCount = sliderImages.length;

//set current slide
var currentSlide = 1;

//slide no. element
var slideNumberElement = document.getElementById('slide-number');

//previous and next buttons
var nextButton = document.getElementById('next');
var prevButton = document.getElementById('prev');

//handle click on previous and next buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

//create main ul element
var paginationElement = document.createElement('ul');


//set id for created ul element
paginationElement.setAttribute('id', 'pagination-ul')

//create list items based on number of slides
for(var i=1; i<=slidesCount; i++){
    var paginationItem = document.createElement('li');
    paginationItem.setAttribute('data-index', i)
    paginationItem.appendChild(document.createTextNode(i))
    paginationElement.appendChild(paginationItem)
}

//Add created ul element to the page
document.getElementById('indicators').appendChild(paginationElement);

//get the created ul
var paginationCreatedUl = document.getElementById('pagination-ul')

// get pagination items | Array.from [ES6 feature]
var paginationBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

//loop over all bullets
for(var i=0; i<paginationBullets.length; i++) {
    paginationBullets[i].onclick = function()  { 
        currentSlide = parseInt(this.getAttribute('data-index'));
        checker()
    };
}

//trigger the checker function
checker();

//next slide function
function nextSlide() {
    if(nextButton.classList.contains('disabled')){
        return false
    } else {
        currentSlide++;
        checker();
    }
}

//previous slide function
function prevSlide() {
    if(prevButton.classList.contains('disabled')){
        return false
    } else {
        currentSlide-- ;
        checker();
    }
}

//create checker function
function checker() {
    //set the slide number
    slideNumberElement.textContent = 'Slide #' + (currentSlide) + ' of ' + (slidesCount);

    removeAllActive();

    //set active class on current slide
    sliderImages[currentSlide-1].classList.add('active');
    //set active class on current pagination item
    paginationCreatedUl.children[currentSlide-1].classList.add('active');
    //check if the current slide is the first
    if(currentSlide == 1){
        prevButton.classList.add('disabled');
    } else {
        prevButton.classList.remove('disabled');
    }
    //check if the current slide is the last
    if(currentSlide == slidesCount){
        nextButton.classList.add('disabled');
    } else {
        nextButton.classList.remove('disabled');
    }

}
//remove active classes from images and bullets
function removeAllActive(){
    sliderImages.forEach(function(img){
        img.classList.remove('active');
    });

    paginationBullets.forEach(function(bullet){
        bullet.classList.remove('active');
    });


}