function say(message) {
    document.write('<p>', message, '</p>')
}

function claim(message) {
    document.write('<h2>', message, '</h2>')
}

function yell(message) {
    document.write('<h1>', message, '</h1>')
}

function announceLevel(level) {
    document.write('<p id="level" style="color:blueviolet">Level ' + level +'</p>')
}

function right(message) {
    say(message)
    return true
}

function wrong(message) {
    say(message)
    return false
}

function nameYourself() {
    let name = prompt('Enter your name')
    if (name) {
        if (name == 'Dart Wader') {
            document.bgColor = 'black'
            document.fgColor = 'white'
        }
        if (name == 'Luke Skywalker') {
            claim('I am your father, Luke')
        }
        return right('Nice to meet you, ' + name)
    }
    else {
        return false
    }
}

function howOldAreYou() {
    let age = prompt('Enter your age')
    if (age) {
        say('Your age is ' + age)
        if (age < 10) {
            return wrong('You are too young')
        }
        if (age > 100) {
            return wrong('You are too old')
        }
        else if (age >= 10 && age <= 100) {
            return right('You can pass')
        }
    }
    else {
        return false
    }
}

function canWeMoveForward() {
    let moveForward = confirm('Can we move forward?')
    if (moveForward == false) {
        return wrong('You decided to stop playing. Good bye!')
    }
    else {
        return right('Wow! Lets move on!')
    }
}

function javaScriptAndJava() {
    let answer = confirm('JavaScript is some kind of Java?')
    if (answer == false) {
        return right('You are right! JavaScript is completelly different language')
    }
    else {
        return wrong('Wrong. It has nothing to do with Java')
    }
}

function unSupportedType() {
    let answer = prompt('What data type is not supported by JavaScript?\n\n' +
        '1: numerical\n' +
        '2: textual\n' +
        '3: graphical\n' +
        '4: object\n')
    if (answer) {
        if (answer != 3) {
            return wrong('Nope! JavaScript knows the type')
        }
        else {
            return right('Well done! Keep it up')
        }
    }
    else {
        return false
    }
}

function howToWriteThings() {
    let answer = prompt('How would you write "hello" to the document?\n\n' +
        '1: alert("hello")\n' +
        '2: document.say("hello")\n' +
        '3: document.write("hello")\n' +
        '4: my.document("hello")\n')
    if (answer) {
        if (answer == 3) {
            return right('Super! You know how to write things')
        }
        else {
            return wrong('Unfortunately it is not a correct way to say hello to the document')
        }
    }
    else {
        return false
    }
}

function logicalExpression() {
    let answer = prompt('What the expression A <= B means?\n\n' +
        '1: A is less then B\n' +
        '2: A is not equal to B\n' +
        '3: Move B to A\n' +
        '4: B is not less then A\n')
    if (answer) {
        if (answer == 4) {
            return right('Fantastic! It is hard to confuse you')
        }
        else {
            return wrong('Oops! The expression means something else')
        }
    }
    else {
        return false
    }
}

function ecma() {
    let answer = prompt('JavaScript is known as ECMAScript. What ECMA means?\n\n' +
        '1: Electronic Components and Maintenance Applications\n' +
        '2: Electronic Components of Microsoft and Apple\n' +
        '3: European Computer Maintainers Association\n' +
        '4: European Computer Manufacturers Association\n')
    if (answer) {
        if (answer == 4) {
            return right('Unbelivable! You know more then others</p>')
        }
        else {
            return wrong('It was a hard question and you are failed')
        }
    }
    else {
        return false
    }
}

function notANumber() {
    let answer = prompt('What Nan means?\n\n' +
        '1: Number and name\n' +
        '2: Not a number\n' +
        '3: Not a name\n' +
        '4: Never ask noone\n')
    if (answer) {
        if (answer == 2) {
            return right('Your have exceptional knowledge</p>')
        }
        else {
            return wrong('You were close')
        }
    }
    else {
        return false
    }
}

function yourTeacher() {
    let answer = prompt("What is your teacher's name?")
    if (answer) {
        return right('' + answer + ' taught you very well</p>')
    }
    else {
        return false
    }
}

var levels = [
    nameYourself,
    howOldAreYou,
    canWeMoveForward,
    javaScriptAndJava,
    unSupportedType,
    howToWriteThings,
    logicalExpression,
    ecma,
    notANumber,
    yourTeacher
]

document.body.style.textAlign = 'center'

yell('The Game')

var pass = false
for (let index = 0; index < levels.length; index++) {
    var level = levels[index];
    announceLevel(index + 1)
    pass = level()
    if (pass == false)
        break
}

if (pass) {
    yell('You win!')
}
else {
    yell('Game over')
}
