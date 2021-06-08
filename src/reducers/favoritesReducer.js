import { ADD_FAVORITE, TOGGLE_FAVORITES, REMOVE_FAVORITE } from '../actions/favoritesActions'

const initialState = {
	favorites: [],
	displayFavorites: true,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_FAVORITES:
			return {
				...state,
				displayFavorites: !state.displayFavorites,
			};

		case ADD_FAVORITE:
			console.log('wowoo')
			return {
				...state,
				favorites: [...state.favorites, action.payload],
			};

		case REMOVE_FAVORITE:
			return {
				...state,
				favorites: state.favorites.filter(f => f.id !== action.payload),
			}

		default:
			return state;
	}
};

export default reducer;