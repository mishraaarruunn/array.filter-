# array.filter-

Array.filter() method
-----------------------

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
console.log(newHeroes); // [{"name":"Ironman","franchise":"Marvel"},{"name":"Thor","franchise":"Marvel"}]

or you can write 

var newHeroes = heroes.filter(he => he.franchise === 'Marvel');
