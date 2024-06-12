// index.js

function fadeIn(element, duration) {
    let opacity = 0;
    element.style.opacity = opacity;
    element.style.display = 'block'; // Ensure element is visible

    const interval = 10;
    const increment = interval / duration;

    function increase() {
        opacity += increment;
        if (opacity <= 1) {
            element.style.opacity = opacity;
            requestAnimationFrame(increase);
        }
    }
    increase();
}

function fadeOut(element, duration) {
    let opacity = 1;
    element.style.opacity = opacity;

    const interval = 10;
    const decrement = interval / duration;

    function decrease() {
        opacity -= decrement;
        if (opacity >= 0) {
            element.style.opacity = opacity;
            requestAnimationFrame(decrease);
        } else {
            element.style.display = 'none';
        }
    }
    decrease();
}

// Get the <h1> element
const h1Element = document.querySelector('.jumbotron h1');

// Fade in the <h1> element on page load
document.addEventListener('DOMContentLoaded', () => fadeIn(h1Element, 1000));

// Example of fading out after 5 seconds

