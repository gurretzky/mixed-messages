// Random number generator
const ranNum = (length) => {
    return Math.floor(Math.random() * length);
}

// An object which will handle the random messages.
const message = () => {
    return {
        messages: {
            games: ['Dying Light 2, Stay Human', 'RimWorld', 'Minecraft', 'League of Legends', 'Mad Max', 'Far Cry 3', 'Fallout 4', 'Resident Evil', 'Assassin\'s Creed 3'],
            music: ['Help I\'m Alive - Metric', 'Dirty Little Animals - BONES UK', 'Where We Come From - Lecrae, Boi-1da', 'Do It To It - ACRAZE, Cherish', 'Producer Man - Lyn Lapid', 'abcdefu - GAYLE', 'Knee Socks - Arctic Monkeys', 'How to Save a Life - The Fray', 'Soldi - Mahmood'],
            movies: ['The Hunger Games', 'Spider-Man', 'Superstore', 'Modern Family', 'Raising Dion', '12 Monkeys', 'Continuum', 'Falling Skies', 'Travelers'],
            advices: ['watch a movie', 'listen to a good song', 'play a good game', 'take a nap', 'complete a project', 'tell a friend you love them', 'spend time with your family', 'take care of them you love', 'drink a glass of water']
        },
        randMess() {
            let personalMessage = [];
            for (let key in this.messages) {
                let number = ranNum(this.messages[key].length);
                switch (key) {
                    case 'games':
                        personalMessage.push(`A good game you should play is ${this.messages['games'][number]}.`);
                        break;
                    case 'music':
                        personalMessage.push(`A good song you should listen to ${this.messages['music'][number]}.`);
                        break;
                    case 'movies':
                        personalMessage.push(`A good movie or show you should watch is ${this.messages['movies'][number]}.`);
                        break;
                    case 'advices':
                        personalMessage.push(`Today you should ${this.messages['advices'][number]}.`);
                        break;
                    default:
                        return console.log("Incorrect key in messages.");
                }
            }
            return personalMessage.join('\n');
        }
    }
}

let messageOfTheRun = message();

console.log(messageOfTheRun.randMess());