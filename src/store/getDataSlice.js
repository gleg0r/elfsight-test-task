import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getCharacters = createAsyncThunk(
    'characters/getCharacters',
    async function() {
        const response = await fetch('https://rickandmortyapi.com/api/character/?page=2');

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
} = characterSlice.actions;

export default characterSlice.reducer;