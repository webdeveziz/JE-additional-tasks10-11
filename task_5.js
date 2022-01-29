// Задание 5

function allowVisa(people) {
  const newPeople = people.filter((el) => {
    const nowTime = Date.now()
    const date = el.passportExpiration.split('.').reverse().join('.')
    const passportDate = new Date(date).getTime()
    //new Date('19.06.2023') - вот так не работает, поэтому пришлось менять местами new Date('2023.06.19')
    return nowTime < passportDate && !el.criminalRecord
  })
  return newPeople
}

const peopleWithVisa = [
  {
    firstName: 'Stasia',
    lastName: 'Ward',
    criminalRecord: true,
    passportExpiration: '19.06.2023',
  },
  {
    firstName: 'Elliot',
    lastName: 'Baker',
    criminalRecord: false,
    passportExpiration: '04.06.2021',
  },
  {
    firstName: 'Leighann',
    lastName: 'Scott',
    criminalRecord: true,
    passportExpiration: '31.07.2022',
  },
  {
    firstName: 'Nick',
    lastName: 'Pop',
    criminalRecord: false,
    passportExpiration: '31.12.2021',
  },
]

console.log(allowVisa(peopleWithVisa))
