let player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: {
    goden: 2,
    silver: 3
  },
  bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018]
}

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade');

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo 6 vezes nos anos de: ' 
+ player.bestInTheWorld);

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' possui ' + player.medals.goden + ' medalhas de outro e ' 
+ player.medals.silver + ' medalhas de prata');