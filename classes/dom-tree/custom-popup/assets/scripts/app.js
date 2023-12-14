const openBtn = document.querySelector('.popup-open')
const popup = document.querySelector('.popup-wrapper')

const popupToggle = () => popup.classList.toggle('show')

const hasAllowedClass = elementClasses => {
    const allowedClassesToClosePopup = [
        'popup-wrapper',
        'popup-close',
        'popup-link'
    ]

    return elementClasses.some(classItem => allowedClassesToClosePopup.includes(classItem))
}

const checkPopupToggle = event => {
    const elementClickedClasses = Array.from(event.target.classList)

    const isNotAllowedClass = !hasAllowedClass(elementClickedClasses)

    if (isNotAllowedClass) return

    popupToggle()
}

openBtn.addEventListener('click', popupToggle)
popup.addEventListener('click', checkPopupToggle)
