import { combineReducers } from "redux";

import homeReducer from "./home/home.reducer";
import questerReducer from "./quester/quester.reducer";

export default combineReducers({ home: homeReducer, quester: questerReducer });
