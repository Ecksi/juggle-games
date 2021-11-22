import { createSlice } from '@reduxjs/toolkit'
import jugglingTricks from "../assets/JugglingTricks/JugglingTricks.json"

export const jugglingTricksSlice = createSlice({
    name: 'jugglingTricks',
    initialState: {
        value: jugglingTricks
    }
})

export default jugglingTricksSlice.reducer