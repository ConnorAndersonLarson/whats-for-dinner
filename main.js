var sides = document.querySelector('#side');
var mainDish = document.querySelector('#mainDish');
var dessert = document.querySelector('#dessert');

var letsCook = document.querySelector('#letsCook')

sides.addEventListener('click', chooseSide)
mainDish.addEventListener('click', chooseMain)
dessert.addEventListener('click', chooseDessert)
letsCook.addEventListener('click', displayMeal)

var randomMeal = ''

function randomizer(foodCourse){
  return Math.floor(Math.random() * (meals[foodCourse].length-1))
}

function chooseSide() {
  randomMeal = meals.sides[randomizer('sides')]
}

function chooseMain() {
  randomMeal = meals.mains[randomizer('mains')]
}

function chooseDessert() {
  randomMeal = meals.desserts[randomizer('desserts')]
}

function displayMeal() {

}
