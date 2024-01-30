const phaseScores = [
    { name: 'Vinicius Costa', score: 337 },
    { name: 'Roger Melo', score: 43 },
    { name: 'Alfredo Braga', score: 234 },
    { name: 'Pedro H. Silva', score: 261 },
    { name: 'Ana Paula Rocha', score: 491 },
    { name: 'Vinicius Costa', score: 167 },
    { name: 'Roger Melo', score: 137 },
    { name: 'Alfredo Braga', score: 135 },
    { name: 'Ana Paula Rocha', score: 359 },
    { name: 'Pedro H. Silva', score: 133 }
  ]

const getTotalPlayerScores = playerName => (acc, item) => {
    const { name, score } = item
    const isAlfredo = name === playerName

    if (isAlfredo) acc += score

    return acc
}

const alfredoScore = phaseScores.reduce(getTotalPlayerScores('Alfredo Braga'), 0)
const rogerScore = phaseScores.reduce(getTotalPlayerScores('Roger Melo'), 0)
const anaScore = phaseScores.reduce(getTotalPlayerScores('Ana Paula Rocha'), 0)

console.log({ alfredoScore, rogerScore, anaScore })