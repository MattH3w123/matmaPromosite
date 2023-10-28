var lastScrollTop = 0;
            navbar = document.getElementById("header")
        window.addEventListener("scroll", function(){
            var scrollTop = window.pageYOffset || document
                .documentElement.scrollTop;
            if (scrollTop > lastScrollTop){
                navbar.style.top="-60px";
            } else {
                navbar.style.top="0";
            }
            lastScrollTop = scrollTop;
        });

function seemore(button) {
    const seeMoreText = button.previousElementSibling.querySelector('.see-more');
    seeMoreText.classList.toggle('hidden-seemore');
    button.textContent = seeMoreText.classList.contains('hidden-seemore') ? "Więcej" : "Mniej";
};