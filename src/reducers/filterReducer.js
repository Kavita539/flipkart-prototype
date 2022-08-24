import {
    filterActions
} from "../constants";

const {
    SORT_LOW_TO_HIGH,
    SORT_HIGH_TO_LOW,
    FILTER_CATEGORY,
    FILTER_SIZES,
    FILTER_IDEAL_FOR,
    CLEAR_ALL
} = filterActions;


const filterReducer = (state, action) => {
    switch (action.type) {
        case SORT_LOW_TO_HIGH:
            return {
                ...state, sortBy: "low-to-high"
            };

        case SORT_HIGH_TO_LOW:
            return {
                ...state, sortBy: "high-to-low"
            };

        case FILTER_CATEGORY:
            const doesCategoryExist = state.categories.includes(action.payload);
            return doesCategoryExist ?
                {
                    ...state,
                    categories: state.categories.filter(item => item !== action.payload),
                } :
                {
                    ...state,
                    categories: [...state.categories, action.payload]
                };

        case FILTER_SIZES:
            const isSizeAdded = state.sizes.includes(action.payload);
            return isSizeAdded ?
                {
                    ...state,
                    sizes: state.sizes.filter(item => item !== action.payload),
                } :
                {
                    ...state,
                    sizes: [...state.sizes, action.payload]
                };

        case FILTER_IDEAL_FOR:
            const isIdealFor = state.idealFor.includes(action.payload);
            return isIdealFor ?
                {
                    ...state,
                    idealFor: state.idealFor.filter(item => item !== action.payload),
                } :
                {
                    ...state,
                    idealFor: [...state.idealFor, action.payload]
                };

        case CLEAR_ALL:
            return {
                ...state, sortBy: "", categories: [], idealFor: [], sizes: []
            };

        default:
            return state;
    }
}

export {
    filterReducer
};