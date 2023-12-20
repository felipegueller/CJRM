const username = document.querySelector('#username')
const form = document.querySelector('form')

const validateUsername = value => /^[a-zA-Z]{6,}$/.test(value)
const validateIfIsAParagraph = value => /^p$/i.test(value)

const getParagraphReferenceByElement = (element) => {
  const nextElementSibling = element.nextElementSibling
  const isAParagraphNextElementSibling = validateIfIsAParagraph(
    nextElementSibling?.tagName)

  if (isAParagraphNextElementSibling) return nextElementSibling

  const paragraph = document.createElement('p')
  element.insertAdjacentElement('afterend', paragraph)

  return paragraph
}

const getValidationMassage = (elementTag, flag) => {
  const messagesMap = {
    button: {
      success: {
        message: 'Dados enviados =)',
        cssClass: 'submit-success-feedback'
      },
      error: {
        message: 'Por favor, insira um username válido',
        cssClass: 'submit-help-feedback'
      }
    },
    input: {
      success: {
        message: 'Username válido =)',
        cssClass: 'username-success-feedback'
      },
      error: {
        message: "O valor deve conter no mínimo 6 caracteres, " +
        "com apenas letras maiúsculas e/ou minúsculas",
        cssClass: 'username-help-feedback'
      }
    },
    default: {
      message: 'Valor inválido :(',
      cssClass: 'submit-help-feedback'
    }
  }

  return messagesMap[elementTag][flag] || messagesMap['default']
}

const setValidationMessage = (isValid, element) => {
  const tagName = element.tagName.toLowerCase();
  const paragraph = getParagraphReferenceByElement(element);
  const { message, cssClass } = isValid
    ? getValidationMassage(tagName, 'success')
    : getValidationMassage(tagName, 'error')


  paragraph.textContent = message
  paragraph.setAttribute('class', cssClass)
}

const handleKeyUp = () => {
  const isAValidUsername = validateUsername(username.value)
  setValidationMessage(isAValidUsername, username)
}

const handleSubmit = event => {
  event.preventDefault()
  // const button = event.submitter
  const button = event.target.querySelector('button')
  const isAValidUsername = validateUsername(username.value)
  setValidationMessage(isAValidUsername, button)
}

username.addEventListener('keyup', handleKeyUp)
form.addEventListener('submit', handleSubmit)

/*
  Apenas 3 exercícios, mas que exigem um certo nível de conhecimento do que  
  vimos até aqui =)
*/

/*
  01

  - Valide o valor do input "username" à medida em que ele é digitado;
  - Ele deve conter: 
    - No mínimo 6 caracteres;
    - Apenas letras maiúsculas e/ou minúsculas;
  - Se o valor inserido não é válido, exiba um parágrafo laranja abaixo do  
    input com a seguinte mensagem: "O valor deve conter no mínimo 6 caracteres,  
    com apenas letras maiúsculas e/ou minúsculas";
  - Se o valor é válido, o parágrafo deve ser verde e exibir a mensagem  
    "Username válido =)";
  - Use as classes disponíveis no arquivo style.css para colorir o parágrafo;
  - Não insira o parágrafo manualmente no index.html.
  
  Dica: pesquise pelo método "insertAdjacentElement", no MDN;
*/

/*
  02

  - Valide o envio do form;
  - Se o username inserido no input é válido, no envio do form, exiba um  
    parágrafo verde abaixo do botão com a mensagem "Dados enviados =)";
  - Se no momento do envio, o valor do input é inválido, o parágrafo deve ser  
    vermelho e exibir "Por favor, insira um username válido".
  - Use as classes disponíveis no arquivo style.css para colorir o parágrafo;
  - Não insira o parágrafo manualmente no index.html.
*/

/*
  03

  - Há algumas aulas, falamos sobre o método some;
  - Neste exercício, seu desafio será criar este método do zero;
  - Implemente uma função "some" que possui a mesma funcionalidade do método  
    some original;
  - A assinatura da invocação desta função deverá ser:
    - some([1, 2, 3], item => item > 2) - Retorna true;
    - some([1, 3, 5], item => item === 0) - Retorna false;
  - Se você não se lembra como o método some funciona, há 2 opções:
    1) Reassistir às seguintes aulas:
      - "Desenvolvendo um popup" - Aula 04-04 da etapa 5;
      - "Correção dos exercícios da aula 04 da etapa 05" - Aula 01-01 da etapa  
        6;
    2) Pesquisar no MDN.
*/

const some = (array, callback) => {
  const isNotAnArray =
    !Array.isArray(array) || array === null || array === 'undefined'
  if (isNotAnArray) return;

  for (const item of array) {
    if (callback(item)) return true
  }

  return false
}

console.log(some([1, 2, 3], item => item > 2))
console.log(some([1, 3, 5], item => item === 0))