const handleMenuClick = () =>{
    var hamburgerIcon = document.getElementById("hamburger-menu");
    var closeIcon = document.getElementById("hide-close-icon");
    var navLinks = document.getElementById("header-nav");
    var container = document.querySelector(".container");
    
    if(closeIcon.getAttribute('id') === 'hide-close-icon'){
        hamburgerIcon.setAttribute('id','hide-hamburger-menu');
        closeIcon.setAttribute('id' , 'display-close-icon');
    }
    navLinks.style.display = "flex";
    container.style.marginTop = "50%";
}

const handleCloseClick = () => {
    var hamburgerIcon = document.getElementById("hide-hamburger-menu");
    var closeIcon = document.getElementById("display-close-icon");
    var navLinks = document.getElementById("header-nav");
    var container = document.querySelector(".container");

    if(closeIcon.getAttribute('id') === 'display-close-icon'){
        closeIcon.setAttribute('id','hide-close-icon');
        hamburgerIcon.setAttribute('id','hamburger-menu')
    }
    navLinks.style.display = "none";
    container.style.marginTop = "0px";
}