import { combineReducers } from 'redux';

import movieReducer from './movieReducer';
import favoritesReducer from './favoritesReducer';

const reducers = {
	movie: movieReducer,
	favorites: favoritesReducer,
}

const rootReducer = combineReducers(reducers);;

export default rootReducer;