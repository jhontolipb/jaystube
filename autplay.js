const observe = new IntersectionObserver((entries) => {
entries.forEach ((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
        entry.target.classlist.add('show');
    } else {
        entry.target.classList.remove('show');
    }
});
});


 
const hiddenElements = document.querySelectorALL('.hidden');
hiddenElements.forEach((el) => observe.observe(el));