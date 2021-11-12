import { createStore } from "redux";
import reducers from "./reducers";

const persistedState = localStorage.getItem("users") &&
                       JSON.parse(localStorage.getItem("users")) || {} ;
                       

const store = createStore(reducers, persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
    localStorage.setItem("users", JSON.stringify(store.getState()));
});

export default store;