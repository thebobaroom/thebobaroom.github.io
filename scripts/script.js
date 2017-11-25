//make hamburger menu functional

//make back-to-top button functional
var backToTop = document.getElementsByClassName('back-to-top');

document.getElementsByClassName('back-to-top').onclick = function(){
	 	document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//backToTop.addEventListener('click',topFunction);
//function topFunction() {
//    document.body.scrollTop = 0; // For Safari
//    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
//} 