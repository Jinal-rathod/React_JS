import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
    fetchUsersAPI,
    addUserAPI,
    deleteUserAPI,
    updateUserAPI,
} from "./userAPI";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
    const res = await fetchUsersAPI();
    return res.data;
});

export const addUser = createAsyncThunk("users/addUser", async (user) => {
    const res = await addUserAPI(user);
    return res.data;
});

export const deleteUser = createAsyncThunk("users/deleteUser", async (id) => {
    await deleteUserAPI(id);
    return id;
});

export const updateUser = createAsyncThunk("users/updateUser", async (user) => {
    const res = await updateUserAPI(user);
    return res.data;
});

const userSlice = createSlice({
    name: "users",
    initialState: {
        list: [],
        status: "idle",
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // GET
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.list = action.payload;
            })

            // CREATE
            .addCase(addUser.fulfilled, (state, action) => {
                state.list.push(action.payload);
            })

            // DELETE
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.list = state.list.filter((u) => u.id !== action.payload);
            })

            // UPDATE
            .addCase(updateUser.fulfilled, (state, action) => {
                const index = state.list.findIndex(
                    (u) => u.id === action.payload.id
                );
                if (index !== -1) state.list[index] = action.payload;
            });
    },
});

export default userSlice.reducer;