import { HomeScreen } from '#screens/home.screen';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, Pressable } from 'react-native';
import { SvgHeart } from '../icons/hear.icon';
import { FavoriteRecipesScreen } from '#screens/favoriteRecipes.screen';
import { SvgBack } from '../icons/back.icon';

const Stack = createStackNavigator();

export const HomeStack: React.FC = () => {

    return <Stack.Navigator>
        <Stack.Screen
            options={
                ({ navigation }: any) => (
                    {
                        headerShown: true,
                        headerTitleAlign: 'center',
                        headerTitle: () => <Image
                            style={
                                {
                                    width: 200,
                                    height: 40,
                                }
                            }
                            source={require('#assets/sc-logo.png')} />,
                        headerStyle: {
                            backgroundColor: 'white',
                            shadowOpacity: 0,
                            elevation: 0,
                        },
                        headerRight: () => <Pressable style={{ marginRight: 16 }} onPress={() => navigation.push('FavoriteRecipes')}>
                            <SvgHeart isSelected />
                        </Pressable>
                    }
                )
            }
            name="Home"
            component={HomeScreen}
        />
        <Stack.Screen
            options={
                ({ navigation }: any) => (
                    {
                        headerShown: true,
                        headerTitleAlign: 'center',
                        headerTitle: 'Favorite Recipes',
                        headerStyle: {
                            backgroundColor: 'white',
                            shadowOpacity: 0,
                            elevation: 0,
                        },
                        headerLeft: () => <Pressable style={{ marginLeft: 16 }} onPress={() => navigation.pop()}>
                            <SvgBack />
                        </Pressable>
                    }
                )
            }
            name="FavoriteRecipes"
            component={FavoriteRecipesScreen}
        />
    </Stack.Navigator>;
};
