// function handleClick() {
//     alert("I got clicked")
// }
// document.querySelector("button").addEventListener("click", handleClick)
// // Note: no brackets on function otherwise will run function as event listener is being added

// // Can also be written as an annoymous function
// document.querySelector("button").addEventListener("click", function () {
//     alert("I got clicked")
// })



// for (let i = 0; i < (document.querySelectorAll("button").length); i++ ) {
//     document.querySelectorAll("button")[i].addEventListener("click", function () {
//         alert("I got clicked")
//     })
// }


for (let i = 0; i < (document.querySelectorAll(".drum").length); i++ ) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonInnerHTML = this.innerHTML;
        
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});


function makeSound(key) {
    switch (key) {
        case "w": 
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play()
        break;

        case "a": 
            var crash = new Audio("sounds/crash.mp3");
            crash.play()
        break;

        case "s": 
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play()
        break;

        case "d": 
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play()
        break;

        case "j": 
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play()
        break;

        case "k": 
            var snare = new Audio("sounds/snare.mp3");
            snare.play()
        break;

        case "l": 
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play()
        break;

        default: console.log(buttonInnerHTML)

    }
}

function buttonAnimation(key) {
    var currentKey = document.querySelector("." + key)
    currentKey.classList.add("pressed");

    setTimeout(function(){
        currentKey.classList.remove("pressed")
    }, 100);
}


