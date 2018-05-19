function say(message) {
    let element = document.createElement('p');
    element.innerText = message;
    document.body.appendChild(element);
    element.scrollIntoView();
}

function claim(message) {
    let element = document.createElement('h2');
    element.innerText = message;
    document.body.appendChild(element);
    element.scrollIntoView();
}

function yell(message) {
    let element = document.createElement('h1');
    element.innerText = message;
    document.body.appendChild(element);
    element.scrollIntoView();
}

function announceLevel(level) {
    let element = document.createElement('p');
    element.id = 'level';
    element.style.color = 'blueviolet';
    element.innerText = 'Level ' + level;
    document.body.appendChild(element);
    element.scrollIntoView();
}

async function ask(message) {
    let dialog = new Promise(function(resolve, reject) {
        let dialogFrame = document.createElement('div');
        dialogFrame.innerHTML = '<p>' + message + '</p>';
        document.body.appendChild(dialogFrame);
        let input = document.createElement('input');
        input.type = 'text';
        input.onchange = function(event) {
            document.body.removeChild(dialogFrame);
            resolve(event.target.value);
        };
        dialogFrame.appendChild(input);
        input.scrollIntoView();
        input.focus();
    });
    return await dialog;
}

async function confirm(message) {
    let dialog = new Promise(function(resolve, reject) {
        let dialogFrame = document.createElement('div');
        dialogFrame.innerHTML = '<p>' + message + '</p>';
        let yesButton = document.createElement('button');
        yesButton.innerText = 'Yes';
        yesButton.onclick = function(event) {
            document.body.removeChild(dialogFrame);
            resolve(true);
        }
        let noButton = document.createElement('button');
        noButton.innerText = 'No';
        noButton.onclick = function(event) {
            document.body.removeChild(dialogFrame);
            resolve(false);
        }
        dialogFrame.appendChild(yesButton);
        dialogFrame.appendChild(noButton);
        yesButton.scrollIntoView();
        yesButton.focus();
        document.body.appendChild(dialogFrame);
    });
    return await dialog;
}

function right(message) {
    say(message);
    return true;
}

function wrong(message) {
    say(message);
    return false;
}

async function nameYourself() {
    let name = await ask('Enter your name');
    if (name) {
        if (name == 'Dart Wader') {
            document.bgColor = 'black';
            document.fgColor = 'white';
        }
        if (name == 'Luke Skywalker') {
            claim('I am your father, Luke');
        }
        return right('Nice to meet you, ' + name);
    }
    else {
        return false;
    }
}

async function howOldAreYou() {
    let age = await ask('Enter your age');
    if (age) {
        say('Your age is ' + age);
        if (age < 10) {
            return wrong('You are too young');
        }
        if (age > 100) {
            return wrong('You are too old');
        }
        else if (age >= 10 && age <= 100) {
            return right('You can pass');
        }
    }
    else {
        return false;
    }
}

async function canWeMoveForward() {
    let moveForward = await confirm('Can we move forward?');
    if (moveForward == false) {
        return wrong('You decided to stop playing. Good bye!');
    }
    else {
        return right('Wow! Lets move on!');
    }
}

async function javaScriptAndJava() {
    let answer = await confirm('JavaScript is some kind of Java?');
    if (answer == false) {
        return right('You are right! JavaScript is completelly different language');
    }
    else {
        return wrong('Wrong. It has nothing to do with Java');
    }
}

async function unSupportedType() {
    let answer = await ask('What data type is not supported by JavaScript?' +
        '</br>1: numerical\n' +
        '</br>2: textual\n' +
        '</br>3: graphical\n' +
        '</br>4: object\n');
    if (answer) {
        if (answer != 3) {
            return wrong('Nope! JavaScript knows the type');
        }
        else {
            return right('Well done! Keep it up');
        }
    }
    else {
        return false;
    }
}

async function howToWriteThings() {
    let answer = await ask('How would you write "hello" to the document?' +
        '</br>1: alert("hello")' +
        '</br>2: document.say("hello")' +
        '</br>3: document.write("hello")' +
        '</br>4: my.document("hello")');
    if (answer) {
        if (answer == 3) {
            return right('Super! You know how to write things');
        }
        else {
            return wrong('Unfortunately it is not a correct way to say hello to the document');
        }
    }
    else {
        return false;
    }
}

async function logicalExpression() {
    let answer = await ask('What the expression A <= B means?' +
        '</br>1: A is less then B' +
        '</br>2: A is not equal to B' +
        '</br>3: Move B to A' +
        '</br>4: B is not less then A');
    if (answer) {
        if (answer == 4) {
            return right('Fantastic! It is hard to confuse you');
        }
        else {
            return wrong('Oops! The expression means something else');
        }
    }
    else {
        return false;
    }
}

async function ecma() {
    let answer = await ask('JavaScript is known as ECMAScript. What ECMA means?' +
        '</br>1: Electronic Components and Maintenance Applications' +
        '</br>2: Electronic Components of Microsoft and Apple' +
        '</br>3: European Computer Maintainers Association' +
        '</br>4: European Computer Manufacturers Association');
    if (answer) {
        if (answer == 4) {
            return right('Unbelivable! You know more then others</p>');
        }
        else {
            return wrong('It was a hard question and you are failed');
        }
    }
    else {
        return false;
    }
}

async function notANumber() {
    let answer = await ask('What Nan means?' +
        '</br>1: Number and name' +
        '</br>2: Not a number' +
        '</br>3: Not a name' +
        '</br>4: Never ask noone');
    if (answer) {
        if (answer == 2) {
            return right('Your have exceptional knowledge');
        }
        else {
            return wrong('You were close');
        }
    }
    else {
        return false;
    }
}

async function yourTeacher() {
    let answer = await ask("What is your teacher's name?");
    if (answer) {
        return right('' + answer + ' taught you very well');
    }
    else {
        return false;
    }
}

async function game() {
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
    ];

    document.body.style.textAlign = 'center';

    yell('The Quiz');

    var pass = false;
    var index;
    for (index = 0; index < levels.length; index++) {
        var level = levels[index];
        announceLevel(index + 1);
        pass = await level();
        if (pass == false)
            break;
    }

    if (pass) {
        document.bgColor = 'darkseagreen';
        yell('You win!');
    }
    else {
        document.bgColor = 'lightcoral';
        yell('Game over');
        say('You passed ' + index + ' level(s)');
    }
}
