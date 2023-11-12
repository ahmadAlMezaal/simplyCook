import { api } from './api.config';

export const fetchRecipes = () => {
    const route = 'recipes';
    return api.get(route);
};

export const recipesApi = {
    fetchRecipes
};
