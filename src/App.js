import React from "react";
import {Provider  } from "react-redux";
import Gallery from "./Gallery/index";
import store from "./store";
const App=()=>{
    return(
        <Provider store={store}>
        <Gallery/>
        </Provider>
    )
}
export default App;