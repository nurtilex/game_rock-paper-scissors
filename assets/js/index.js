const choices = {
    rock: {
        element: document.querySelector('.rock'),
        path: 'assets/img/rock.png',
    },
    paper: {
        element: document.querySelector('.paper'),
        path: 'assets/img/paper.png',
    },
    scissors: {
        element: document.querySelector('.scissors'),
        path: 'assets/img/scissors.png',
    },
    computer: {
        element: document.querySelector('.computer-choice'),
        defaultImg: 'assets/img/question.png',
    },
    get randomChoiceImgPath() {
        const allGamerChoiceImages = [ this.rock.path, this.paper.path, this.scissors.path ];
        const randomIndex = Math.floor(Math.random() * allGamerChoiceImages.length);
        return allGamerChoiceImages[randomIndex];
    },
    get allGamerChoiceElements() {
        return document.querySelectorAll('.gamer-choice');
    },
    computerChoiceToDefault: function() {
        this.computer.element.style.backgroundImage = `url(${this.computer.defaultImgPath})`;
    },
    disableChoices: function(boolean = true) {
        this.allGamerChoiceElements.forEach(i => i.disabled = boolean);
    }
};


choices.allGamerChoiceElements.forEach(item => {
    item.addEventListener('click', function(evt) {
        evt.preventDefault();
        //choices.allGamerChoiceElements.forEach(i => i.disabled = true)
        choices.disableChoices();
        choices.computer.element.classList.add('question-rotating-animation-class');
    setTimeout( function() {
        choices.disableChoices(false);
        choices.computer.element.style.backgroundImage = `url(${choices.randomChoiceImgPath})`;
        choices.computer.element.classList.remove('question-rotating-animation-class');
    }, 1000 );
    })
})
