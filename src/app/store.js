import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";

export default configureStore({
    reducer: {
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: true,
    }),
    
});

// middleware is deprecated
// ====================================== = = =
// import { middleware } from "@reduxjs/toolkit";
// middleware: getDefaultMiddleware({
//     serializableCheck: true,
// }),
