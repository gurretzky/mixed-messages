// An object which will handle the random messages.
const message = () => {
    return {
        __messages: {
            games: ['Dying Light 2, Stay Human', 'RimWorld', 'Minecraft', ],
            music: [],
            movies: [],
            advices: []
        },
        get messages() {
            return this.__messages;
        },
        randMess() {

        }
    }
}