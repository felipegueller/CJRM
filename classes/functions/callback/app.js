const ul = document.querySelector('[data-js="ul"]');
const socialMedias = ['Youtube', 'Instagram', 'TikTok', 'Whatsapp', 'Twitter']

const getSocialMediaLIs = socialmedia => {
  const li = document.createElement('li');

  li.style = "color: deeppink;"
  li.textContent = socialmedia

  return li
}

const socialMediasLI = socialMedias.map(getSocialMediaLIs);

socialMediasLI.forEach(socialmedia => {
  ul.appendChild(socialmedia);
})



// Simple sample about callback functin behaviour

const myFunc = callback => {
  const value = 77

  return callback(77)
}

myFunc(value => console.log(value))

