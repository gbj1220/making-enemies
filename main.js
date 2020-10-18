// Your code here.
const makeBoss = function (obj) {
  const newObj = {
    name: obj.name,
    attackDamage: obj.attackDamage,
    boss: true,
    level: obj.level,
    alive: obj.alive,
    hitPoints: obj.hitPoints
  }
  
  return newObj
}

const levelUp = function (obj) {
  const changeLevel = {
    name: obj.name,
    attackDamage: obj.attackDamage,
    boss: obj.boss,
    level: obj.level + 1,
    alive: obj.alive,
    hitPoints: obj.hitPoints
  }
return changeLevel
}

const buff = function (obj) {
  const increaseDamage = {
    name: obj.name,
    attackDamage: obj.attackDamage + 15,
    boss: obj.boss,
    level: obj.level, 
    alive: obj.alive,
    hitPoints: obj.hitPoints
  }
return increaseDamage
}

const makeSuper = function (obj) {
  const addSuper = {
    name: "Super " + obj.name,
    attackDamage: obj.attackDamage,
    boss: obj.boss,
    level: obj.level,
    alive: obj.alive,
    hitPoints: obj.hitPoints
  }
return addSuper
}

const hitEnemy = function (obj) {
  const reduceAndDie = {
    name: obj.name,
    attackDamage: obj.attackDamage,
    boss: obj.boss,
    level: obj.level,
    alive: obj.hitPoints - 10 > 0 ? true : false,
    hitPoints: obj.hitPoints - 10,
  } 
  return reduceAndDie
}

const beastMode = function (obj) {
  const makeItBeastly = {
    name: "Super " + obj.name,
    attackDamage: obj.attackDamage + 15,
    boss: true,
    level: obj.level + 1,
    alive: obj.alive,
    hitPoints: obj.hitPoints,
  }
return makeItBeastly
}


// Our code here. Don't touch!
if (typeof makeBoss === 'undefined') {
  makeBoss = undefined
}

if (typeof levelUp === 'undefined') {
  levelUp = undefined
}

if (typeof buff === 'undefined') {
  buff = undefined
}

if (typeof makeSuper === 'undefined') {
  makeSuper = undefined
}

if (typeof hitEnemy === 'undefined') {
  hitEnemy = undefined
}

if (typeof beastMode === 'undefined') {
  beastMode = undefined
}


module.exports = {
  makeBoss,
  levelUp,
  buff,
  makeSuper,
  hitEnemy,
  beastMode,
}
