import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Recipe } from '#types/models';
import { SvgHeart } from '#root/src/icons/hear.icon';
import { useSafeState } from '#root/src/hooks/useSafeState.hook';
import { useCallback } from 'react';

type Props = {
    recipe: Recipe;
}

const { width: screenWidth } = Dimensions.get('screen');

export const RecipeCard: React.FC<Props> = ({ recipe }) => {

    const [isFavorite, setIsFavorite] = useSafeState<boolean>(false);

    const handleAddRecipeToFavorites = useCallback(
        () => {
            setIsFavorite(true);
        },
        []
    );

    return <View style={styles.container}>
        <View style={styles.imageContainer}>
            <Image source={{ uri: recipe.image }} style={styles.recipeImage} />
            <Pressable style={styles.heartContainer} onPress={handleAddRecipeToFavorites}>
                <SvgHeart isSelected={isFavorite} />
            </Pressable>
        </View>
        <Text style={styles.name}>{recipe.name}</Text>
        <Text style={styles.shortDesc}>{recipe.shortDescription}</Text>
    </View>;
};

const styles = StyleSheet.create(
    {
        container: {
            width: screenWidth * 0.7,
        },
        imageContainer: {
            width: screenWidth * 0.7,
            height: 182,
        },
        recipeImage: {
            borderRadius: 5,
            width: '100%',
            height: '100%',
            paddingBottom: 16,
        },
        heartContainer: {
            width: 45,
            height: 45,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            backgroundColor: 'white',
            borderRadius: 25,
            bottom: 10,
            right: 10,
        },
        name: {
            marginTop: 16,
            marginBottom: 5,
            color: 'black',
            fontWeight: '700'
        },
        shortDesc: {
            color: '#414042',
            fontSize: 13,
            flexShrink: 1,
        }
    }
);
