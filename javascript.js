document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
        event.preventDefault()
        const target = document.querySelector(event.currentTarget.getAttribute('href'))
        target.scrollIntoView({
            behavior: 'smooth'
        })
    })
})