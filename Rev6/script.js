

document.addEventListener("DOMContentLoaded", function(){

    // mobile nav
    let sideNav = document.querySelectorAll(".sidenav");
    let sideNavInit = M.Sidenav.init(sideNav);

    // carousel
    let carousel = document.querySelectorAll(".carousel");
    let carouselInit = M.Carousel.init(carousel);

    // lightbox
    let lightbox = document.querySelectorAll(".materialboxed")
    let lightboxInit = M.Materialbox.init(lightbox)

    //scrollspy
    let scrollspy = document.querySelectorAll('.scrollspy');
    let scrollSpyInit = M.ScrollSpy.init(scrollspy);

    let tooltipped = document.querySelectorAll('.tooltipped');
    let toolTippedInit = M.Tooltip.init(tooltipped);
});

// nice waves

const waveOptions={
    fills: ["#E8EAF6","#9FA8DA"],
    offset: 0.2,
    flowRate: 3,
};

waves(waveOptions).mount("#waves");



