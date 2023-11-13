import { createContext, useReducer, useCallback, useMemo, useContext } from 'react';
import { appReducer, initialState } from '../reducers/app.reducer';
import { AppActionsTypes } from '#types/enum';
import { AppContextType } from '#types/models';

const AppContext = createContext<AppContextType>(initialState);

type AppProviderProps = {
    children: React.ReactNode;
};

export const AppProvider: React.FC<AppProviderProps | any> = ({ children }) => {

    const [state, dispatch] = useReducer(appReducer, initialState);

    const addRecipeToFavorites = useCallback(
        (recipeId: number) => {
            dispatch(
                {
                    type: AppActionsTypes.ADD_RECIPE_TO_FAVORITES,
                    payload: recipeId,
                }
            );
        },
        [dispatch]
    );

    const removeRecipeToFavorites = useCallback(
        (recipeId: number) => {
            dispatch(
                {
                    type: AppActionsTypes.REMOVE_RECIPE_TO_FAVORITES,
                    payload: recipeId,
                }
            );
        },
        [dispatch]
    );

    const value = useMemo(
        () => (
            {
                favoriteRecipesIds: state.favoriteRecipesIds,
                addRecipeToFavorites,
                removeRecipeToFavorites,
            }
        ),
        [
            state.favoriteRecipesIds,
            addRecipeToFavorites,
            removeRecipeToFavorites,
        ]
    );

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>;
};

export const useAppContext = () => {
    const context = useContext(AppContext);

    if (context === undefined) {
        throw new Error('useAppContext must be used within AppContext');
    }

    return context;
};
