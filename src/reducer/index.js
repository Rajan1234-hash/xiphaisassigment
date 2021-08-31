

import {combineReducers} from "redux";
import {Photocall} from "./home.js";
import {AlbumCall} from "./albumresp.js"

const rootReducer= combineReducers({
    Photocall,AlbumCall
})

export default rootReducer;