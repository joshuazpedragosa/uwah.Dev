function scrollElement(element, instance = 0){
    const elem = document.querySelectorAll(element)

    if(elem.length > instance){
        elem[instance].scrollIntoView({behavior : 'smooth'})
    }
}

const home = document.querySelector('#home')
const about = document.querySelector('#about')
const projects = document.querySelector('#projects')
const contact = document.querySelector('#contact')

home.addEventListener('click', () =>{
    scrollElement('.home')
})

about.addEventListener('click', () =>{
    scrollElement('.about')
})

projects.addEventListener('click', () =>{
    scrollElement('.projects')
})

contact.addEventListener('click', () =>{
    scrollElement('.contact')
})