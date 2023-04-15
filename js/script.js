window.addEventListener('scroll', function(){
    let header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 0)
})

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        if (entry.isIntersecting){
                document.querySelectorAll('.nav-item').forEach((link) =>{
                    link.getAttribute('href').replace('#', '');
                    if(link.getAttribute('href').replace('#', '') === entry.target.id){
                        link.classList.add('nav-item--active')
                    }else{
                        link.classList.remove('nav-item--active')
                    }
                })
        }
    })
}, {
    threshold: 0.5
});

document.querySelectorAll('section').forEach(
    (section) => observer.observe(section))