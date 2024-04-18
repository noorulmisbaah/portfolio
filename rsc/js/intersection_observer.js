const observer = new IntersectionObserver(elements => {
    elements.forEach(element => {
        if (element.isIntersecting) {
            element.target.classList.add('appear');
        } else {
            element.target.classList.remove('appear');
            element.target.classList.add('hidden');
        }
    })
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach(element => observer.observe(element));