function handleMouseover(event) {
    let movieCard = event.target
    let iconSection = event.target.children[1]

    iconSection.classList.remove('hidden')
    movieCard.classList.add('glow')
    iconSection.classList.add('glow')
}

function handleMouseLeave(event) {
    let movieCard = event.target
    let iconSection = event.target.children[1]

    iconSection.classList.add('hidden')
    movieCard.classList.remove('glow')
    iconSection.classList.remove('glow')
}

function toggleColor(color) {
    return color == "white" ? "crimson" : "white"
}

function like(event) {
    let color = event.target.getAttribute('fill')
    event.target.setAttribute('fill', toggleColor(color))
 }

function main() {
    let movies = document.getElementsByClassName('movie-card');
    for (let i = 0; i < movies.length; i++) {
        const element = movies[i];
        element.addEventListener('mouseover', handleMouseover)
        element.addEventListener('mouseleave', handleMouseLeave)
    }
}

window.onload = main