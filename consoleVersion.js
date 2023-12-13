import giveAnswer from './giveAnswer.js';

import { exit } from "process"
import readline from "readline"

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

function ask(question) {
  rl.question(question, () => {
    rl.write(giveAnswer() + "\n")
    // ask(question)
    exit(0)
  })
}

ask("What is your question?\n> ")