var sides = document.querySelector('#side');
var mainDish = document.querySelector('#mainDish');
var dessert = document.querySelector('#dessert');
var entireMeal = document.querySelector('#entireMeal')
var photo = document.querySelector('svg')
var rightbox = document.querySelector('.photobox');
var clear = document.querySelector('#clear');
var letsCook = document.querySelector('#letsCook')

sides.addEventListener('click', chooseSide)
mainDish.addEventListener('click', chooseMain)
dessert.addEventListener('click', chooseDessert)
entireMeal.addEventListener('click', chooseMeal)
letsCook.addEventListener('click', displayMeal)
clear.addEventListener('click', clearMeal)

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

function chooseMeal() {
  randomMeal = `${meals.mains[randomizer('mains')]} with a side of ${meals.sides[randomizer('sides')]} and ${meals.desserts[randomizer('desserts')]}!`
}

function clearMeal() {
  clear.style.visibility = 'hidden';
  rightbox.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125"> <path d="M84.883 42.8h-1.346v-4.504a1 1 0 00-1-1H17.713a1 1 0 00-1 1V42.8h-1.346c-2.891 0-5.242 2.352-5.242 5.242s2.352 5.242 5.242 5.242h1.346v32.874a4.003 4.003 0 003.998 3.998h58.828a4.003 4.003 0 003.998-3.998V53.284h1.346c2.891 0 5.242-2.352 5.242-5.242S87.773 42.8 84.883 42.8zm-21.594-3.504h5.172v10.845c0 1.426-1.16 2.585-2.586 2.585s-2.586-1.159-2.586-2.585V39.296zm-12.403 0h5.171v16.618c0 1.426-1.16 2.586-2.586 2.586s-2.585-1.16-2.585-2.586V39.296zM15.367 51.284c-1.788 0-3.242-1.454-3.242-3.242s1.454-3.242 3.242-3.242h1.346v6.484h-1.346zm66.17 34.874a2 2 0 01-1.998 1.998H20.711a2 2 0 01-1.998-1.998V39.296h30.173v16.618c0 2.528 2.057 4.586 4.585 4.586s4.586-2.058 4.586-4.586V39.296h3.232v10.845c0 2.528 2.058 4.585 4.586 4.585s4.586-2.057 4.586-4.585V39.296h11.076v46.862zm3.346-34.874h-1.346V44.8h1.346c1.788 0 3.242 1.454 3.242 3.242s-1.454 3.242-3.242 3.242zM19.33 22.125a5.55 5.55 0 00-4.898 6.121l.426 3.842a1 1 0 001.104.884l67.588-7.498a1 1 0 00.884-1.104l-.427-3.842a5.506 5.506 0 00-2.046-3.717 5.52 5.52 0 00-4.075-1.182L54.799 18.19l-.229-2.06.406-.045a1 1 0 00.884-1.104l-.454-4.09a.999.999 0 00-1.104-.884l-14.064 1.561a1 1 0 00-.884 1.104l.454 4.09a1 1 0 001.104.884l.442-.049.228 2.06-22.252 2.468zm58.776-4.508a3.517 3.517 0 012.604.755 3.522 3.522 0 011.308 2.376l.316 2.848-65.6 7.277-.315-2.848a3.546 3.546 0 013.131-3.912l58.556-6.496zm-24.578-5.512l.233 2.102-12.076 1.34-.233-2.102 12.076-1.34zm-10.185 5.271l9.239-1.025.229 2.06-9.239 1.025-.229-2.06z"/> </svg>'
}

function displayMeal() {
  clear.style.visibility = 'visible';
  rightbox.innerHTML = '<p class="text"<i>You should make:</i></p><br>  <h2 class="text">' + randomMeal + '</h2>'
  //rightbox.innerHTML(`<div class="buttonbox" id=${randomMeal}'answer'></div>`)
}
