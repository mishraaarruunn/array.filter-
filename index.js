var heroes = [
	{name: 'Batman', franchise: 'DC'},
	{name: 'Ironman', franchise: 'Marvel'},
	{name: 'Thor', franchise: 'Marvel'},
	{name: 'Superman', franchise: 'DC'}
];

// now I want to make heroes list with names only whose franchise is 'Marvel'
var newHeroes = heroes.filter(function(he){
    return he.franchise === 'Marvel';
});
console.log('newHeroes ', newHeroes);

// --------------------------------------------

const data = [
    {
      name: 'Bob',
      gender: 'male',
      age: 34,
    },
    {
      name: 'Carol',
      gender: 'female',
      age: 36,
    },
    {
      name: 'Ted',
      gender: 'male',
      age: 38,
    },
    {
      name: 'Alice',
      gender: 'female',
      age: 40,
    },
  ];

// age above 37
const arr1 = data.filter(d => d.age > 37);
console.log('age greater than 37 ', arr1);

// gender is female
const arr2 = data.filter(d => d.gender.toLocaleLowerCase() === 'female');
console.log('gender is female ', arr2);

// age greater than 37 and gender is female
const arr3 = data.filter(d => (d.age > 37 && d.gender.toLocaleLowerCase() === 'female'));
console.log('females more than 37 yrs of age', arr3);
