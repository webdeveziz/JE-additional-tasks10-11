// Задание 3
// Функция возврашает true если элементы array1 есть в array2 иначе false

function func(array1, array2) {
  let countArr = array1.length || ''
  let countTrue = 0

  for (let i = 0; i < array1.length; i++) {
    for (let k = 0; k < array2.length; k++) {
      if (array1[i] === array2[k]) countTrue++
      else continue
    }
  }

  return countArr === countTrue
}

// Функция getKiller
function getKiller(suspectInfo, deadPeople) {
  let isKiller = false
  let name = ''

  Object.entries(suspectInfo).forEach((el) => {
    if (func(deadPeople, el[1])) {
      isKiller = true
      name = el[0]
    }
  })

  return isKiller ? `Убийца ${name}!` : 'Убийца не найдена!'
}

console.log(
  getKiller(
    {
      James: ['Jacob', 'Bill', 'Lucas'],
      Johnny: ['David', 'Kyle', 'Lucas'],
      Peter: ['Lucy', 'Kyle'],
    },
    ['Lucas', 'Bill']
  )
) // Убийца James

console.log(
  getKiller(
    {
      Brad: [],
      Megan: ['Ben', 'Kevin'],
      Finn: [],
    },
    ['Ben']
  )
) // Убийца Megan

console.log(
  getKiller(
    {
      Brad: ['Lucy', 'Kyle'],
      Megan: ['Jacob', 'Bill', 'Lucas'],
      Finn: ['Bill'],
    },
    ['Ben']
  )
) // ?
