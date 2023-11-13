import { ActivityIndicator, Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { Recipe } from '#types/models';
import { useSafeState } from '#root/src/hooks/useSafeState.hook';
import { colors } from '#root/src/constants/colors';

type Props = {
    recipe: Recipe;
}

const { width: screenWidth } = Dimensions.get('screen');

export const BackRecipeCard: React.FC<Props> = ({ recipe }) => {

    const [isImageLoading, setIsImageLoading] = useSafeState(true);

    const handleLoading = () => {
        setIsImageLoading(false);
    };

    return <View style={styles.container}>
        <View style={styles.imageContainer}>
            {
                isImageLoading && <ActivityIndicator size="large" color={colors.primary} style={styles.activityIndicator} />
            }
            <Image
                source={{ uri: recipe.image }}
                style={styles.recipeImage}
                onLoad={handleLoading}
                onError={handleLoading}
            />
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
        name: {
            fontSize: 12,
            marginBottom: 5,
            color: 'black',
            fontWeight: '700'
        },
        activityIndicator: {
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            alignItems: 'center',
            justifyContent: 'center',
        },
    }
);
