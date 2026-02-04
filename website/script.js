// Animate counters
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");
    counters.forEach(counter => {
        let target = +counter.textContent.replace(/\D/g, '');
        let count = 0;
        let step = target / 100; // adjust speed
        let interval = setInterval(() => {
            count += step;
            if (count >= target) {
                count = target;
                clearInterval(interval);
            }
            counter.textContent = Math.floor(count) + "+";
        }, 20);
    });

    // Animate service cards on load
    const cards = document.querySelectorAll(".service-card");
    cards.forEach((card, index) => {
        card.style.opacity = 0;
        card.style.transform = "translateY(30px)";
        setTimeout(() => {
            card.style.transition = "all 0.6s ease";
            card.style.opacity = 1;
            card.style.transform = "translateY(0)";
        }, index * 200);
    });
});
