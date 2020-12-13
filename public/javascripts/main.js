var setUpTypewriter = () => {
    // values to keep track of the number of letters typed, which quote to use. etc. Don't change these values.
    var i = 0,
        a = 0,
        isFirstHeader = false;
    // Typerwrite text content. Use a pipe to indicate the start of the second line "|".  
    var textArray = [
        "Hello I'm Flor|a software dev </>",
    ];
    // Speed (in milliseconds) of typing.
    var speedForward = 150, //Typing Speed
        speedWait = 600, // Wait between typing and backspacing
        speedBetweenLines = 500, //Wait between first and second lines
        speedBackspace = 25; //Backspace Speed
    //Run the loop
    typeWriter("typewriter", textArray);
    function typeWriter(id, ar) {
        var element = document.getElementById(id),
            aString = ar[a],
            eHeader1 = element.querySelectorAll("h2")[0],
            eHeader2 = element.querySelectorAll("h2")[1];
        // If full string hasn't yet been typed out, continue typing
        if (i < aString.length) {
            // If character about to be typed is a pipe, switch to second line and continue.
            if (aString.charAt(i) == "|") {
                isFirstHeader = true;
                eHeader1.classList.remove("cursor");
                eHeader2.classList.add("cursor");
                i++;
                setTimeout(function () { typeWriter(id, ar); }, speedBetweenLines);
                // If character isn't a pipe, continue typing.
            } else {
                // Type header or subheader depending on whether pipe has been detected
                if (!isFirstHeader) {
                    eHeader1.innerText = eHeader1.innerText + aString.charAt(i);
                } else {
                    eHeader2.innerText = eHeader2.innerText + aString.charAt(i);
                }
                i++;
                setTimeout(function () { typeWriter(id, ar); }, speedForward);
            }
            // If full string has been typed, switch to backspace mode.
        } else if (i == aString.length) {
            isBackspacing = true;
            setTimeout(function () { typeWriter(id, ar); }, speedWait);
        }
    }
}

window.addEventListener('load', () => {
    setUpTypewriter();
    animateScroll();
})

var animateScroll = () => {

    const scrollLinks = document.querySelectorAll('a[data-target="scroll"]');
    for (let index = 0; index < scrollLinks.length; index++) {
        const link = scrollLinks[index];
        link.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

}

//let copyEmail = document.getElementById('flor-email');

function copyURI(event) {
    event.preventDefault();
    setTimeout(function () {
        navigator.clipboard.writeText(event.target.getAttribute('href')).then(() => {
            console.log('copied');
            document.getElementById("custom-tooltip").style.display = "inline";
            setTimeout(function () {
                document.getElementById("custom-tooltip").style.display = "none";
            }, 1000);
        }, 200)
    }, () => {
        alert('failed');
    });
}

