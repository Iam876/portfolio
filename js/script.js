function filterSelection(category) {
    const items = document.querySelectorAll('.filter-box');
    if (category === 'all') {
        items.forEach(item => item.style.display = 'block');
    } else {
        items.forEach(item => {
            if (item.classList.contains(category)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }
}

// Testimonial Part
$(document).ready(function () {
    $("#testimonial-slider").owlCarousel({
        items: 2,
        itemsDesktop: [1000, 2],
        itemsDesktopSmall: [979, 2],
        itemsTablet: [768, 1],
        pagination: true,
        navigation: false,
        autoplay: true
    });
});