document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function(){
        if (window.scrollY > 400) {
            this.document.getElementById('navbar_top').classList.add('fixed-top');
            //add padding top to show content behind navbar
            navbar_height = document.querySelector('.navbar').offsetHeight;
            this.document.body.style.paddingTop = navbar_height + 'px';
        } else {
            this.document.getElementById('navbar_top').classList.remove('fixed-top');
            //remove padding top from body
            document.body.style.paddingTop = '0';
        }
    });
});