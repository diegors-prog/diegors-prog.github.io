/* POP UP ITABIER */

function iniciaModal(modalID) {
    if(localStorage.fechaModal !== modalID) {
        const modal = document.getElementById(modalID)
        if(modal) {
            modal.classList.add('mostrar');
            modal.addEventListener('click', (e) => {
                if(e.target.id == modalID || e.target.className == 'fechar'){
                    modal.classList.remove('mostrar')
                    localStorage.fechaModal = modalID
                }
            })
        }
    }
}

const produtos = document.querySelector('.selectModal')
produtos.addEventListener('click', () => iniciaModal(''))

document.addEventListener('scroll', () => {
    if(window.pageYOffset > 300) {
        iniciaModal('modal-promocao')
    }
})


/* ANIMAÇÃO */

const debounce = function(func, wait, immediate) {
    let timeout
    return function(...args) {
        const context = this
        const later = function () {
            timeout = null
            if (!immediate) func.apply(context, args)
        }
        const callNow = immediate && !timeout
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
        if (callNow) func.apply(context, args)
    }
}

const target = document.querySelectorAll('[data-anime]')
const animationClass = 'animate'

function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4)
    target.forEach(function(element) {
        if((windowTop) > element.offsetTop) {
            element.classList.add(animationClass)
        } else {
            element.classList.remove(animationClass)
        }
        
    })
}

animeScroll()

if(target.length) {
    window.addEventListener('scroll', debounce(function() {
        animeScroll()
        console.log('teste')
    }, 200))
}