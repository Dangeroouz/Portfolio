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

let hamburger = document.querySelector('.burger-nav')
let navMenu = document.querySelector('.header-nav')
let successMessage = document.querySelector('.success-message')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active')
})
document.querySelectorAll('.nav-item').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active')
    navMenu.classList.remove('active')
    
}))

const $contactForm = document.querySelector('#contact-group-js')
$contactForm.addEventListener('submit', handleSubmit)
async function handleSubmit(e){
    e.preventDefault()
    const $form = e.target,
        $fullname = $form.querySelector('#fullName'),
        $email = $form.querySelector('#email'),
        $message = $form.querySelector('#message'),
        response = await fetch('https://api.apispreadsheets.com/data/IVmNkDruNBW1foYw', {
            method: 'POST',
            body: JSON.stringify({
                data: {
                    full_name: $fullname.value,
                    email: $email.value,
                    message: $message.value,
                }
            })
        }
    )
    if (response.status === 201){
        successMessage.classList.remove('hidden')
}
    else {
        successMessage.classList.add('hidden')
    }

    $form.reset()

}