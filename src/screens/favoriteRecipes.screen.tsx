import { StyleSheet, View } from 'react-native';
import { useAppContext } from '../context/providers/app.provider';
import { useEffect } from 'react';
import { useSafeState } from '../hooks/useSafeState.hook';
import { Recipe } from '#types/models';
import { recipesApi } from '#services/recipesApi';
import { FlatList } from 'react-native-gesture-handler';
import { BackRecipeCard } from './components/backRecipeCard.component';
import { FrontRecipeCard } from './components/frontRecipeCard.component';
import { FlippableCard } from '#components/flippable.component';
import { Loader } from '#components/loader.component';

export const FavoriteRecipesScreen: React.FC = () => {

    const { favoriteRecipesIds } = useAppContext();

    const [recipes, setRecipes] = useSafeState<Recipe[]>([]);
    const [isLoading, setIsLoading] = useSafeState<boolean>(false);

    useEffect(
        () => {
            const fetchFavoriteRecipes = async () => {
                const recipeIds = Object.keys(favoriteRecipesIds).map(id => Number(id));
                setIsLoading(true);
                try {
                    const recipePromises = recipeIds.map(id => recipesApi.fetchRecipeById(id));
                    const recipeResponses = await Promise.all(recipePromises);
                    const recipesData = recipeResponses.map(response => response.data);
                    setRecipes(recipesData);
                } catch {

                } finally {
                    setIsLoading(false);
                }
            };

            fetchFavoriteRecipes();
        },
        [favoriteRecipesIds]
    );

    const keyExtractor = (item: Recipe, index: number) => `${item.id}_${String(index)}`;
    const renderItem = ({ item }: { item: Recipe }) => <FlippableCard
        back={<BackRecipeCard recipe={item} />}
        front={<FrontRecipeCard recipe={item} />}
    />;
    const renderSeparator = () => <View style={{ marginBottom: '15%' }} />;

    if (isLoading) {
        return <Loader />;
    }

    return <View style={styles.container}>
        <FlatList
            contentContainerStyle={styles.flatListStyle}
            data={recipes}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            ItemSeparatorComponent={renderSeparator}
        />
    </View>;
};

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: 'white',
        },
        flatListStyle: {
            flexGrow: 1,
            padding: 16,
            alignSelf: 'center',
        }
    }
);
