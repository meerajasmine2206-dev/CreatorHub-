// Scroll Animation

const hiddenElements = document.querySelectorAll(
".about, .journey, .services, .courses, .pricing, .testimonials, .contact"
);

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

hiddenElements.forEach((el) => {
    el.classList.add("hidden");
    observer.observe(el);
});