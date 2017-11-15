function userClickRock() {
    document.getElementById('user-choice').src = "images/rock.png"
}

function userClickPaper() {
    document.getElementById('user-choice').src = "images/paper.png"
}

function userClickScissors() {
    document.getElementById('user-choice').src = "images/scissors.png"
}

var imageArray = ['rock', 'paper', 'scissors']

function compChoice() {
num = Math.floor(Math.random() * imageArray.length)
img = imageArray[num]
imgString = 'images/' + img + '.png'
document.getElementById('comp-choice').src = imgString
}
