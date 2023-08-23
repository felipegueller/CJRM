const form = document.querySelector('[data-js="form"]')
const input = document.querySelector('input#cpf')
const result = document.querySelector('[data-js="result"]')

const getInvalidCPFValues = () => {
  const invalidsList = []

  for (let i = 0; i <= 9; i++) invalidsList.push(`${i}`.repeat(11))

  return invalidsList
}

const getRestOfSum = (cpf, digitsToVerify, multiplier) => {
  let sum = 0

  for (let i = 1; i <= digitsToVerify; i++) {
    const currentDigit = cpf[i - 1]
    const multiplierNumber = multiplier - i

    sum += currentDigit * multiplierNumber
  }

  const rest = (sum * 10) % 11
  const isRestTenOrEleven = rest === 10 || rest === 11

  return isRestTenOrEleven ? 0 : rest
}

const verifyDigit = (cpf, digitPosition, quantityDigitsToVerify, multiplier) => {
  const digit = Number(cpf.at(digitPosition))
  const restOfSum = getRestOfSum(cpf, quantityDigitsToVerify, multiplier)
  const isDigitInvalid = digit !== restOfSum

  return isDigitInvalid
}

const validateCPF = cpf => {
  const formatedCPF = cpf.replace(/\D/g, '')
  const invalidCPFValues = getInvalidCPFValues()

  const isAnInvalidValue =
    !formatedCPF ||
    formatedCPF.length !== 11 ||
    invalidCPFValues.includes(formatedCPF)

  if (isAnInvalidValue) return false

  const isFirstDigitInvalid = verifyDigit(formatedCPF, 9, 9, 11)
  if (isFirstDigitInvalid) return false

  const isSecondDigitInvalid = verifyDigit(formatedCPF, 10, 10, 12)
  if (isFirstDigitInvalid) return false

  return isSecondDigitInvalid ? false : true
}

const submitForm = event => {
  event.preventDefault()

  const { cpf } = event.target
  const isValid = validateCPF(cpf.value)

  result.textContent = isValid
    ? 'O CPF informado é válido!'
    : 'O CPF informado é inválido!'
}

const resetResultField = () => (result.textContent = '')

const addCpfMask = event => {
  const input = event.target
  const value = input.value

  input.value = value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1')
}

form.addEventListener('submit', submitForm)
form.addEventListener('reset', resetResultField)
input.addEventListener('input', addCpfMask)
