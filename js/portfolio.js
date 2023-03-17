//This function opens and closes the contact form
function openForm(){
  
    document.getElementById("myForm").style.display="block";
}

function closeForm(){
    document.getElementById("myForm").style.display="none";
}
//This function display the first image in the slideshow
var slideIndex=1;
showSlides(slideIndex);

//This function changes the slide when the arrows are clicked
function plusSlides(n){
    showSlides(slideIndex +=n);
}

//This function changes the slide when the dots are clicked
function currentSlide(n){
    showSlides(slideIndex=n);
}

function showSlides(n){
    var slides=document.getElementsByClassName("mySlides");
    var dots =document.getElementsByClassName("dot");
    if (n>slides.length){slideIndex=1};
    if (n<1){slideIndex=slides.length};
     for(i=0; i<slides.length;i++){
        slides[i].style.display="none";
     }
     for (i=0; i<dots.length;i++){
        dots[i].className=dots[i].className.replace(" active", "");//THis for loog pake each item in the array "dots" and removes the "active" which remove the active styling
     }
     slides[slideIndex-1].style.display="block";//This displayes the image in the slideshow
     dots[slideIndex-1].className +=" active";
}
 // This code will create close the contact form when the user clicks off of it
// The first step is to add an event listener for any clicks on the website
document.addEventListener("click", function(event){
    // Here we state that if the click happens on the cancel button OR anywhere that is not the contact form AND the click does not happen on any element with the contact class then call the closeForm() function
    if (event.target.matches(".cancel") || !event.target.closest(".form-popup") && !event.target.closest(".Pop_Up_Button") && !event.target.closest(".contact")){
        closeForm()
    }
}, false )