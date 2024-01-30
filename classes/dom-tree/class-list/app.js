const paragraphs = document.querySelectorAll('p')

paragraphs.forEach(paragraph => {
  const content = paragraph.textContent
  const isError = content.includes('error')
  const isSuccess = content.includes('success')

  if (isError) paragraph.classList.add('error')
  else if (isSuccess) paragraph.classList.add('success')
})