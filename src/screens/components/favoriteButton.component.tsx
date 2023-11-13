import { useAppContext } from '#root/src/context/providers/app.provider';
import { useSafeState } from '#root/src/hooks/useSafeState.hook';
import { SvgHeart } from '#root/src/icons/hear.icon';
import { Pressable, StyleSheet } from 'react-native';

type Props = {
    disabled?: boolean;
    recipeId: number;
}

export const FavoriteButton: React.FC<Props> = (props) => {

    const [isLoading, setIsLoading] = useSafeState<boolean>(false);
    const { favoriteRecipesIds, addRecipeToFavorites, removeRecipeToFavorites } = useAppContext();

    const toggleHeart = () => {
        setIsLoading(true);
        if (favoriteRecipesIds[props.recipeId]) {
            removeRecipeToFavorites(props.recipeId);
        } else {
            addRecipeToFavorites(props.recipeId);
        }
        setIsLoading(false);
    };

    return <Pressable disabled={isLoading} style={styles.heartContainer} onPress={toggleHeart}>
        <SvgHeart isSelected={!!favoriteRecipesIds[props.recipeId]} />
    </Pressable>;
};

const styles = StyleSheet.create(
    {
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
            padding: 15,
        },
    }
);
