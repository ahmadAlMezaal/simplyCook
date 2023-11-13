import { useSafeState } from '#root/src/hooks/useSafeState.hook';
import { recipesApi } from '#services/recipesApi';
import { Recipe } from '#types/models';
import { useEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { FrontRecipeCard } from './frontRecipeCard.component';
import { targetAllergens } from '#root/src/constants/constants';
import { FlippableCard } from '#components/flippable.component';
import { BackRecipeCard } from './backRecipeCard.component';

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
    const renderItem = ({ item }: { item: Recipe }) => <FlippableCard
        back={<BackRecipeCard recipe={item} />}
        front={<FrontRecipeCard recipe={item} />}
    />;
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
            paddingTop: 25,
            paddingBottom: 43,
        }
    }
);
