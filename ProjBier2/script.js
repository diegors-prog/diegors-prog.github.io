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
produtos.addEventListener('click', () => iniciaModal('modal-promocao'))

const produtos1 = document.querySelector('.selectModal1')
produtos1.addEventListener('click', () => iniciaModal('modal-promocao'))

const sessionIPA = document.querySelector('.selectModal2')
sessionIPA.addEventListener('click', () => iniciaModal('modal-promocao'))

const aaa = document.querySelector('.selectModal3')
aaa.addEventListener('click', () => iniciaModal('modal-promocao'))

const apa = document.querySelector('.selectModal4')
apa.addEventListener('click', () => iniciaModal('modal-promocao'))

const wheat = document.querySelector('.selectModal5')
wheat.addEventListener('click', () => iniciaModal('modal-promocao'))

const belgian = document.querySelector('.selectModal6')
belgian.addEventListener('click', () => iniciaModal('modal-promocao'))

const hoppy = document.querySelector('.selectModal7')
hoppy.addEventListener('click', () => iniciaModal('modal-promocao'))

const lager = document.querySelector('.selectModal8')
lager.addEventListener('click', () => iniciaModal('modal-promocao'))