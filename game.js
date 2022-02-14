// An object which will handle the random messages.
const message = () => {
    return {
        __messages: {
            games: ['Dying Light 2, Stay Human', 'RimWorld', 'Minecraft', 'League of Legends', 'Mad Max', 'Far Cry 3', 'Fallout 4', 'Resident Evil', 'Assassin\'s Creed 3'],
            music: ['Help I\'m Alive - Metric', 'Dirty Little Animals - BONES UK', 'Where We Come From - Lecrae, Boi-1da', 'Do It To It - ACRAZE, Cherish', 'Producer Man - Lyn Lapid', 'abcdefu - GAYLE'],
            movies: ['The Hunger Games', 'Spider-Man', 'Superstore', 'Modern Family', 'Raising Dion', '12 Monkeys', 'Continuum', 'Falling Skies', 'Travelers'],
            advices: ['watch a movie', 'listen to a good song', 'play a good game', 'take a nap', 'complete a project', 'tell a friend you love them', 'spend time with your family', 'take care of them you love']
        },
        get messages() {
            return this.__messages;
        },
        randMess() {

        }
    }
}