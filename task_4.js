// Задание 4

function getRandomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

function getWinner(applicants, winnerObject) {
  const keysApplicants = Object.keys(applicants)
  const random = getRandomNumberInRange(0, keysApplicants.length)

  return { ...winnerObject, ...winnerApplicants[keysApplicants[random]] }
}

const todaysWinner = {
  prize: '10 000$',
}

const winnerApplicants = {
  '001': {
    name: 'Максим',
    age: 25,
  },
  201: {
    name: 'Светлана',
    age: 20,
  },
  304: {
    name: 'Екатерина',
    age: 35,
  },
}

console.log(getWinner(winnerApplicants, todaysWinner))
