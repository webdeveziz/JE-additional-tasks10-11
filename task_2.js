// Задание 2

function getRandomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function startGame(heroPlayer, enemyPlayer) {
  while (heroPlayer.health > 0 && enemyPlayer.health > 0) {
    const random = getRandomNumberInRange(0, 1)
    console.log(random)
    if (random === 0) {
      heroPlayer.heatEnemy(enemyPlayer)
    } else if (random === 1) {
      enemyPlayer.heatHero(heroPlayer)
    }
  }

  heroPlayer.health > 0
    ? alert(
        `${heroPlayer.name} победил! У него осталось ${heroPlayer.health} здоровья`
      )
    : alert(
        `${enemyPlayer.name} победил! У него осталось ${enemyPlayer.health} здоровья`
      )
}

const hero = {
  name: 'Batman',
  health: 100,
  heatEnemy(enemy) {
    enemy.health -= 10
  },
}

const enemy = {
  name: 'Joker',
  health: 100,
  heatHero(hero) {
    hero.health -= 10
  },
}

startGame(hero, enemy)
