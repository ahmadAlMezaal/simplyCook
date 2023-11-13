import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useCallback } from 'react';
import { Card } from '#components/card.component';
import { ProgressIndicator } from '#components/progressIndicator.component';
import { allergiesRadioButtonList, bullets, consumerCountRadioButtonList, dietList } from '../constants/constants';
import { RadioButtonList } from '#components/radioButtonList.component';
import { useSafeState } from '../hooks/useSafeState.hook';
import { RecipesCarousel } from './components/recipesCarousel.component';
import { SimplyCookButton } from '#components/simplyCookButton.component';
import { FlipCard } from '#components/flipCard.component';

export const HomeScreen: React.FC = () => {

    const [hasAllergies, setHasAllergies] = useSafeState<number>(0);
    const [consumerCount, setConsumerCount] = useSafeState<number>(0);
    const [dietRestriction, setDietRestriction] = useSafeState<number>(0);

    const handleSelectAllergies = useCallback(
        (index: number) => {
            setHasAllergies(index);
        },
        [hasAllergies]
    );

    const handleSelectConsumerCount = useCallback(
        (index: number) => {
            setConsumerCount(index);
        },
        [consumerCount]
    );

    const handleSelectDiet = useCallback(
        (index: number) => {
            setDietRestriction(index);
        },
        [dietRestriction]
    );

    const handleCompleteProfile = () => {

    };

    return <ScrollView contentContainerStyle={styles.scrollViewStyle}>
        <View style={styles.container}>
            <Image style={styles.logo} source={require('#assets/sc-logo.png')} />
            <Card style={styles.card}>
                <View style={styles.header}>
                    <Text style={styles.title}>Complete your profile</Text>
                    <ProgressIndicator bullets={bullets} />
                </View>
                <Image style={styles.foodBoxImage} source={require('#assets/food-box.png')} />
                <View style={styles.innerContainer}>
                    <Text style={[styles.desc, styles.text]}>Tell us a bit about yourself so we can make your experience even better!</Text>
                    <Text style={[styles.fadedText, styles.text]}>Just so you know, you can
                        <Text style={styles.bold}>{' '}always{' '}</Text>
                        choose the recipes you receive. Well use this info if you forget to pick or fancy a surprise.</Text>
                    <View style={styles.centeredContainer}>
                        <RadioButtonList
                            containerStyle={{ marginBottom: 27 }}
                            selectedChoice={hasAllergies}
                            handleSelectChoice={handleSelectAllergies}
                            radioButtonList={allergiesRadioButtonList}
                        />
                        <RadioButtonList
                            containerStyle={{ marginBottom: 27 }}
                            selectedChoice={consumerCount}
                            handleSelectChoice={handleSelectConsumerCount}
                            radioButtonList={consumerCountRadioButtonList}
                        />
                        <RadioButtonList
                            selectedChoice={dietRestriction}
                            handleSelectChoice={handleSelectDiet}
                            radioButtonList={dietList}
                        />
                    </View>
                    <Text style={styles.subtitle}>Got it! Thanks James.</Text>
                    <Text style={[styles.text, { marginVertical: 11 }]}>Finally, pick 3 or more recipes that you like below:</Text>
                    <Text style={[styles.text, { fontSize: 13 }]}>This will help us personalise your SimplyCook experience. Tap 3 you like!</Text>
                </View>
                <RecipesCarousel />
                <SimplyCookButton containerStyle={styles.buttonStyle} onPress={handleCompleteProfile} title='Finish' />
            </Card>
        </View>
    </ScrollView>;
};

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            marginTop: 66,
        },
        logo: {
            width: 200,
            height: 50,
            alignSelf: 'center',
            resizeMode: 'contain'
        },
        scrollViewStyle: {
            flexGrow: 1,
            backgroundColor: '#44a562'
        },
        card: {
            marginTop: 34,
            marginHorizontal: 21,
            paddingTop: 34,
            marginBottom: 48,
            paddingBottom: 46,
        },
        title: {
            fontSize: 20,
            fontWeight: 'bold',
            paddingBottom: 18,
        },
        header: {
            alignItems: 'center',
            marginHorizontal: 34,
        },
        foodBoxImage: {
            marginVertical: 19,
        },
        innerContainer: {
            paddingHorizontal: 21,
        },
        bold: {
            fontWeight: 'bold',
        },
        desc: {
            fontWeight: '700',
        },
        fadedText: {
            color: '#414042',
            marginTop: 10,
        },
        text: {
            fontSize: 16,
        },
        centeredContainer: {
            paddingVertical: 40,
            paddingHorizontal: 17,
        },
        subtitle: {
            color: 'black',
            fontSize: 18,
            fontWeight: '700'
        },
        buttonStyle: {
            marginHorizontal: 17,
        }
    }
);
