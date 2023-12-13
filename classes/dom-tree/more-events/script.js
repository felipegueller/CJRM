const paragraph = document.querySelector(".copy-me")

paragraph.addEventListener("copy", () => {
   console.log("Texto copiado!")
})

const div = document.querySelector(".box")

div.addEventListener('mousemove', event => {
    const { offsetX, offsetY } = event
    const target = event.target

    target.textContent = `X = ${offsetX} | Y = ${offsetY}`
})

document.addEventListener('wheel', event => {
    const { pageX, pageY } = event
    console.log(`X = ${pageX} | Y = ${pageY}`)
})