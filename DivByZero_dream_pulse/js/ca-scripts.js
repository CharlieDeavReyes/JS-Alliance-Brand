var customerName = "Alliance  ";


function addCustomerName() {

    let title = document.getElementById('title')
    title.textContent = customerName;
    
    // <h1 id="tm-header" class="tm-brand text-uppercase"></h1> <!--todo: Add Customer Name-->
    let header1 = document.getElementById('tm-header')
    header1.textContent = customerName;

    // <h2 id="introheader" class="tm-section-title mb-5 text-uppercase tm-color-primary"></h2> <!--todo: Add Customer Name-->
    let introHeader = document.getElementById('introHeader')
    introHeader.textContent = customerName
};

function toggleColors() {
    // <!-- todo: Change all classes named 'tm-white-rect' to 'tm-blue-rect' -->
    let rects = document.querySelectorAll('tm-white-rect')

    for (let i=0; i< rects.length; i++){
        rects[i].classList.remove('tm-white-rect')
        rects[i].classList.add('tm-blue-rect')
    }

};

function hideElement() {
    //<ul class="nav flex-row tm-social-links">  <!--todo: Hide social links-->
    let socialNav = document.querySelector ('.tm-social-links')
    socialNav.style.visibility = 'hidden'
};

 function addText() {

    //<p id="intropara1" class="tm-color-gray">  <!--todo: Add customer company introduction text about their founding year-->
    let intro = document.getElementById('intropara1')
    intro.textContent = "Alliance was founded in 1931 by Albert Daniels";
    //<p id="intropara2" class="mb-0 tm-color-gray"> <!--todo: Add customer company introduction text about what they lead in-->
    let intro2 = document.getElementById ('intropara2')
    intro2.textContent = "The company is a leader in P.C. Manufacturing";
     //<p id="aboutpara1" id="a" class="mb-5"> <!--todo: Add customer company about text-->
    let about1 = document.getElementById('aboutpara1')
    about1.textContent = "We deliver the best service this side of creation";
    //<p id="aboutpara2"> <!--todo: Add customer company motto text-->

    // <p id="addresspara" class="mb-3"> <!--todo: Add customer company phone number text-->

}; 



