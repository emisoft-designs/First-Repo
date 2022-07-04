const navbar=document.getElementsById("navbar");
const navbtn=document.getElementsById("navBtn");

let bol = false;
const offset = 90;

// Add scroll event listener to the page
window.addEventListener("scroll", () => {
    // if the page is scrolled by 90px
    if (document.body.scrollTop > offset && bol === false) {
        // Add the classes to change the navbar to the light version
        // change bg to white
        navbar.classList.add("bg-light");
        // Change text to black
        navbar.classList.remove("navbar-dark");
        navbar.classList.add("navbar-light");

        // Add a shadow
        navbar.style.boxShadow = "0px 5px 15px rgba(0,0,0,0.3)";
        /* Prevents the event from firing more thatn once */
        bol = true;
    }
    else if (navbar.scrollTop <= offset && bol === true){
        // Change the background back to transparent
        navbar.classList.remove("bg-light");
        //Change the text back to white
        navbar.classList.remove("navbar-light");
        navbar.classList.add("navbar-dark");
        // Remove the shadow
        navbar.style.boxShadow = "none";
        /* Prevents the event from firing more than once */
        bol = false;
    }
})

var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() 
{
    scrollFunction();
}

function scrollFunction() {
    if(document.body.scrollTop > 40 || document.documentElement.scrollTop > 20){
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}