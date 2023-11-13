import { useSafeState } from '#root/src/hooks/useSafeState.hook';
import { recipesApi } from '#services/recipesApi';
import { Recipe } from '#types/models';
import { useEffect } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import { FrontRecipeCard } from './frontRecipeCard.component';
import { targetAllergens } from '#root/src/constants/constants';
import { FlippableCard } from '#components/flippable.component';
import { BackRecipeCard } from './backRecipeCard.component';
import { colors } from '#root/src/constants/colors';

const filterRecipes = (recipes: Recipe[]) => recipes.filter(recipe =>
    recipe.allergens.some(allergen => targetAllergens.includes(allergen))
);

export const RecipesCarousel: React.FC = () => {

    const [recipes, setRecipes] = useSafeState<Recipe[]>([]);
    const [isLoading, setIsLoading] = useSafeState<boolean>(true);

    useEffect(
        () => {
            const init = async () => {
                try {
                    const response = await recipesApi.fetchRecipes();
                    const filteredResult = filterRecipes(response.data);
                    setRecipes(filteredResult);
                } catch {
                    console.log('Error fetching recipes');
                } finally {
                    setIsLoading(false);
                }
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

    if (isLoading) {
        return <ActivityIndicator size={'large'} style={styles.loader} color={colors.primary} />;
    }

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
        },
        loader: {
            height: 200,
        }
    }
);
