export default function giveAnswer() {
  const affirmative = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes"    
  ]
  
  const negative = [
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
  ];

  const non_committal = [
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again"
  ]

  const answerTypes = [affirmative, negative, non_committal]

  const getType = () => {
    const num = Math.random()
    if (num < .33) {
      return 0
    }
    else if (num < 0.66) {
      return 1
    }
    return 2
  }
  const answerType = getType()
  const len = answerTypes[answerType].length
  const randomIndex = Math.floor(Math.random() * (len -1))
  const answer = answerTypes[answerType][randomIndex]
  return answer
}