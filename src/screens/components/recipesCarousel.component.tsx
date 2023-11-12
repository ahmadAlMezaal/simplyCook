import { useSafeState } from '#root/src/hooks/useSafeState.hook';
import { recipesApi } from '#services/recipesApi';
import { Recipe } from '#types/models';
import { useEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { RecipeCard } from './recipeCard.component';
import { targetAllergens } from '#root/src/constants/constants';

const filterRecipes = (recipes: Recipe[]) => recipes.filter(recipe =>
    recipe.allergens.some(allergen => targetAllergens.includes(allergen))
);

export const RecipesCarousel: React.FC = () => {

    const [recipes, setRecipes] = useSafeState<Recipe[]>([]);

    useEffect(
        () => {
            const init = async () => {
                const response = await recipesApi.fetchRecipes();
                const filteredResult = filterRecipes(response.data);
                setRecipes(filteredResult);
            };
            init();
        },
        []
    );

    const keyExtractor = (item: Recipe, index: number) => `${item.id}_${String(index)}`;
    const renderItem = ({ item }: { item: Recipe }) => <RecipeCard recipe={item} />;
    const renderSeparator = () => <View style={{ marginRight: 22 }} />;

    return <FlatList
        contentContainerStyle={styles.flatListStyle}
        data={recipes}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        ItemSeparatorComponent={renderSeparator}
        horizontal
    />;
};

const styles = StyleSheet.create(
    {
        flatListStyle: {
            paddingHorizontal: 21,
            paddingTop: 17,
            paddingBottom: 43,
        }
    }
);
