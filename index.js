const openpopupButtons = document.querySelectorAll('[data-popup-target]')
const closepopupButtons = document.querySelectorAll('[data-close]')
const overlay = document.getElementById('overlay')

openpopupButtons.forEach(div => {
    div.addEventListener('click', () => {
        const popup = document.querySelector(div.dataset.popupTarget)
        openpopup(popup)
    })
})

overlay.addEventListener('click', () => {
    const popups = document.querySelectorAll('.popup.active')
    popups.forEach(popup => {
        closepopup(popup)
    })
})

closepopupButtons.forEach(div => {
    div.addEventListener('click', () => {
        const popup = div.closest('.popup')
        closepopup(popup)
    })
})

function openpopup(popup) {
    if (popup == null) return
    popup.classList.add('active')
    overlay.classList.add('active')
}

function closepopup(popup) {
    if (popup == null) return
    popup.classList.remove('active')
    overlay.classList.remove('active')
}