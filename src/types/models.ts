import { AppActionsTypes, RadioButtonListType } from './enum';

export type Bullet = {
    title: string;
    isStarted: boolean;
    isCompleted: boolean;
}

export type RadioButtonOption = {
    title: string;
    icon?: (isSelected: boolean) => JSX.Element;
}

export type RadioButtonOptionList = {
    items: RadioButtonOption[];
    title: string;
    type: RadioButtonListType;
}

export type Slug = {
    twoPerson: {
        regular: {
            main?: string[];
            suffix?: string[];
        };
    },
    fourPerson: {
        regular: {
            main?: string[];
            suffix?: string[];
            optional?: string[];
            suffixOptional?: string[];
        }
    }
}

export type Recipe = {
    id: number;
    name: string;
    averageRating: number;
    cookingTime: number;
    image: string;
    admin: null;
    slug: Slug;
    description: string;
    isOrderable: number;
    shortDescription: string;
    numberOfRatings: string;
    numberOfRatingsRaw: number;
    chilli: number;
    preferences: string[];
    topRated: null;
    cheapEats: null;
    new: boolean;
    improved: boolean;
    imageTall: string;
    inStock: false;
    servings: number;
    cuisineType: string;
    vegan: boolean;
    vegetarian: boolean;
    lowCal: boolean;
    topReview: string;
    calories: number;
    fourPersonCalories: number;
    justAdd: Slug;
    mainIngredients: string[];
    allergens: string[];
    childAllergens: [];
    imageFormatGroup: null;
    imageTallFormatGroup: null;
    favouritedByCurrentCustomer: null;
    orderedByCurrentCustomer: null;
    customerReviewForRecipe: null;
    tag: {
        name: string;
        slug: string;
        hexClr: string;
        iconUrl: string;
    };
    numberOfTimesCookedByCustomer: number;
    lastCooked: null;
    boxRecipeId: null;
    toggleServings: null;
    toggleVegRegular: null;
    recipeId: null;
    enabled: number
}

export type AppContextType = {
    favoriteRecipesIds: { [key: string]: number };
    addRecipeToFavorites: (recipeId: number) => void;
    removeRecipeToFavorites: (recipeId: number) => void;
}

export type AppAction =
    { type: AppActionsTypes.ADD_RECIPE_TO_FAVORITES; payload: number } |
    { type: AppActionsTypes.REMOVE_RECIPE_TO_FAVORITES; payload: number }
