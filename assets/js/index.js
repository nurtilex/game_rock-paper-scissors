
const rock = document.querySelector('.rock img');
const computerChoice = document.querySelector('.computer-choice img');
const fistUrl = rock.getAttribute('src');
rock.onclick = evt => {
    evt.preventDefault();
    computerChoice.classList.add('question-rotating-animation-class');
    setTimeout( function() {
        computerChoice.setAttribute('src', rock.getAttribute('src'));
    }, 1000 )
    
}