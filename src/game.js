let gameOver = '<h1>Game over</h1>'
// Level 1
document.write('<p id="level">Level 1</p>');
let name = prompt('Enter your name');
if (name) {
    if (name == 'Dart Wader') {
        document.bgColor = 'black';
        document.fgColor = 'white';
    }
    if (name == 'Luke Skywalker') {
        document.write('<h2>I am your father, Luke</h2>');
    }
    document.write('<p>Nice to meet you, ' + name + '</p>');
    // Level 2
    document.write('<p id="level">Level 2');
    let age = prompt('Enter your age');
    if (age) {
        document.write('<p>Your age is ' + age + '</p>');
        if (age < 10) {
            document.write('<p>You are too young</p>');
            document.write(gameOver);
        }
        if (age > 100) {
            document.write('<p>You are toooooo old</p>');
            document.write(gameOver);
        }
        else if (age >= 10 && age <= 100) {
            document.write('<p>You can pass</p>');
            // Level 3
            document.write('<p id="level">Level 3</p>');
            let moveForward = confirm('Can we move forward?');
            if (moveForward == false) {
                document.write('<p>You decided to stop playing. Good bye!</p>');
                document.write(gameOver); 
            }
            else {
                document.write('<p>Wow! Lets move on!</p>')
                // Level 4
                document.write('<p id="level">Level 4</p>');
                let answer = confirm('JavaScript is some kind of Java?');
                if (answer == false) {
                    document.write('<p>You are right! JavaScript is completelly different language</p>')
                    // Level 5
                    document.write('<p id="level">Level 5</p>');
                    let answer = prompt('What data type is not supported by JavaScript?\n\n' +
                        '1: numerical\n' +
                        '2: textual\n' +
                        '3: graphical\n' +
                        '4: object\n');
                    if (answer) {
                        if (answer != 3) {
                            document.write('<p>Nope! JavaScript knows the type</p>');
                            document.write(gameOver);
                        }
                        else {
                            document.write('Well done! Keep it up')
                            // Level 6
                            document.write('<p id="level">Level 6</p>');
                            let answer = prompt('How would you write "hello" to the document?\n\n' +
                                '1: alert("hello")\n' +
                                '2: document.say("hello")\n' +
                                '3: document.write("hello")\n' +
                                '4: my.document("hello")\n');
                            if (answer) {
                                if (answer == 3) {
                                    document.write('<p>Super! You know how to write things</p>');
                                    // Level 7
                                    document.write('<p id="level">Level 7</p>');
                                    let answer = prompt('What the expression A <= B means?\n\n' +
                                        '1: A is less then B\n' +
                                        '2: A is not equal to B\n' +
                                        '3: Move B to A\n' +
                                        '4: B is not less then A\n');
                                    if (answer) {
                                        if (answer == 4) {
                                            document.write('<p>Fantastic! It is hard to confuse you</p>')
                                            // Level 8
                                            document.write('<p id="level">Level 8</p>');
                                            let answer = prompt('JavaScript is known as ECMAScript. What ECMA means?\n\n' +
                                                '1: Electronic Components and Maintenance Applications\n' +
                                                '2: Electronic Components of Microsoft and Apple\n' +
                                                '3: European Computer Maintainers Association\n' +
                                                '4: European Computer Manufacturers Association\n');
                                            if (answer) {
                                                if (answer == 4) {
                                                    document.write('<p>Unbelivable! You know more then others</p>')
                                                    // Level 9
                                                    document.write('<p id="level">Level 8</p>');
                                                    let answer = prompt('What Nan means?\n\n' +
                                                        '1: Number and name\n' +
                                                        '2: Not a number\n' +
                                                        '3: Not a name\n' +
                                                        '4: Never ask noone\n');
                                                    if (answer) {
                                                        if (answer == 2) {
                                                            document.write('<p>Your have exceptional knowledge</p>')
                                                            // Level 10
                                                            let answer = prompt("What is your teacher's name?");
                                                            if (answer) {
                                                                document.write('<p>' + answer + ' taught you very well</p>');
                                                                document.write('<h1>You win!</h1>')
                                                            }
                                                            else {
                                                                document.write(gameOver);
                                                            }
                                                        }
                                                        else {
                                                            document.write('<p>You were close</p>')
                                                            document.write(gameOver);
                                                        }
                                                    }
                                                    else {
                                                        document.write(gameOver);
                                                    }
                                                }
                                                else {
                                                    document.write('<p>It was a hard question and you are failed</p>')
                                                    document.write(gameOver);
                                                }
                                            }
                                            else {
                                                document.write(gameOver);
                                            }
                                        }
                                        else {
                                            document.write('<p>Oops! The expression means something else</p>')
                                            document.write(gameOver);
                                        }
                                    }
                                    else {
                                        document.write(gameOver);
                                    }
                                }
                                else {
                                    document.write('<p>Unfortunately it is not a correct way to say hello to the document</p>')
                                    document.write(gameOver);
                                }
                            }
                            else {
                                document.write(gameOver);
                            }
                        }
                    }
                    else {
                        document.write(gameOver);
                    }
                }
                else {
                    document.write('<p>It has nothing to do with Java</p>');
                    document.write(gameOver); 
                }
            }
        }
        else {
            document.write(gameOver);
        }
    }
    else {
        document.write(gameOver);
    }
}
else {
    document.write(gameOver);
}