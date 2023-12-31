function changeMode(size, weight, transform, background, color) {
    return function(){
        document.body.style.fontSize = size + 'px';
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    };
}

function main() {
    let spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    let darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    let screamMode = changeMode(12, 'normal', 'lowercase','white','black');

    document.body.innerHTML += '<p>Welcome Holberton!</p>';
    document.body.innerHTML += '<button id="spooky">Spooky</button>';
    document.body.innerHTML += '<button id="dark">Dark mode</button>';
    document.body.innerHTML += '<button id="scream">Scream mode</button>';

    document.getElementById('spooky').onclick = spooky;
    document.getElementById('dark').onclick = darkMode;
    document.getElementById('scream').onclick = screamMode;
}

main();

/*
information to know:
Closures:
Functions that capture and keep their outer scope's variables.

DOM Manipulation:
Using JavaScript to add elements to and modify the Document Object Model (DOM) of a webpage.

to test use the html file named mode-test.html
*/