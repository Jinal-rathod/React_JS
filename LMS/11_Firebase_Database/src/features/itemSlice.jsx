import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../firebase/firebaseConfig";
import { ref, get, push, update, remove } from "firebase/database";

// 🔹 FETCH
export const fetchItems = createAsyncThunk("items/fetch", async () => {
    const snapshot = await get(ref(db, "items"));
    const data = snapshot.val() || {};

    return Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
    }));
});

// 🔹 ADD
export const addItem = createAsyncThunk("items/add", async (item) => {
    const newRef = await push(ref(db, "items"), item);
    return { id: newRef.key, ...item };
});

// 🔹 UPDATE
export const updateItem = createAsyncThunk("items/update", async (item) => {
    await update(ref(db, `items/${item.id}`), item);
    return item;
});

// 🔹 DELETE
export const deleteItem = createAsyncThunk("items/delete", async (id) => {
    await remove(ref(db, `items/${id}`));
    return id;
});

const itemSlice = createSlice({
    name: "items",
    initialState: {
        list: [],
        status: "idle",
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchItems.fulfilled, (state, action) => {
                state.list = action.payload;
            })
            .addCase(addItem.fulfilled, (state, action) => {
                state.list.push(action.payload);
            })
            .addCase(updateItem.fulfilled, (state, action) => {
                const i = state.list.findIndex((x) => x.id === action.payload.id);
                if (i !== -1) state.list[i] = action.payload;
            })
            .addCase(deleteItem.fulfilled, (state, action) => {
                state.list = state.list.filter((x) => x.id !== action.payload);
            });
    },
});

export default itemSlice.reducer;