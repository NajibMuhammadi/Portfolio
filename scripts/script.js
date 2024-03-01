const scrollers = document.querySelectorAll(".scroller__container");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}
function addAnimation() {
    scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);
        scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
        });
    });
}


/* let lastScrollTop = 0;
window.addEventListener("scroll", () => {
    if (window.innerWidth <= 600) {
        return;
    }
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop && currentScroll > 50) {
        document.getElementById("myHeader").style.top = "-100px";
    } else if (currentScroll < lastScrollTop - 3 || currentScroll <= 3) {
        document.getElementById("myHeader").style.top = "0";
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
 */






