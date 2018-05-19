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
        
        let input = document.createElement('input');
        input.type = 'text';
        input.onchange = function(event) {
            document.body.removeChild(dialogFrame);
            resolve(event.target.value);
        };
        dialogFrame.appendChild(input);
        document.body.appendChild(dialogFrame);
        dialogFrame.scrollIntoView();
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
        yesButton.focus();
        document.body.appendChild(dialogFrame);
        dialogFrame.scrollIntoView();
    });
    return await dialog;
}

async function choose(message, choices) {
    let dialog = new Promise(function(resolve, reject) {
        let dialogFrame = document.createElement('div');
        dialogFrame.style.display = 'inline-block';
        dialogFrame.innerHTML = '<p>' + message + '</p>';
        let choicesList = document.createElement('ul');
        choicesList.style.listStyleType = 'none';
        choicesList.style.paddingLeft = 0;
        choicesList.style.listStyle = 'none';
        choicesList.style.display = 'inline=block';
        dialogFrame.appendChild(choicesList);
        for (var i = 0; i < choices.length; i++) {
            let choiceLine = document.createElement('li');
            choiceLine.innerText = choices[i];
            choiceLine.id = i + 1;
            choiceLine.style.lineHeight = '2';
            choiceLine.onmouseover = function(event) {
                event.target.style.fontWeight = 'bold';
                event.target.style.fontSize = '120%';
            }
            choiceLine.onmouseout = function(event) {
                event.target.style.fontWeight = 'normal';
                event.target.style.fontSize = '100%';
            }
            choiceLine.onclick = function(event) {
                document.body.removeChild(dialogFrame);
                resolve(event.target.id);
            }
            choicesList.appendChild(choiceLine);
        }
        document.body.appendChild(dialogFrame);
        dialogFrame.scrollIntoView();
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
    let answer = await choose('What data type is not supported by JavaScript?',
            ['numerical',
            'textual',
            'graphical',
            'object']);
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
    let answer = await choose('How would you write "hello" to the document?',
        ['alert("hello")',
        'document.say("hello")',
        'document.write("hello")',
        'document("hello")']);
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
    let answer = await choose('What the expression A <= B means?',
        ['A is less then B',
        'A is not equal to B',
        'Move B to A',
        'B is not less then A']);
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
    let answer = await choose('JavaScript is known as ECMAScript. What ECMA means?',
        ['Electronic Components and Maintenance Applications',
        'Electronic Components of Microsoft and Apple',
        'European Computer Maintainers Association',
        'European Computer Manufacturers Association']);
    if (answer) {
        if (answer == 4) {
            return right('Unbelivable! You know more then others');
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
    let answer = await choose('What Nan means?',
        ['Number and name',
        'Not a number',
        'Not a name',
        'Never ask noone']);
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

async function howToStartJavaScript() {
    let answer = await choose('How can we start or include JavaScript?',
        ['language tag',
        'none of above',
        'script tag',
        'javascript tag']);
    if (answer == 3) {
        return right('Right. You know how to start javascript');
    }
    else {
        return wrong('Nope. You have to review javascript basics');
    }
}

async function caseSensitivity() {
    let answer = await choose('Is JavaScript case sensitive?',
        ['True', 'False']);
    if (answer == 1) {
        return right('Sure. It is case sensitive');
    }
    else {
        return wrong('Please remember that JavaScript is case sensitive');
    }
}

async function game() {
    let levels = [
        //nameYourself,
        //howOldAreYou,
        //canWeMoveForward,
        //javaScriptAndJava,
        howToStartJavaScript,
        caseSensitivity,
        howToWriteThings,
        unSupportedType,
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
