const game = {
	rock: {
		element: document.querySelector('.rock'),
		path: 'assets/img/rock.png',
		get dataAttr() {return this.element.dataset.value},
	},
	paper: {
		element: document.querySelector('.paper'),
		path: 'assets/img/paper.png',
		get dataAttr() {return this.element.dataset.value},
	},
	scissors: {
		element: document.querySelector('.scissors'),
		path: 'assets/img/scissors.png',
		get dataAttr() {return this.element.dataset.value},
	},
	computer: {
		element: document.querySelector('.computer-choice'),
		defaultImg: 'assets/img/question.png',
		dataAttr: 'default',
		rotate: function(boolean) {
			if (boolean) {this.element.classList.add('rotate')}
			else {this.element.classList.remove('rotate')}
		},
	},
	score: {
		computer: document.querySelector('.computer-score'),
		draw: document.querySelector('.draw-score'),
		gamer: document.querySelector('.gamer-score'),
	},
	restartButton: document.querySelector('.restart'),

	random: function() {
		const allGamerChoices = [ this.rock, this.paper, this.scissors ]
		const randomIndex = Math.floor(Math.random() * allGamerChoices.length)
		this.computer.element.style.backgroundImage = `url(${allGamerChoices[randomIndex].path})`
		this.computer.element.dataset.value = allGamerChoices[randomIndex].dataAttr
	},
	get allGamerChoiceElements() {
		return document.querySelectorAll('.gamer-choice')
	},
	reset: function() {
		this.computer.element.style.backgroundImage = `url(${this.computer.defaultImg})`
		this.score.computer.textContent = 0
		this.score.draw.textContent = 0
		this.score.gamer.textContent = 0
	},
	disableChoices: function(boolean = true) {
		this.allGamerChoiceElements.forEach(i => i.disabled = boolean)
	},
	compare: function(comp, gamer) {
		if (comp === gamer)  this.score.draw.textContent++ 
		else if (comp === 'rock' && gamer === 'scissors') this.score.computer.textContent++
		else if (comp === 'rock' && gamer === 'paper') this.score.gamer.textContent++

		else if (comp === 'paper' && gamer === 'rock') this.score.computer.textContent++
		else if (comp === 'paper' && gamer === 'scissors') this.score.gamer.textContent++

		else if (comp === 'scissors' && gamer === 'paper') this.score.computer.textContent++
		else if (comp === 'scissors' && gamer === 'rock') this.score.gamer.textContent++
	}
}


game.allGamerChoiceElements.forEach(item => {
	item.addEventListener('click', function() {
		game.disableChoices()
		game.computer.rotate(true)

		setTimeout( function() {
			game.disableChoices(false)
			game.random()
			game.computer.rotate(false)
			game.compare(game.computer.element.dataset.value, item.dataset.value)
		}, 1000 )
	})
})

game.restartButton.onclick = () => game.reset()