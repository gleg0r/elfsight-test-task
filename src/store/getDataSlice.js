import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getCharacters = createAsyncThunk(
    'characters/getCharacters',
    async function() {
        const response = await fetch('https://rickandmortyapi.com/api/character');

        const data = await response.json();

        return data.results;
    }
);

const characterSlice = createSlice({
    name: 'characters',
    initialState: {
        characters: [],
        characterId: null,
        status: null,
        error: null,
        showModal: false,
    },
    reducers: {
        setCharacter(state, action) {
            state.characterId = action.payload;
        },
        setShowModal(state, action) {
            state.showModal = action.payload;
        },
        filterAllFilters(state) {
            let newData = state.characters;
            let n = newData.length; 
            for (let i = 1; i < n; i++) { 
                let current = newData[i]; 
                let j = i-1; 
                while (
                    (j > -1)
                    && ((current.name < newData[j].name)
                    || (current.status < newData[j].status)
                    || (current.species < newData[j].species)
                    || (current.type > newData[j].type)
                    || (current.gender < newData[j].gender))
                ) { 
                    newData[j+1] = newData[j]; 
                    j--; 
                } 
                newData[j+1] = current; 
            }
        },
        filterGender(state) {
            let newData = state.characters;
            let n = newData.length; 
            for (let i = 1; i < n; i++) { 
                let current = newData[i]; 
                let j = i-1; 
                while ((j > -1) && (current.gender < newData[j].gender)) { 
                    newData[j+1] = newData[j]; 
                    j--; 
                } 
                newData[j+1] = current; 
            } 
        },
        filterName(state) {
            let newData = state.characters;
            let n = newData.length; 
            for (let i = 1; i < n; i++) { 
                let current = newData[i]; 
                let j = i-1; 
                while ((j > -1) && (current.name < newData[j].name)) { 
                    newData[j+1] = newData[j]; 
                    j--; 
                } 
                newData[j+1] = current; 
            } 
        },
        filterStatus(state) {
            let newData = state.characters;
            let n = newData.length; 
            for (let i = 1; i < n; i++) { 
                let current = newData[i]; 
                let j = i-1; 
                while ((j > -1) && (current.status < newData[j].status)) { 
                    newData[j+1] = newData[j]; 
                    j--; 
                } 
                newData[j+1] = current; 
            } 
        },
        filterSpecies(state) {
            let newData = state.characters;
            let n = newData.length; 
            for (let i = 1; i < n; i++) { 
                let current = newData[i]; 
                let j = i-1; 
                while ((j > -1) && (current.species < newData[j].species)) { 
                    newData[j+1] = newData[j]; 
                    j--; 
                } 
                newData[j+1] = current; 
            } 
        },
        filterType(state) {
            let newData = state.characters;
            let n = newData.length; 
            for (let i = 1; i < n; i++) { 
                let current = newData[i]; 
                let j = i-1; 
                while ((j > -1) && (current.type > newData[j].type)) { 
                    newData[j+1] = newData[j]; 
                    j--; 
                } 
                newData[j+1] = current; 
            } 
        }
    },
    extraReducers: builder => {
        builder.addCase(getCharacters.pending, state => {
            state.status = 'loading';
            state.error = 'null';
        })
        builder.addCase(getCharacters.fulfilled, (state, action) => {
            state.status = 'resolved';
            state.characters = action.payload;
        })
        builder.addCase(getCharacters.rejected, (state) => {
            state.status = 'error';
        })
    },
})

export const { 
    getData,
    setCharacter,
    setShowModal,
    filterGender,
    filterName,
    filterStatus,
    filterSpecies,
    filterType,
    filterAllFilters 
} = characterSlice.actions;

export default characterSlice.reducer;