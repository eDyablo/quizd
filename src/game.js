function say(message) {
    document.write('<p>', message, '</p>');
}

function claim(message) {
    document.write('<h2>', message, '</h2>');
}

function yell(message) {
    document.write('<h1>', message, '</h1>');
}

function announceLevel(level) {
    document.write('<p id="level">Level ' + level +'</p>');
}

function level1() {
    announceLevel(1);
    let name = prompt('Enter your name');
    if (name) {
        if (name == 'Dart Wader') {
            document.bgColor = 'black';
            document.fgColor = 'white';
        }
        if (name == 'Luke Skywalker') {
            claim('I am your father, Luke');
        }
        say('Nice to meet you, ' + name);
        return true;
    }
    else {
        return false;
    }
}

function level2() {
    announceLevel(2);
    let age = prompt('Enter your age');
    if (age) {
        say('Your age is ' + age);
        if (age < 10) {
            say('You are too young');
            return false;
        }
        if (age > 100) {
            say('You are too old');
            return false;
        }
        else if (age >= 10 && age <= 100) {
            say('You can pass');
            return true;
        }
    }
    else {
        return false;
    }
}

function level3() {
    announceLevel(3);
    let moveForward = confirm('Can we move forward?');
    if (moveForward == false) {
        say('You decided to stop playing. Good bye!');
        return false;
    }
    else {
        say('Wow! Lets move on!');
        return true;
    }
}

function level4() {
    announceLevel(4);
    let answer = confirm('JavaScript is some kind of Java?');
    if (answer == false) {
        say('You are right! JavaScript is completelly different language');
        return true;
    }
    else {
        say('Wrong. It has nothing to do with Java');
        return false;
    }
}

function level5() {
    announceLevel(5);
    let answer = prompt('What data type is not supported by JavaScript?\n\n' +
        '1: numerical\n' +
        '2: textual\n' +
        '3: graphical\n' +
        '4: object\n');
    if (answer) {
        if (answer != 3) {
            say('Nope! JavaScript knows the type');
            return false;
        }
        else {
            say('Well done! Keep it up');
            return true;
        }
    }
    else {
        return false;
    }
}

function level6() {
    announceLevel(6);
    let answer = prompt('How would you write "hello" to the document?\n\n' +
        '1: alert("hello")\n' +
        '2: document.say("hello")\n' +
        '3: document.write("hello")\n' +
        '4: my.document("hello")\n');
    if (answer) {
        if (answer == 3) {
            say('Super! You know how to write things');
            return true;
        }
        else {
            say('Unfortunately it is not a correct way to say hello to the document');
            return false;
        }
    }
    else {
        return false;
    }
}

function level7() {
    announceLevel(7);
    let answer = prompt('What the expression A <= B means?\n\n' +
        '1: A is less then B\n' +
        '2: A is not equal to B\n' +
        '3: Move B to A\n' +
        '4: B is not less then A\n');
    if (answer) {
        if (answer == 4) {
            say('Fantastic! It is hard to confuse you');
            return true;
        }
        else {
            say('Oops! The expression means something else');
            return false;
        }
    }
    else {
        return false;
    }
}

function level8() {
    announceLevel(8);
    let answer = prompt('JavaScript is known as ECMAScript. What ECMA means?\n\n' +
        '1: Electronic Components and Maintenance Applications\n' +
        '2: Electronic Components of Microsoft and Apple\n' +
        '3: European Computer Maintainers Association\n' +
        '4: European Computer Manufacturers Association\n');
    if (answer) {
        if (answer == 4) {
            say('Unbelivable! You know more then others</p>');
            return true;
        }
        else {
            say('It was a hard question and you are failed');
            return false;
        }
    }
    else {
        return false;
    }
}

function level9() {
    announceLevel(8);
    let answer = prompt('What Nan means?\n\n' +
        '1: Number and name\n' +
        '2: Not a number\n' +
        '3: Not a name\n' +
        '4: Never ask noone\n');
    if (answer) {
        if (answer == 2) {
            say('Your have exceptional knowledge</p>');
            return true;
        }
        else {
            say('You were close');
            return false;
        }
    }
    else {
        return false;
    }
}

function level10() {
    announceLevel(10);
    let answer = prompt("What is your teacher's name?");
    if (answer) {
        say('' + answer + ' taught you very well</p>');
        return true;
    }
    else {
        return false;
    }
}

var levels = [
    level1,
    level2,
    level3,
    level4,
    level5,
    level6,
    level7,
    level8,
    level9,
    level10
]

let pass = levels.every(level => level())
if (pass) {
    yell('You win!')
}
else {
    yell('Game over')
}
