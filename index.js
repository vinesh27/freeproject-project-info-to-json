const inquirer = require('inquirer');
const fs = require('fs');

function askForInput() {
    inquirer
        .prompt([
            {
                "type": "input",
                "name": "name",
                "message": "What is the name of your project?"
            },
            {
                "type": "input",
                "name": "description",
                "message": "What is the description of your project?"
            },
            {
                "type": "input",
                "name": "language(s)",
                "message": "What is the language(s) your project is made in?"
            },
            {
                "type": "input",
                "name": "main",
                "message": "What is your projects main folder?"
            },
            {
                "type": "input",
                "name": "command",
                "message": "What is the command you run to run your project?"
            },
            {
                "type": "input",
                "name": "message",
                "message": "What is the message that should be displayed when you start up your project?"
            }
        ])
        .then(
            (answers) => {
                let langs = answers['language(s)'];
                if (langs.includes(',')) langs = langs.split(',');
                fs.writeFileSync('projectInfo.json',
                    JSON.stringify(
                        {
                            name: answers['name'],
                            description: answers['description'],
                            'language(s)': langs,
                            main: answers['main'],
                            command: answers['command'],
                            message: answers['message']
                        },
                        null,
                        '\t'
                    ))
            }
        ).catch(
            (err) => {
                console.log(err);
            }
        )
}
askForInput();
