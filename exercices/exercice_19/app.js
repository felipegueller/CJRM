const correctAnswers = ['B', 'C', 'A', 'A'];
const form = document.querySelector('[data-js="quiz-form"]')

const handleQuiz = event => {
    event.preventDefault()
    let score = 0;
    const userAnswers = [
        form.answer_01.value,
        form.answer_02.value,
        form.answer_03.value,
        form.answer_04.value,
    ]
    userAnswers.forEach((answer, index) => {
        if (correctAnswers[index] === answer) {
            score += 25;
        }
    })
    const paragraph = document.createElement('p')
    paragraph.setAttribute('class', 'fs-4 mt-3')
    paragraph.textContent = `Parabéns, a sua pontuação é ${score}!`
    form.insertAdjacentElement('afterend', paragraph)
}

form.addEventListener('submit', handleQuiz)





/*
Este exercício será um pouquinho diferente dos anteriores.

Seu desafio é desenvolver uma versão do quiz que:

- Aborda um tema diferente (não pode ser de filmes);
- Tem um tema de cores diferente do que foi apresentado na aula;
- Exibe na tela a pontuação que o usuário fez. Não há certo ou errado, 
apenas faça. Essa exibição de pontos é uma das implementações que faremos 
na próxima aula =D

Independente se você já fez o quiz dos filmes enquanto acompanhava a aula, 
busque fazer esse exercício sem rever partes da aula.

É importante que a sua versão do quiz seja feita apenas com o conteúdo que 
vimos até aqui.

O uso do Bootstrap ou qualquer biblioteca CSS é opcional. Porém, eu recomendo 
que nesse momento, ao invés de focar em CSS, você foque em desenvolver a 
lógica da aplicação com o JavaScript. Em um momento futuro, você pode voltar 
e melhorar a estilização da aplicação. 
*/