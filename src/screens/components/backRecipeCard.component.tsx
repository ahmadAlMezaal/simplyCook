import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Recipe } from '#types/models';
import { SvgHeart } from '#root/src/icons/hear.icon';
import { useSafeState } from '#root/src/hooks/useSafeState.hook';
import { useCallback } from 'react';

type Props = {
    recipe: Recipe;
}

const { width: screenWidth } = Dimensions.get('screen');

export const BackRecipeCard: React.FC<Props> = ({ recipe }) => {

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
        <Text style={styles.name}>Cooking time: {recipe.cookingTime}</Text>
        <Text style={styles.name}>Average rating: {recipe.averageRating}</Text>
        <Text numberOfLines={2} style={styles.name}>Top Review: {recipe.topReview}</Text>
        <Text style={styles.name}>Chilli heat level: {recipe.chilli}/3</Text>
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
            marginBottom: 16,
        },
        recipeImage: {
            borderRadius: 5,
            width: screenWidth * 0.7,
            height: 182,
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
            fontSize: 12,
            marginBottom: 5,
            color: 'black',
            fontWeight: '700'
        },
    }
);
