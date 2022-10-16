// Create a new store instance.
import {createStore} from "vuex";

export const store = createStore({
    state () {
        return {
            characters: []
        }
    },
    mutations: {
        setCharacters (state, characters) {
            state.characters = characters.slice(0,10)
        }
    },
    actions: {
        async getCharacters ({commit}) {
            let response = await fetch("https://rickandmortyapi.com/api/character")
            let data = await response.json()
            commit("setCharacters", data["results"])
        }
    }
})
