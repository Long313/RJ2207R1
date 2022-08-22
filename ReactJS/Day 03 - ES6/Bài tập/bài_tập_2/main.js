var animals = ['tiger', 'lion', 'elephant','rabbit','horse'];
var animalManager = new Set(animals);
// console.log(animalManager);
var input = document.getElementById('input');
var list = document.getElementById('list-animal')
var result = document.getElementById('result');
// check animal existence
var animalName;
function promptAnimal(obj) {
    animalName = obj.value;
    isExist(animalName);
}
function isExist(animalName){
    if(animalManager.has(animalName)){
        result.innerText = 'Animal is exist';
    } else {
        result.innerText = 'Animal not exist';
    }
}
function add(){
    addAnimal(animalName);
}
// add animal to the manager
function addAnimal(animalName) {
    if(!isExist(animalName)){
        animalManager.add(animalName);  
        list.innerText = [...animalManager];
    } else {
     result.innerText = 'animal already exists';
    }
}
// addAnimal('lion');
// addAnimal('snake');
// console.log(animalManager);
// delete animal 
function delAnimal(animalName) {
    console.log(animalName);
}
// deleteAnimal('tiger');
// console.log(animalManager);
function printAllAnimal() {
    let listAnimal = [...animalManager];
    list.innerText = listAnimal;
}
// printAllAnimal();


