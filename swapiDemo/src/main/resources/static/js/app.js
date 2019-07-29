let button1 = document.querySelector('#button1')
let button2 = document.querySelector('#button2')
let button3 = document.querySelector('#button3')
let name = document.querySelector('#name')
let height = document.querySelector('#height')
let mass = document.querySelector('#mass')
let skincolor = document.querySelector('#skincolor')
let climate = document.querySelector('#climate')
let gravity = document.querySelector('#gravity')
let terrain = document.querySelector('#terrain')
let model = document.querySelector('#model')
let manufacturer = document.querySelector('#manufacturer')
let crew = document.querySelector('#crew')

function getInfo() {
		axios.get('https://swapi.co/api/people/' + Math.floor((Math.random() * 88 ) + 1)).then(response => {
		updateInfo(response.data)
	}).catch(e => {
		updateInfoError()
	})
}

function updateInfo(data) {
	name.innerText = data.name
	height.innerText = `Height: ${data.height}`
	mass.innerText = `Mass: ${data.mass}`
	skincolor.innerText = `Skin Color: ${data.skin_color}`
}

function getPlanetInfo() {
	axios.get('https://swapi.co/api/planets/' + Math.floor((Math.random() * 62 ) + 1)).then(response => {
	updatePlanetInfo(response.data)
}).catch(e => {
	updateInfoError()
})
}

function updatePlanetInfo(data) {
	name.innerText = data.name
	climate.innerText = `Climate: ${data.climate}`
	gravity.innerText = `Gravity: ${data.gravity}`
	terrain.innerText = `Terrain: ${data.terrain}`
}

function getStarshipInfo() {
	axios.get('https://swapi.co/api/starships/' + Math.floor((Math.random() * 37 ) + 1)).then(response => {
	updateStarshipInfo(response.data)
}).catch(e => {
	updateInfoError()
})
}

function updateStarshipInfo(data) {
	name.innerText = data.name
	model.innerText = `Model: ${data.model}`
	manufacturer.innerText = `Manufacturer: ${data.manufacturer}`
	crew.innerText = `Crew: ${data.crew}`
}

function updateInfoError(data) {
	name.innerText = 'There was an Error!'
	height.innerText = ''
	mass.innerText = ''
	skincolor.innerText = ''
}

button1.addEventListener('click', getInfo)
button2.addEventListener('click', getPlanetInfo)
button3.addEventListener('click', getStarshipInfo)