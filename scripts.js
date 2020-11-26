"use strict";

///////////////////
// Menu Sticky - Fixed

const nav = document.querySelector(".nav");
const navHeight = nav.getBoundingClientRect().height;
const header = document.querySelector(".header");

const stickyNav = function(entries) {
    const [entry] = entries;
    console.log(entry);
    if (!entry.isIntersecting) nav.classList.add('fixed');
    else nav.classList.remove('fixed');
};

const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

////////////////////////////////////////
// Exibir conteúdo ao rolar página

const sections = document.querySelectorAll(".section");
const showSection = function(entries, observer) {
    const [entry] = entries;
    //console.log(entry);
    if (!entry.isIntersecting) return;
    entry.target.classList.remove("section--hidden");
    observer.unobserve(entry.target); // depois de tudo exibido, não terá mais eventos obsevando os sections
}

const sectionObserver = new IntersectionObserver(showSection, {
    root: null,
    threshold: 0.15,
});

sections.forEach(function(section) {
    sectionObserver.observe(section);
    section.classList.add("section--hidden");
    //console.log(section);
});