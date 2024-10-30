// Assignment 3 - Dynamic Welcome
(async () => {

const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

const welcome = document.querySelector('#welcome')

if(isMorning) welcome.textContent = 'Good Morning!'
if(isAfternoon) welcome.textContent = 'Good Afternoon!'
if(isEvening) welcome.textContent = 'Good Evening!'


// Assignment 4 - Secret Message

const key = 'It\'s a secret to everybody'

const secretMessage = "\"You have to believe that you can achieve anything\""
localStorage.setItem(key, secretMessage)


// Assignment 5 - Carousel

const urls = [
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
].map(url => { (new Image()).src = url; return url })

const images = document.querySelectorAll('#carousel img')

let currentImage = 0
const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
    })
}

showImages()

const previous = document.querySelector('#prev')
const next = document.querySelector('#next')

previous.addEventListener('click', () => {
    currentImage--
    showImages()
})
next.addEventListener('click', () => {
    currentImage++
    showImages()
})

setInterval(() => {
    // code to run EVERY 5 seconds
    currentImage++
    showImages()
}, 5000)


// Assignment 7 - To-Do List
const todoList = document.querySelector('.todo-list')
const input = document.querySelector('#new-todo')
const addButton = document.querySelector('#add-todo')



const todos = JSON.parse(localStorage.getItem('todo-list')) || []


const renderTodos = () => {

    todoList.innerHTML = ''

    todos.forEach(todo => {
        const li = document.createElement('li')
        li.textContent = todo.text
        todoList.append(li)
    })
}

addButton.addEventListener('click', () => {
    todos.push({ text: input.value, completed: false })
    localStorage.setItem('todo-list', JSON.stringify(todos))
    renderTodos()

    input.value = ''
})

renderTodos()

// Assignment 8 - API Fetch

const pokemonImage = document.querySelector('#pokemon')


    const getRandomPokemon = async () => {
        const url = 'https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 150)

        const response = await fetch(url)
        const json = await response.json()
       
        return json 
    }

    const renderPokemon = pokemon => {
        const img = document.createElement('img')
        img.src = pokemon.sprites.front_default
        img.alt = pokemon.name
        pokemonImage.append(img)
    }

    const randomPokemon = await getRandomPokemon()
    renderPokemon(randomPokemon)

})()






