/* eslint-disable @typescript-eslint/no-unused-vars */

import { AppActionsTypes } from '#types/enum';
import { AppAction, AppContextType } from '#types/models';

export const initialState: AppContextType = {
    favoriteRecipesIds: {},
    addRecipeToFavorites: (_recipeId: number) => { },
    removeRecipeToFavorites: (_recipeId: number) => { },
};

export const appReducer = (state = initialState, action: AppAction) => {
    switch (action.type) {

        case AppActionsTypes.ADD_RECIPE_TO_FAVORITES: {
            return {
                ...state,
                favoriteRecipesIds: { ...state.favoriteRecipesIds, [action.payload]: action.payload }
            };
        }

        case AppActionsTypes.REMOVE_RECIPE_TO_FAVORITES: {
            const updatedFavoriteRecipesIds = { ...state.favoriteRecipesIds };
            delete updatedFavoriteRecipesIds[action.payload];
            return { ...state, favoriteRecipesIds: updatedFavoriteRecipesIds };
        }

        default:
            return { ...state };
    }
};
